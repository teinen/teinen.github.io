import Vue from 'vue';
import App from './App';
import { toggleTopNav } from './js/toggleTopNav';
import './css/style';

new Vue({
  el: '#app',
  render: h => h(App)
})