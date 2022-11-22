<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-22 00:23:44
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-22 19:11:04
 * @FilePath: \lae-ui\src\views\modules\tunnels\Download.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h3 class="mt-3">客户端下载</h3>

  <div class="overflow-auto">
    <table class="table table-hover">
    <thead>
      <tr>
        <th>类型</th>
        <th>架构</th>
        <th>链接</th>
        <th>下载</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="link in links">
        <td>{{ link.name }}</td>
        <td>{{ link.arch }}</td>
        <td>
          <code>{{ link.url }}</code>
        </td>
        <td>
          <v-btn><a
            :href="link.url"
            >下载</a
          ></v-btn>
        </td>
      </tr>
    </tbody>
  </table>
  </div>

</template>

<script setup>
import { ref } from 'vue'


const links = ref({})

links.value = [
    {
        name: 'Windows 图形启动器',
        arch: 'amd64',
        url: 'https://download.mefrp.com/d/client/MirrorEdgeFrpSetup.exe',
    },
    {
        name: 'Windows',
        arch: 'amd64',
        url: 'http://cdn.114514.space/Download/Files/2.0.0/frp_0.44.0_windows_amd64.zip',
    },
    {
        name: 'Linux',
        arch: 'amd64',
        url: 'http://cdn.114514.space/Download/Files/2.0.0/frp_0.44.0_linux_amd64.tar.gz',
    },
];


</script>
