import './bootstrap';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Test from './components/Test.vue';

Vue.use(VueRouter);

const routes = [
	{path: '/', component: Home},
	{path: '/test', component: Test}
];

const router = new VueRouter({
	routes
});

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
