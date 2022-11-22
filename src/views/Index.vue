<template>
  <div
    v-show="!show"
    style="width: 100%; height: 500px"
    id="chart-container"
  ></div>

  <div class="mb-2" v-show="show">
    <h2>欢迎使用 MirrorEdge 镜缘映射</h2>

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

<script setup>
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

  let fontSize = 100
  let color = 'black'

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

  let sentence = store.state.user.name ?? '莱云'

  function resizeFont() {
    if (window.innerWidth < 768) {
      fontSize = 40

      if (sentence.length > 20) {
        fontSize = 20
      }

      //   如果渲染后字体太大，就缩小
      if (sentence.length * fontSize > window.innerWidth) {
        fontSize = window.innerWidth / sentence.length
      }
    } else {
      if (sentence.length > 20) {
        fontSize = 50
      }
    }
  }
  // if dark mode
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    color = 'white'
  }

  onMounted(() => {
    resizeFont()

    var chartDom = document.getElementById('chart-container')
    var myChart = echarts.init(chartDom, null, {
      renderer: 'svg',
    })
    var option

    let lineDash = randomInt() * 10
    option = {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: sentence,
              fontSize: fontSize,
              fontWeight: 300,
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: color,
              lineWidth: 1,
            },
            keyframeAnimation: {
              duration: 1000,
              loop: false,
              keyframes: [
                {
                  percent: 0.5,
                  style: {
                    fill: 'transparent',
                    lineDashOffset: lineDash,
                    lineDash: [lineDash, 0],
                  },
                },
                {
                  percent: 1,
                  style: {
                    fill: color,
                  },
                }
              ],
            },
          },
        ],
      },
    }

    option && myChart.setOption(option)

    // when resize, resize chart
    window.addEventListener('resize', () => {
      myChart.resize()

      resizeFont()
    })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', () => {
      myChart.resize()
      resizeFont()
    })
  })
</script>
