<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-18 21:45:19
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-12-06 12:28:43
 * @FilePath: \lae-ui\src\views\work-orders\Index.vue
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
          <div>
            <h3>工单</h3>
            <div class="overflow-auto">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">名称</th>
                    <th scope="col">主机</th>
                    <th scope="col">接收方</th>
                    <th scope="col">状态</th>
                    <th scope="col">上次更新</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="workOrder in workOrders">
                    <tr class="cursor-pointer" @click="viewWorkOrder(workOrder.id)">
                      <td>{{ workOrder.title }}</td>
                      <td>{{ workOrder.host.name }}</td>
                      <td>{{ workOrder.module.name }}</td>
                      <td>
                        <WorkOrderStatus :status="workOrder.status" />
                      </td>
                      <td>{{ new Date(workOrder.updated_at).toLocaleString() }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div class="btn-group" role="group">
              <v-btn color="primary" type="button" class="btn btn-outline-primary" :to="{ name: 'work-orders.create' }">提交工单
              </v-btn>
            </div>
          </div>
        </template>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import List from '../../components/list.vue'
import { ref, onUnmounted } from 'vue'
import http from '../../api/http'
import router from '../../plugins/router'
import WorkOrderStatus from '../../components/WorkOrderStatus.vue'

const workOrders = ref([])

function refresh() {
  http.get('/work-orders').then((res) => {
    workOrders.value = res.data
  })
}

refresh()

//   auto reload
let interval = setInterval(refresh, 10000)

onUnmounted(() => {
  clearInterval(interval)
})

function viewWorkOrder(workOrder_id) {
  router.push({
    name: 'work-orders.show',
    params: {
      id: workOrder_id,
    },
  })
}
</script>
<script>
export default {
  data: () => ({ drawer: 111 }),
}
</script>