<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-18 21:45:19
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-23 18:54:59
 * @FilePath: \lae-ui\src\views\Servers.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <v-app id="inspire">
  <!--appbar-->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>MirrorEdge Frp 控制面板</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
        rail
        permanent
    ><List />
    </v-navigation-drawer>
      <!--appbarend-->
    <v-main>
      <v-container>

          <template v-for="n in 1" :key="n">
  <div>
    <h3>运行状态</h3>

    <p>查看我们的服务器运行状态</p>

    <div class="overflow-auto">
      <table class="table">
        <thead>
          <tr>
            <th>服务</th>
            <th>名称和状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="server in servers">
            <td>{{ server.module.name }}</td>
            <td>
              <span v-if="server.status == 'up'">
                <span class="text-success"
                  ><i class="bi bi-check-circle"></i>
                  <!-- 运行中 -->
                </span>
              </span>
              <span v-else-if="server.status == 'maintenance'">
                <span class="text-warning">
                  <i class="bi bi-wrench-adjustable"></i>
                  <!-- 维护中 -->
                </span>
              </span>
              <span v-else>
                <span class="text-danger">
                  <i class="bi bi-x-circle"></i>
                  <!-- 不可用 -->
                </span>
              </span>
              &nbsp; {{ server.name }}
            </td>
            <!-- <td>{{ new Date(server.updated_at).toLocaleString() }}</td> -->
            <!-- <td>{{ new Date(server.created_at).toLocaleString() }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="mt-3">模块列表</h3>
    <p>提供服务的模块</p>

    <div class="overflow-auto">
      <table class="table">
        <thead>
          <tr>
            <th>服务</th>
            <th>名称和状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="module in modules">
            <td>{{ module.name }}</td>
            <td>
              <span v-if="module.status == 'up'">
                <span class="text-success"
                  ><i class="bi bi-check-circle"></i>
                  &nbsp; 正常
                </span>
              </span>
              <span v-else-if="module.status == 'maintenance'">
                <span class="text-warning">
                  <i class="bi bi-wrench-adjustable"></i>
                  &nbsp; 维护中
                </span>
              </span>
              <span v-else>
                <span class="text-danger">
                  <i class="bi bi-x-circle"></i>
                  &nbsp; 不可用
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
   
  </v-container>
</v-main>
</v-app>
</template>

<script setup>
 import List from '../components/list.vue'
  import http from '../api/http'
  import echo from '../plugins/echo'
  import { ref, onMounted, onUnmounted } from 'vue'

  const servers = ref([])
  const modules = ref([])
  http.get('/servers').then((res) => {
    servers.value = res.data
  })
  http.get('/modules').then((res) => {
    modules.value = res.data
  })
  onMounted(() => {
    echo.channel('servers').listen('.servers', (e) => {
      servers.value = e.data
      http.get('/modules').then((res) => {
        modules.value = res.data
      })
    })
  })

  onUnmounted(() => {
    echo.leave('servers')
  })
</script>
<script>
  export default {
    data: () => ({ drawer: 111 }),
  }
</script>