import type { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/basicPage.vue'
import notFound from '@/views/404.vue'
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/testtab',
    children: [
      {
        path: '/form',
        redirect: '/mkFormList',
        meta: {
          id: '1',
          title: '开发人员表单制作',
          icon: 'Avatar'
        },
        children: [
          {
            path: '/mkFormList',
            name: 'mkFormList',
            component: () => import('@/views/mkFormList/index.vue'),
            meta: {
              id: '1-1',
              title: '制作表单列表'
            }
          },
          {
            path: '/form-making',
            name: 'form-making',
            component: () => import('@/views/tableDesign/index.vue'),
            meta: {
              id: '1-2',
              title: '制作表单',
              icon: 'setting'
            }
          }
        ]
      },
      {
        path: '/tabGenerate',
        name: 'tabGenerate',
        component: () => import('@/views/tabGenerate/index.vue'),
        meta: {
          id: '2',
          title: '表单生成',
          icon: 'setting'
        }
      },
      {
        path: '/testtab',
        name: 'testTab',
        component: () => import('@/views/testTab.vue'),
        meta: {
          id: '3',
          title: '测试tab',
          icon: 'user'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: notFound }
]
