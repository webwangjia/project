// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  Carousel,
  CarouselItem,
  Menu,
  MenuItemGroup,
  MenuItem,
  Row,
  Button,
  Input
  } from 'element-ui';

  Vue.use(Carousel)
  Vue.use(CarouselItem)
  Vue.use(Menu)
  Vue.use(MenuItemGroup)
  Vue.use(MenuItem)
  Vue.use(Row)
  Vue.use(Button)
  Vue.use(Input)







 



import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
