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
  <div
    v-show="!show"
    style="width: 100%; height: 500px"
    id="chart-container"
  ></div>

  <div class="mb-2" v-show="show">
    <v-alert type="success"
    color="info"
      title="Welcome！"
      variant="tonal">欢迎使用 MirrorEdge 镜缘映射</v-alert>
    <br />
    <v-card text="用户信息">
      <v-card-subtitle>{{ store.state.user.name }}</v-card-subtitle>
    <v-card-text>
      <div>隧道数量: ∞ 条</div>
      <div>带宽: ∞ Mbps</div>
      <div>余额: {{ store.state.user.balance }} 元</div>
          <router-link class="text-auto" :to="{ name: 'billing.transactions' }"
            > 交易记录</router-link
          ><br />
          <router-link class="text-auto" :to="{ name: 'billing.charge' }"
            >充值</router-link
          >
    </v-card-text>
         </v-card>
        <br />
         <v-card text="公告">
          <v-card-text>
    <div v-show="base_url">
      
      <div class="list-group mt-3" v-for="item in pinned">
        <span v-if="item.attributes">
          <a
            class="list-group-item list-group-item-action shadow-sm rounded"
            target="_blank"
            :href="base_url + '/d/' + item.attributes.slug"
          >
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