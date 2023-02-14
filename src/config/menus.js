import {CloudOutline, GameControllerOutline} from "@vicons/ionicons5";

import {addMenuOptions} from "../plugins/menuOptions.js";


const modules = [
    {
        id: "tunnels",
        name: "PortIO",
        route: "modules.tunnels.index",
        icon: CloudOutline
    },
    {
        id: "gct",
        name: "游戏容器",
        route: "modules.gct.index",
        icon: GameControllerOutline
    },
    {
        id: "ip-manager",
        name: "IP 管理",
        route: "modules.ip-manager.index",
        icon: GameControllerOutline
    },
    // {
    //     id: "user-mqtt",
    //     name: "消息队列",
    //     route: "modules.user-mqtt"
    // }
]

for (let i = 0; i < modules.length; i++) {
    addMenuOptions('top', modules[i].route, modules[i].name, modules[i].icon);
}