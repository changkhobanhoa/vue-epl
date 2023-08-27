import { createStore } from 'vuex'
import state from './state'
import * as  actions from './actions'
import  * as mutations from './mutation'
import  * as getters from './getters'


const store = createStore({
    actions,
    state,
    mutations,
    getters,
})
export default store