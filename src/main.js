import Vue from 'vue';
import App from './App.vue';
import './js/ityped';
import { toggleTopNav } from './js/toggleTopNav';
import './css/style.scss';

new Vue({
  el: '#app',
  render: h => h(App)
})