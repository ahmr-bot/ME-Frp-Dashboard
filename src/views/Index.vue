<template>
  <v-app id="inspire">
    <!--appbar-->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>MirrorEdge Frp 控制面板</v-toolbar-title>
      <v-list>
    <v-list-item prepend-icon="login" title="如果长时间白屏，请点击此处来登录" :to="{ name: 'login' }"></v-list-item>
  </v-list>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" expand-on-hover rail permanent>
      <List />
    </v-navigation-drawer>
    <!--appbarend-->
    <v-main>
      <v-container>

        <template v-for="n in 1" :key="n">
          <div v-show="!show" style="width: 100%; height: 500px" id="chart-container"></div>

          <div class="mb-2" v-show="show">
            <v-alert type="success" color="info" title="Welcome！" variant="tonal">欢迎使用 MirrorEdge 镜缘映射</v-alert>
            <br />
            <v-card text="用户信息">
              <v-card-subtitle>{{ store.state.user.name }}</v-card-subtitle>
              <v-card-text>
                <div>隧道数量: 3 条</div>
                <div>带宽: ∞ Mbps</div>
                <div>余额: {{ store.state.user.balance }} 元（莱云账户余额 目前没啥用）</div>
                <router-link class="text-auto" :to="{ name: 'billing.transactions' }"> 交易记录</router-link><br />
                <router-link class="text-auto" :to="{ name: 'billing.charge' }">充值</router-link><br />
                <router-link :to="{ name: 'login' }">更换账号</router-link>
                <div>Aehxy 运营/策划</div>
                <div><a href="https://dash.laecloud.com">莱云 所有</a></div>
              </v-card-text>
            </v-card>
            <br />
            <v-card text="赞助">
            <v-card-text>
              <div>MirrorEdge 属于 纯公益服务, 不限带宽/流量/隧道，即便是加上防止滥用的1块钱，也是根本不能盈利的，做这么久的免费服务也纯纯靠良心，所以，如果你觉得 镜缘映射 是个好服务</div>
              <div>那么就请尽您的绵薄之力，助我们走的更久吧！</div>
              <v-btn class="bg-blue" href="https://afdian.net/a/aehxy">赞助(现金)</v-btn>
              <div>服务器赞助请联系 1878832944</div>
            </v-card-text>
          </v-card>
          <br />
            <v-card text="公告">
              <v-card-text>
                <div v-show="base_url">

                  <div class="list-group mt-3" v-for="item in pinned">
                    <span v-if="item.attributes">
                      <a class="list-group-item list-group-item-action shadow-sm rounded" target="_blank"
                        :href="base_url + '/d/' + item.attributes.slug">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1 text-success">
                            {{ item.attributes.title }}
                          </h5>
                          <small>
                            {{ new Date(item.attributes.lastPostedAt).toLocaleString() }}
                          </small>
                        </div>
                        <!-- <p class="mb-1">
            <span></span>
          </p> -->
                        <!-- <small class="text-muted">
        </small> -->
                      </a>
                    </span>
                  </div>

                </div>
              </v-card-text>
            </v-card>
          </div>
        </template>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import List from '../components/list.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import http from '../api/http'
import store from '../plugins/store'

import * as echarts from 'echarts/core'
import { GraphicComponent } from 'echarts/components'
import { SVGRenderer } from 'echarts/renderers'

echarts.use([GraphicComponent, SVGRenderer])

const pinned = ref([])
const base_url = ref('')
const show = ref(false)
const loginstatus = ref({})
loginstatus.value = false
http.get('forum/pinned').then((res) => {
  pinned.value = res.data

  base_url.value = pinned.value.base_url

  setTimeout(() => {
    show.value = true
  }, 1000)
})

function randomInt() {
  return Math.floor(Math.random() * 100)
}

  // let fontSize = 100
 //  let color = 'black'

  // let sentences = [
  //   'Make LAE great again!',
  //   '莱云',
  //   'LAECLOUD',
  //   '正在点咖啡',
  //   '正在拉花',
  //   '正在制作卡布奇诺',
  //   '正在制作拿铁',
  //   'Mirror Edge 现在是莱云的一部分!',
  //   '齉龘齉齾爩麤龗灪龖厵纞虋',
  //   '锟斤拷烫烫烫屯屯屯'
  // ]
  // // pick
  // let sentence = sentences[Math.floor(Math.random() * sentences.length)]


</script>
<script>
export default {
  data: () => ({ drawer: 111 }),
}
</script>