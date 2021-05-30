import Vue from 'vue'
import Vuex from 'vuex'

//持久化store里面的数据
import createPersistedState from 'vuex-persistedstate'

import router from './router'
import {useWebSocket} from "./hooks";

Vue.use(Vuex)

const ws = useWebSocket();

export default new Vuex.Store({
    state:{
        // 工作模式：0: 制冷，1: 供暖
        mode: 0,
        // 刷新频率，单位毫秒
        frequency: 1000,
        // 管理员账号
        master: '',
        // 管理员密码
        masterpassword: '',
        // 开关机，0: 关机，1: 开机
        onoff: 0,
    },
    mutations:{
        handlemode(state, newmode){
            this.state.mode = newmode;
        },
        // 改变频率
        handlefre(state, newfre){
            this.state.frequency = newfre;
        },
        sendconfig(state){
            ws.send(JSON.stringify({
                mode: this.state.mode,
                frequency: this.state.frequency,
            }))
            router.push('/master')
        },
        check_id(state){
            ws.send(JSON.stringify({
                event_id: 6,
                data:{
                    id: this.state.master,
                    password: this.state.masterpassword,
                }
            }));
            router.push('/master')
        },
        handle_master(state, newmaster){
            this.state.master = newmaster;
        },
        handle_masterpassword(state, newpassword){
            this.state.masterpassword = newpassword;
        },
        switchreq(state){
            if (this.state.onoff == 1)
                this.state.onoff = 0;
            else
                this.state.onoff = 1;
            ws.send(JSON.stringify({
                event_id: 1,
                data:{
                    on: this.state.onoff,
                }
            }))
        }
    },
    // plugins:[createPersistedState({
    //     storage:window.sessionStorage
    // })]
})
