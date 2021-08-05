import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    /*
     * Use the property's key meta to add properties that
     * are not strictly used by the Router but
     * that you need to have. Es.: key=icon value='local_shipping'
     */
    routes: [
      {
            // default
            path: '/',
            name: 'home',
            component: () => import(
                '@/pages/Home'
            ),
        },
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})
