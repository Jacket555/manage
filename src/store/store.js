import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        user:'',
        type:'',
    },
    mutations:{
        userdata(state,data){
            state.user=data;
        },
        typedata(state,data){
            state.type=data;
        }
    }
})

export default store