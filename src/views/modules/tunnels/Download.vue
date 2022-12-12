<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-22 00:23:44
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-12-12 12:41:11
 * @FilePath: \lae-ui\src\views\modules\tunnels\Download.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <v-app id="inspire">
    <!--appbar-->
    <v-app-bar color="primary">
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
          <v-card text="MirrorEdge 镜缘映射 客户端下载">
            <v-card-subtitle><v-btn color="primary" href="https://dash.laecloud.com/modules/gct">莱云-游戏容器</v-btn> 每月仅需 3.95 元起 按量计费  Minecraft 腐竹的不二之选</v-card-subtitle>
              <v-table class="table table-hover">
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
                      <v-btn color="primary" :href="link.url">下载</v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-table>
          </v-card>
        </template>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import List from '../../../components/list.vue'
import axios from 'axios'
const links = ref({})
axios({
  method:'get',
  url:'https://raw.cdn.mcserverx.com/iVampireSP/lae-ui/main/public/downloads.json'
}).then((res)=>{
  console.log(res.data.links)
  links.value = res.data
})

</script>
<script>
export default {
  data: () => ({ drawer: null }),
}
</script>