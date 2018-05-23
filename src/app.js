// Vue.js
import Vue from 'vue';
import Header from './components/Header.vue';

// js modules
import './js/ityped';
import { toggleTopNav } from './js/toggleTopNav';

// css modules
import './css/style.scss';

new Vue({
  el: '#top-nav',
  render: h => h(Header)
})