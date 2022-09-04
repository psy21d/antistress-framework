/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import '@/router/router.js'

import * as Vue from 'vue/dist/vue.esm-bundler';
window.Vue = Vue;

const app = createApp(App)

app.use(PrimeVue);

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import 'primeflex/primeflex.scss';                           //primeflex

app.mount('#app')