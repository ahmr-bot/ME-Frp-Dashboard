<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-22 00:23:44
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-26 20:52:06
 * @FilePath: \lae-ui\src\views\modules\tunnels\Download.vue
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
          <v-card text="MirrorEdge 镜缘映射 赞助我们">
            <v-card-text>
              <div>MirrorEdge 属于 纯公益服务, 不限带宽/流量/隧道，即便是加上防止滥用的1块钱，也是根本不能盈利的，做这么久的免费服务也纯纯靠良心，所以，如果你觉得 镜缘映射 是个好服务</div>
              <div>那么就请尽您的绵薄之力，助我们走的更久吧！</div>
              <v-btn href="https://afdian.net/a/aehxy">赞助(现金)</v-btn>
              <div>服务器赞助请联系 1878832944</div>
            </v-card-text>
          </v-card>
          <br />
          <v-card text="广告位">

            <div class="overflow-auto">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>名称</th>
                    <th>描述</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="ads in adslist">
                    <td>{{ ads.name }}</td>
                    <td>{{ ads.des }}</td>
                    <v-btn><a :href="ads.url">打开</a></v-btn>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-card>
          <br />
          <v-card text="赞助列表">

            <div class="overflow-auto">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>昵称</th>
                    <th>赞助项目</th>
                    <th>留言</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="json in list">
                    <td>{{ json.name }}</td>
                    <td>{{ json.thing }}</td>
                    <td>{{ json.says }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
const list = ref({})
axios({
  method:'get',
  url:'https://raw.cdn.mcserverx.com/ahmr-bot/sponsor-list/main/sponsor.json'
}).then((res)=>{
  console.log(res.data)
  list.value = res.data
})
const adslist = ref({})
axios({
  method:'get',
  url:'https://raw.cdn.mcserverx.com/ahmr-bot/sponsor-list/main/ads.json'
}).then((res)=>{
  console.log(res.data)
  adslist.value = res.data
})

</script>
<script>
export default {
  data: () => ({ drawer: null }),
}
</script>