<template>
  <div class="tabGenerateWrapper">
    <fm-generate-form :data="jsonData" ref="generateForm"></fm-generate-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const generateForm = ref()

const jsonData = {
  list: [
    {
      type: 'input',
      icon: 'icon-input',
      options: {
        width: '',
        defaultValue: '',
        required: false,
        requiredMessage: '',
        dataType: '',
        dataTypeCheck: false,
        dataTypeMessage: '',
        pattern: '',
        patternCheck: false,
        patternMessage: '',
        validatorCheck: false,
        validator: '',
        placeholder: '',
        customClass: '',
        disabled: false,
        labelWidth: 100,
        isLabelWidth: false,
        hidden: false,
        dataBind: true,
        showPassword: false,
        remoteFunc: 'func_z2lqyv1a',
        remoteOption: 'option_z2lqyv1a'
      },
      events: { onChange: '', onFocus: '', onBlur: '' },
      name: '单行文本',
      key: 'z2lqyv1a',
      model: 'input_z2lqyv1a',
      rules: []
    },
    {
      type: 'textarea',
      icon: 'icon-diy-com-textarea',
      options: {
        width: '',
        defaultValue: '',
        required: false,
        requiredMessage: '',
        disabled: false,
        pattern: '',
        patternMessage: '',
        validatorCheck: false,
        validator: '',
        placeholder: '',
        customClass: '',
        labelWidth: 100,
        isLabelWidth: false,
        hidden: false,
        dataBind: true,
        remoteFunc: 'func_geb5vsy8',
        remoteOption: 'option_geb5vsy8'
      },
      events: { onChange: '', onFocus: '', onBlur: '' },
      name: '多行文本',
      key: 'geb5vsy8',
      model: 'textarea_geb5vsy8',
      rules: []
    },
    {
      type: 'radio',
      icon: 'icon-radio-active',
      options: {
        inline: false,
        defaultValue: '',
        showLabel: false,
        options: [
          { value: 'Option 1', label: 'Option 1' },
          { value: 'Option 2', label: 'Option 2' },
          { value: 'Option 3', label: 'Option 3' }
        ],
        required: false,
        requiredMessage: '',
        validatorCheck: false,
        validator: '',
        width: '',
        remote: false,
        remoteType: 'datasource',
        remoteOption: 'option_jg58x37w',
        remoteOptions: [],
        props: { value: 'value', label: 'label' },
        remoteFunc: 'func_jg58x37w',
        customClass: '',
        labelWidth: 100,
        isLabelWidth: false,
        hidden: false,
        dataBind: true,
        disabled: false
      },
      events: { onChange: '' },
      name: '单选框组',
      key: 'jg58x37w',
      model: 'radio_jg58x37w',
      rules: []
    }
  ],
  config: {
    labelWidth: 100,
    labelPosition: 'right',
    size: 'default',
    customClass: '',
    ui: 'element',
    layout: 'horizontal',
    labelCol: 3,
    width: '100%',
    hideLabel: false,
    hideErrorMessage: false,
    eventScript: [{ key: 'mounted', name: 'mounted', func: '' }],
    dataSource: []
  }
}

const handleSubmit = () => {
  generateForm.value.getData().then((data) => {
    ElMessageBox.alert(data, '表单数据')
  })
}
</script>
<style lang="less" scoped>
.tabGenerateWrapper {
}
</style>
