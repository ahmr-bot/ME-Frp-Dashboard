<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-23 15:34:46
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-23 17:18:42
 * @FilePath: \lae-ui\src\components\list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<v-list>
    <v-list-item
    :prepend-avatar=avatar
    ><v-list-item-tittle
    >{{ store.state.user.name }}</v-list-item-tittle></v-list-item>
  </v-list>
  <li class="nav-item">
              <router-link
                class="nav-link text-auto"
                active-class="active"
                :to="{ name: 'servers' }"
                >状态</router-link
              >
            </li>
</template>
<script setup>
   import md5 from 'md5/md5'
  import store from '../plugins/store'
  const avatar= 'https://gravatar.loli.net/avatar/' + md5(store.state.user.email) + '?s=64'
  console.log(avatar)
  </script>