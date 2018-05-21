// Vue.js
import Vue from 'vue';
import Header from '../components/Header.vue';

// js modules
import './modules/ityped';
import { toggleTopNav } from './modules/toggleTopNav';

// css modules
import '../css/style.scss';

window.onload = function() {
  new Vue(Header).$mount('#nav');
}