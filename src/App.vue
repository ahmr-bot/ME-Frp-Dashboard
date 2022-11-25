<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-18 21:45:19
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-25 11:44:48
 * @FilePath: \lae-ui\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>

  <div>
    <div class="background-container"></div>

    <!-- <Modals /> -->
    <Layout />
  </div>
</template>

<script setup>
import Layout from './components/Layout.vue'
  // import Modals from './components/Modals.vue';
  //   import app from './config/app'

  //   document.title = app.name

  //   get client height
  //   let clientHeight = document.documentElement.clientHeight

  //   //   when resize window
  //   window.onresize = () => {
  //     clientHeight = document.documentElement.clientHeight
  //   }
</script>

<style>
.editable {
  border: 0;
  outline: 0;
  background: transparent;
  width: 100%;
}
</style>
