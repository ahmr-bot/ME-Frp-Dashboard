<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-18 21:45:19
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-23 17:15:10
 * @FilePath: \lae-ui\src\views\modules\tunnels\Compact.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <v-app id="inspire">
    <!--appbar-->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>MirrorEdge Frp 控制面板</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" expand-on-hover rail permanent>
      <List />
    </v-navigation-drawer>
    <!--appbarend-->
    <v-main>
      <v-container>

        <template v-for="n in 1" :key="n">
          <h3 class="mt-3">整合配置文件</h3>

          <div class="mt-3"></div>
          <select class="form-control" v-model="selectedServer" @change="getTunnels()">
            <option value="0" selected>先选择一个服务器</option>
            <option v-for="server in servers" :value="server.id">
              {{ server.name }}
            </option>
          </select>

          <h3 class="mt-3">配置文件</h3>

          <textarea class="w-100" rows="50" readonly>{{ all_config }}</textarea>
        </template>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import List from '../../../components/list.vue'
import { ref } from 'vue'
import http from '../../../api/http'

const servers = ref([])

const selectedServer = ref('0')

const tunnels = ref([])

const all_config = ref('请先在上面选择服务器。')

http.get('/modules/frp/servers').then((res) => {
  servers.value = res.data
})

function getTunnels() {
  http
    .get(
      '/modules/frp/hosts?with_config=1&&server_id=' + selectedServer.value
    )
    .then((res) => {
      if (res.data.length > 0) {
        tunnels.value = res.data
        all_config.value = res.data[0].config.server + '\n\n'

        res.data.forEach((tunnel) => {
          all_config.value += `
# ${tunnel.name} 在 ${tunnel.server.name} 上
${tunnel.config.client}
`
        })
      } else {
        all_config.value = '这个服务器下没有隧道。'
      }
    })
}
</script>
<script>
export default {
  data: () => ({ drawer: null }),
}
</script>