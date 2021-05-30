import Vue from 'vue'
import VueRouter from 'vue-router'

import UserLogin from "../views/UserLogin";
import User from "../views/User";

//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'userlogin',
            component: UserLogin
        },
        {
            path:'/user',
            name:'user',
            component: User
        }
    ]
});
