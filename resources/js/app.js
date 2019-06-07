require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
//los componentes y sus respectivas rutas estan en route.js
import Routes from './routes';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/es';

Vue.use(VueRouter);
Vue.use(ElementUI, { locale });

const router = new VueRouter({
    mode: 'history',
    routes: Routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

// router.afterEach((to, from, next) => {
//     if (
//         localStorage.getItem('user') === null &&
//         router.currentRoute.fullPath !== '/login'
//     ) {
//         router.push({ name: 'login' });
//     }
// });

// router.beforeEach((to, from, next) => {
//     // Nanobar
//     const nanobar = new Nanobar();
//     nanobar.go(30);
//     nanobar.go(76);

//     setTimeout(() => {
//         nanobar.go(100);
//     }, 1000);

//     // After login
//     var afterLogin = ['login'];

//     // Before login
//     var beforeLogin = ['contracts-dashboards'];

//     if (
//         localStorage.getItem('user') !== null &&
//         afterLogin.indexOf(to.name) !== -1
//     ) {
//         next({ name: 'contracts-dashboards' });
//     } else if (
//         localStorage.getItem('user') === null &&
//         beforeLogin.indexOf(to.name) !== -1
//     ) {
//         next({ name: 'login' });
//     } else {
//         next();
//     }
// });

const app = new Vue({
    //  store,
    router
    //  ElementUI
}).$mount('#app');
// const app = new Vue({
//     el: '#app'
// });
