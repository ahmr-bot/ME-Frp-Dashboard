import {createRouter, createWebHistory} from 'vue-router'

import user from './stores/user'
import app from '../config/app'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue'),
        meta: {
            auth: false,
            keepalive: true,
            title: '欢迎',
        },
    },
    {
        path: '/stars',
        name: 'stars',
        component: () => import('../views/Stars.vue'),
        meta: {
            auth: true,
            keepalive: true,
            title: '繁星',
        },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        auth: true,
        keepalive: true,
        title: '关于',
      },
    },
    {
        path: '/auth/login',
        name: 'auth.login',
        meta: {
            auth: false,
            title: '登录',
            collapses: ['left'],
        },
        component: () => import('../views/users/Login.vue'),
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            collapses: ['left'],
            title: '用户中心',
        },
        component: () => import('../views/users/User.vue'),
    },
    {
        path: '/announcements',
        name: 'forum.announcements',
        meta: {
            title: '公告',
        },
        component: () => import('../views/forum/Announcements.vue'),
    },
    {
        path: '/pinned',
        name: 'forum.pinned',
        meta: {
            title: '固钉',
        },
        component: () => import('../views/forum/Pinned.vue'),
    },
    {
        path: '/partner',
        name: 'forum.partner',
        meta: {
            title: '合作',
        },
        component: () => import('../views/forum/Partner.vue'),
    },
    {
        path: '/status',
        name: 'status',
        meta: {
            title: '状态',
        },
        component: () => import('../views/Status.vue'),
    },
    // {
    //   path: '/servers',
    //   name: 'servers',
    //   component: () => import('../../../../Downloads/lae-ui-main/src/views/Servers.vue'),
    //   meta: {
    //     auth: true,
    //     keepalive: true,
    //     title: '服务器状态',
    //   },
    // },
    // {
    //   path: '/tasks',
    //   name: 'tasks',
    //   component: () => import('../../../../Downloads/lae-ui-main/src/views/Tasks.vue'),
    //   meta: {
    //     auth: true,
    //     keepalive: true,
    //     title: '任务队列',
    //   },
    // },
    {
        path: '/hosts',
        name: 'hosts',
        component: () => import('../views/Hosts.vue'),
        meta: {
            auth: true,
            keepalive: true,
            title: '主机 - 计费项目列表',
        },
    },
    {
        path: '/work-orders',
        name: 'work-orders',
        component: () => import('../views/work-orders/Index.vue'),
        meta: {
            auth: true,
            title: '工单',
        },
    },
    {
        path: '/work-orders/create',
        name: 'work-orders.create',
        component: () => import('../views/work-orders/Create.vue'),
        meta: {
            title: '创建工单',
            auth: false,
        },
    },
    {
        path: '/work-orders/:id',
        name: 'work-orders.show',
        component: () => import('../views/work-orders/Show.vue'),
        meta: {
            title: '跟进工单',
            auth: false,
        },
    },
    // Modules
    {
        path: '/modules',
        name: 'modules',
        props: true,
        component: () => import('../views/modules/Base.vue'),
        meta: {
            auth: true,
        },
        children: [
            {
                path: 'tunnels',
                // name: 'modules.tunnels',
                component: () => import('../views/modules/tunnels/Base.vue'),
                meta: {
                    title: 'ME Frp',
                },
                children: [
                    {
                        path: '',
                        name: 'modules.tunnels.index',
                        component: () => import('../views/modules/tunnels/Index.vue'),
                        meta: {
                            title: '隧道列表',
                        },
                    },
                    {
                        path: 'sponsor',
                        name: 'modules.tunnels.sponsor',
                        component: () => import('../views/modules/tunnels/Sponsor.vue'),
                        meta: {
                            title: '赞助列表',
                        },
                    },
                    {
                        path: 'sign',
                        name: 'modules.tunnels.sign',
                        component: () => import('../views/modules/tunnels/Sign.vue'),
                        meta: {
                            title: '流量补给',
                        },
                    },
                    {
                        path: 'create',
                        name: 'modules.tunnels.create',
                        component: () => import('../views/modules/tunnels/Create.vue'),
                        meta: {
                            title: '创建隧道',
                        },
                    },
                    {
                        path: 'concat',
                        name: 'modules.tunnels.concat',
                        component: () => import('../views/modules/tunnels/Concat.vue'),
                        meta: {
                            title: '配置文件',
                        },
                    },
                    {
                        path: 'status',
                        name: 'modules.tunnels.status',
                        component: () => import('../views/modules/tunnels/Status.vue'),
                        meta: {
                            title: '服务器状态',
                        },
                    },
                    {
                        path: ':id',
                        name: 'modules.tunnels.show',
                        component: () => import('../views/modules/tunnels/Show.vue'),
                        meta: {
                            // collapses: ['left'],
                            title: '隧道详情',
                        },
                    },
                    {
                        path: 'downloads',
                        name: 'modules.tunnels.downloads',
                        component: () => import('../views/modules/tunnels/Downloads.vue'),
                        meta: {
                            title: '下载客户端',
                        },
                    },
                ],
            },
            {
                path: 'gct',
                // name: 'modules.gct',
                component: () => import('../views/modules/gct/Base.vue'),
                meta: {
                    title: 'GCT',
                },
                children: [
                    {
                        path: '',
                        name: 'modules.gct.index',
                        component: () => import('../views/modules/gct/Index.vue'),
                        meta: {
                            title: '游戏容器',
                        },
                    },
                    {
                        path: 'create',
                        name: 'modules.gct.create',
                        props: true,
                        component: () => import('../views/modules/gct/Create.vue'),
                        meta: {
                            title: '创建容器',
                        },
                    },
                    // {
                    //     path: 'intro',
                    //     name: 'modules.gct.intro',
                    //     props: true,
                    //     component: () => import('../../../../Downloads/lae-ui-main/src/views/modules/gct/Intro.vue'),
                    //     meta: {
                    //         title: '引导创建',
                    //     },
                    // },
                    {
                        path: ':id',
                        name: 'modules.gct.show',
                        props: true,
                        component: () => import('../views/modules/gct/Show.vue'),
                        meta: {
                            title: '显示游戏容器',
                        },
                    }
                ],
            },
            {
                // 隐藏功能，不需要加入菜单
                path: 'red-packets',
                component: () => import('../views/modules/red-packets/Base.vue'),
                meta: {
                    title: '红包',
                },
                children: [
                    // {
                    //     path: '',
                    //     name: 'modules.red-packets.index',
                    //     component: () => import('../views/modules/red-packets/Index.vue'),
                    //     meta: {
                    //         title: '红包',
                    //     },
                    // },
                    {
                        path: '',
                        name: 'modules.red-packets.index',
                        props: true,
                        component: () => import('../views/modules/red-packets/Create.vue'),
                        meta: {
                            title: '发红包',
                        },
                    },
                    {
                        path: ':id',
                        name: 'modules.red-packets.show',
                        props: true,
                        component: () => import('../views/modules/red-packets/Show.vue'),
                        meta: {
                            title: '红包',
                        },
                    }
                ],
            },
            {
                path: 'forbidden-forest',
                component: () => import('../views/modules/forbidden-forest/Base.vue'),
                meta: {
                    title: '禁林',
                },
                children: [
                    {
                        path: '',
                        name: 'modules.forbidden-forest.index',
                        component: () => import('../views/modules/forbidden-forest/Index.vue'),
                    },
                    {
                        path: 'my',
                        name: 'modules.forbidden-forest.my',
                        component: () => import('../views/modules/forbidden-forest/My.vue'),
                    },
                    {
                        path: 'blogs/:blog_id/posts/:post_id',
                        name: 'modules.forbidden-forest.show',
                        component: () => import('../views/modules/forbidden-forest/Show.vue'),
                    }
                ],
            },
            {
                path: 'ip-manager',
                component: () => import('../views/modules/ip-manager/Base.vue'),
                meta: {
                    title: 'IP 管理',
                },
                children: [
                    {
                        path: '',
                        name: 'modules.ip-manager.index',
                        component: () => import('../views/modules/ip-manager/Index.vue'),
                    },
                    {
                        path: 'get',
                        name: 'modules.ip-manager.create',
                        component: () => import('../views/modules/ip-manager/Create.vue'),
                    },
                    {
                        path: 'forward',
                        name: 'modules.ip-manager.forward',
                        component: () => import('../views/modules/ip-manager/Forward.vue'),
                    }
                ],
            }
            // {
            //   path: 'cdn',
            //   name: 'modules.cdn',
            //   component: () => import('../../../../Downloads/lae-ui-main/src/views/modules/cdn/Index.vue'),
            // },
            // {
            //   path: 'cdn/create',
            //   name: 'modules.cdn.create',
            //   props: true,
            //   component: () => import('../../../../Downloads/lae-ui-main/src/views/modules/cdn/Create.vue'),
            // },
            // {
            //   path: 'cdn/:id',
            //   name: 'modules.cdn.show',
            //   props: true,
            //   component: () => import('../../../../Downloads/lae-ui-main/src/views/modules/cdn/Show.vue'),
            // },
            // {
            //   path: 'user-mqtt',
            //   name: 'modules.user-mqtt',
            //   component: () => import('../../../../Downloads/lae-ui-main/src/views/modules/user-mqtt/Index.vue'),
            //   meta: {
            //     title: '用户消息队列',
            //   },
            // },
        ],
    },

    // Errors routes
    {
        path: '/errors',
        name: 'errors',
        props: true,
        component: () => import('../views/errors/Base.vue'),
        meta: {
            collapses: ['left'],
        },
        children: [
            {
                path: '404',
                name: 'errors.404',
                component: () => import('../views/errors/404.vue'),
            },
            {
                path: '500',
                name: 'errors.500',
                component: () => import('../views/errors/500.vue'),
            },
        ],
    },
    {
        path: '/:catchAll(.*)',
        redirect: {
            name: 'errors.404',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    if (to.matched.length === 0) {
        return router.push({name: 'errors.404'})
    }

    if (to.meta.title) {
        document.title = to.meta.title + ' - ' + app.name
    } else {
        document.title = app.name
    }

    if (to.meta.auth ?? true) {
        // validate login state
        if (user.state.token == null) {
            if (to.name === 'auth.login') {
                return true
            } else {
                let query = {}
                if (from.query.token != null) {
                    query = {token: from.query.token}
                }
                router.push({name: 'auth.login', query: query})
                    .then()
                    .catch((r) => console.error(r))
            }
            return false
        } else {
            return true
        }
    } else {
        // 无需登录
        // if (to.name === "Login") {
        //     window.$message.warning('已经进去了啦！');
        //     return false;
        // }

        document.title = app.name

        return true
    }
})

export default router
