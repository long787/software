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
        temperature: 25,
        // switchbtn: 0: 关机；1: 开机
        switchbtn: 0,
        // wind 1,2,3: 低 中 高
        wind: 1,
        // mode: 0: 制冷；1: 暖气
        mode: 0,
        // 身份证号
        id: '',
        // 房间号
        room: ''
    },
    mutations:{
        addtemperature(state){
            if (this.state.switchbtn == 1)
                this.state.temperature++;
        },
        reducetemperature(state){
            if (this.state.switchbtn == 1)
                this.state.temperature--;
        },
        changeswitchbtn(state){
            if (this.state.switchbtn == 0)
                this.state.switchbtn = 1;
            else
                this.state.switchbtn = 0;
        },
        addwind(state){
            if (this.state.wind != 3 && this.state.switchbtn == 1)
                this.state.wind++;
        },
        reducewind(state){
            if (this.state.wind != 1 && this.state.switchbtn == 1)
                this.state.wind--;
        },
        coldmode(state){
            if (this.state.mode == 1 && this.state.switchbtn == 1)
                this.state.mode = 0;
        },
        warmmode(state){
            if(this.state.mode == 0 && this.state.switchbtn == 1)
                this.state.mode = 1;
        },
        // 检查身份证号数字对不对
        check_id(state, logmes){
            this.state.room = logmes.roomnumber;
            this.state.id = logmes.username;
            if (this.state.id.length != 18){
                alert('身份证号为18位数字');
            }
            else if (this.state.room.length != 4){
                alert('房间号是4位数字');
            }
            else {
                ws.send(JSON.stringify({
                    room: this.state.room,
                    id: this.state.id
                }));
                router.push('/user')
            }
        }
    },
    actions:{
    },
    plugins:[createPersistedState({
        storage:window.sessionStorage
    })]
})