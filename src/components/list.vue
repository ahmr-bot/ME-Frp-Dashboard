<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-23 15:34:46
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-24 07:49:02
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
  <v-list>    
    <v-list-item
    prepend-icon="home"
    title="首页"
    :to="{ name: 'index' }"
    ></v-list-item>
  </v-list>
  <v-divider></v-divider>
  <v-list>    
    <v-list-item
    prepend-icon="list"
    title="隧道相关"
    :to="{ name: 'modules.tunnels' }"
    ></v-list-item>
  </v-list>
  <v-list>    
    <v-list-item
    prepend-icon="download"
    title="软件下载"
    :to="{ name: 'modules.tunnels.download' }"
    ></v-list-item>
  </v-list>
  <v-list>    
    <v-list-item
    prepend-icon="description"
    title="配置文件"
    :to="{ name: 'modules.tunnels.compact' }"
    ></v-list-item>
  </v-list>
  <v-list>    
    <v-list-item
    prepend-icon="cloud_done"
    title="服务状态"
    :to="{ name: 'servers' }"
    ></v-list-item>
  </v-list>
  <v-divider></v-divider>
  <v-list>    
    <v-list-item
    prepend-icon="contact_support"
    title="工单"
    :to="{ name: 'work-orders' }"
    ></v-list-item>
  </v-list>
  <v-list>    
    <v-list-item
    prepend-icon="paid"
    title="计费项目"
    :to="{ name: 'hosts' }"
    ></v-list-item>
  </v-list>
  <v-list>    
    <v-list-item
    prepend-icon="task"
    title="任务"
    :to="{ name: 'tasks' }"
    ></v-list-item>
  </v-list>
  <v-divider></v-divider>
  <v-list>    
    <v-list-item
    prepend-icon="forum"
    title="论坛"
    href="https://forum.laecloud.com"
    ></v-list-item>
  </v-list>
</template>
<script setup>
   import md5 from 'md5/md5'
  import store from '../plugins/store'
  const avatar= 'https://gravatar.loli.net/avatar/' + md5(store.state.user.email) + '?s=64'
  console.log(avatar)
  </script>