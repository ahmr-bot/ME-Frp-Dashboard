<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-22 00:23:44
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-12-12 12:38:28
 * @FilePath: \lae-ui\src\views\user\Hosts.vue
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
         <v-card>
          <v-card-title>
            如果要释放或查看您的服务，请前往 <v-btn color="primary" href="https://dash.laecloud.com/hosts">莱云控制面板</v-btn>
          </v-card-title>
         </v-card>
        </template>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import List from '../../components/list.vue'
import http from '../../api/http'
import { ref, onMounted, onUnmounted } from 'vue'

const hosts = ref([])

const usages = ref([])

function refresh() {
  http
    .get('/hosts')
    .then((res) => {
      hosts.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })

  http
    .get('/hosts/usages')
    .then((res) => {
      usages.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

function deleteHost(id) {
  if (
    confirm(
      '释放后，您将无法再次使用此资源，它的数据将会被彻底删除并且无法找回，是否继续？'
    )
  ) {
    http.delete('/hosts/' + id).then((res) => {
      refresh()
    })
  }
}

function startHost(id) {
  http
    .patch('/hosts/' + id, { status: 'running' })
    .then((res) => {
      // if status 400
      if (res.status == 400) {
        alert(res.data.message)
      } else {
        refresh()
      }
    })

    .catch(() => {
      alert('无法解除暂停。可能是您的余额不足。')
    })
}

onMounted(() => {
  refresh()
  const interval = setInterval(refresh, 5000)
  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>
<script>
export default {
  data: () => ({ drawer: 111 }),
}
</script>