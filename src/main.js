/*
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-18 21:45:19
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-12-06 12:05:52
 * @FilePath: \lae-ui\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './style.css';

import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { aliases, md } from 'vuetify/iconsets/md'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
// import pangu from 'pangu';
// import { useRoute } from 'vue-router';

import App from './App.vue';

import router from './plugins/router';
import store from './plugins/store';

// if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('/assets/js/paint.js');

const app = createApp(App);

// app.config.globalProperties.$http = http;
// app.config.globalProperties.$route = useRoute();

// retry
// import axiosRetry from 'axios-retry';
// axiosRetry(axios, { retries: 3 });

// 引入 http

app.use(router, store, VueAxios, axios);

app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');
app.use(vuetify)
// let client = new PusherJS('app-key', {
//   wsHost: '127.0.0.1',
//   wsPort: 6001,
//   forceTLS: false,
//   encrypted: true,
//   disableStats: true,
//   enabledTransports: ['ws', 'wss'],
// });

// client.subscribe('users.1').bind('user', (message) => {
//     console.log(message)
// });

// let client = new PusherJS('app-key', {
//   wsHost: '127.0.0.1',
//   wsPort: 6001,
//   forceTLS: false,
//   encrypted: true,
//   disableStats: true,
//   enabledTransports: ['ws', 'wss'],

// });

// client.subscribe('test').bind('test', (message) => {
//   console.log(message);
// });

// document.addEventListener('DOMContentLoaded', () => {
//   // listen to any DOM change and automatically perform spacing via MutationObserver()
//   pangu.autoSpacingPage();
// });
