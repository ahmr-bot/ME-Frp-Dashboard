/*
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-22 18:01:08
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-22 18:04:37
 * @FilePath: \lae-ui\src\plugins\vuetify.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import '@mdi/font/css/materialdesignicons.css'
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})