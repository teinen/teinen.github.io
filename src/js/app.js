// Vue.js
import Vue from 'vue';
import App from '../components/app.vue';

// js modules
import './modules/ityped';
import { toggleTopNav } from './modules/toggleTopNav';

// css modules
import '../css/style.scss';

window.onload = () => {
  new Vue(App).$mount('#app');
}