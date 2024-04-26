import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import os from 'os'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
//Gzip文件压缩
import viteCompression from 'vite-plugin-compression'
// 获取本地 IP 地址
function getLocalIP() {
  const interfaces = os.networkInterfaces()
  for (const name in interfaces) {
    const iface = interfaces[name]
    if (!iface) continue
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      ) {
        return alias.address
      }
    }
  }
  return '0.0.0.0'
}
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx() // 如果需要
      }
    }),
    // 打包体积分析
    visualizer({
      open: true,
      filename: 'visualizer.html' //分析图生成的文件名
    }),
    //开启Gzip压缩
    viteCompression({
      verbose: true, // 是否在控制台中输出压缩结果
      disable: false,
      threshold: 1024, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
      algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
      ext: '.gz',
      deleteOriginFile: false // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
    })
    // AutoImport({
    //   resolvers: [ElementPlusResolver()]
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  server: {
    host: getLocalIP(),
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    minify: 'terser',
    // 清除所有console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]' // 资源文件像 字体，图片等
      }
    }
  }
})
