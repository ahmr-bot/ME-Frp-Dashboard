<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-18 21:45:19
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-24 12:18:20
 * @FilePath: \lae-ui\src\components\EditableTitle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h3><input v-model="title" @change="change(title)" /></h3>

</template>

<script setup>
import { toRef } from 'vue'
// props

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  change: {
    type: Function,
    default: () => { },
  },
})

const newTitle = toRef(props)
</script>

<style scope>
input {
  border: 0;
  outline: 0;
  background: transparent;
  width: 100%;
}
</style>
