import Vue from 'vue';
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import ViewUI from 'view-design';
import App from './App.vue';
import 'view-design/dist/styles/iview.css';
import router from './router/router';

Vue.use(VXETable);
Vue.config.productionTip = false;
Vue.use(ViewUI);

// const router = Router();
// createApp(APP).use(VXETable).mount('#app');
// 测试
const t = 'log';
console.log(t);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
