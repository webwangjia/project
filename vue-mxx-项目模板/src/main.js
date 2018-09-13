// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'  // element 样式

import {
  carousel,
  carouselItem,
  button,
  form,
  formItem,
  input,
  checkboxGroup,
  checkbox,
  Message,
  InputNumber,
  dialog,
  radio,
  pagination,
  table,
  tableColumn,
  rate,
  loading,
  radioGroup,
  MessageBox,
  menu,
  submenu,
  menuItem,
  menuItemGroup,
  breadcrumb,
  breadcrumbItem,
  Loading,
  upload,
  collapse,
  collapseItem,
  tabs,
  tabPane,
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(carousel)
Vue.use(carouselItem)
Vue.use(button)
Vue.use(form)
Vue.use(formItem)
Vue.use(input)
Vue.use(checkboxGroup)
Vue.use(checkbox)
Vue.use(InputNumber)
Vue.use(dialog)
Vue.use(radio)
Vue.use(pagination)
Vue.use(table)
Vue.use(tableColumn)
Vue.use(rate)
Vue.use(loading)
Vue.use(radioGroup)
Vue.use(menu)
Vue.use(submenu)
Vue.use(menuItem)
Vue.use(submenu)
Vue.use(menuItemGroup)
Vue.use(breadcrumb)
Vue.use(breadcrumbItem)
Vue.use(upload)
Vue.use(collapse)
Vue.use(collapseItem)
Vue.use(tabs)
Vue.use(tabPane)

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$loading = Loading;








/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
