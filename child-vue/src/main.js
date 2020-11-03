import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

let instance;

function render(props = {}) {
  if (!store.hasModule('global')) {
    // 当独立运行微应用时，state需要初始化赋值，否则会报错
    const initState = props.initState || {
      num: 0
    }
    // 将父应用的数据存储到子应用中，命名空间固定为global
    const globalModule = {
      namespaced: true,
      state: initState,
      mutations: {
        addNum(state, n) {
          state.num += n
        }
      },
    };
    // 注册一个动态模块
    store.registerModule('global', globalModule);
  }
  // 加载vue实例
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 被主应用使用时
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  render(props)
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  instance.$destroy()
  instance = null
}
