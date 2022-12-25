import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './home';
import search from './search';

Vue.config.devtools = true
export default new Vuex.Store({
    modules: {
        home,
        search
    }
})