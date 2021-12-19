
import Vue from 'vue';
import App from './app.vue';
import router from "./routes/index.js"
import '../scss/main.scss'



new Vue({
    router, // 라우터 객체를 넘겨준다
    render: h => h(App)
  }).$mount("#app")