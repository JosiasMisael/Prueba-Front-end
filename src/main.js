import { createApp } from 'vue'
//import VueRouter from 'vue-router';
import App from './App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import '@/assets/css/bootstrap.min.css'
//import '@/assets/js/bootstrap.js'
import '@/assets/js/bootstrap.min.js'
createApp(App).component('VueDatePicker', VueDatePicker).mount('#app')

