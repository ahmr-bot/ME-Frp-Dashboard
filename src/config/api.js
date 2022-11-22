/*
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-18 21:45:19
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-22 17:11:07
 * @FilePath: \lae-ui\src\config\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const config = {
  dev: {
    api: 'https://api.laecloud.com/api/',
    auth: 'https://api.laecloud.com',

    ws_host: 'socket.lae.yistars.net',
    ws_port: 443,
    ws_auth_endpoint: 'https://api.lae.yistars.net/broadcasting/auth',
  },
  prod: {
    api: 'https://api.laecloud.com/api/',
    auth: 'https://api.laecloud.com',

    ws_host: 'socket.lae.yistars.net',
    ws_port: 443,
    ws_auth_endpoint: 'https://api.lae.yistars.net/broadcasting/auth',
  },
};

let current = config.dev;

if (process.env.NODE_ENV === 'production') {
  current = config.prod;
}

console.log('api endpoint: ' + current.api);

export default current;
