import Vue from 'vue';
import VueRouter from "vue-router";

import Input from "../components/board/Input.vue";
import Instruct from "../components/board/Instruct.vue";
import Login from "../components/board/Login.vue";
import Legister from "../components/board/Legister.vue";
import Lecture from"../components/board/Lecture.vue";


Vue.use(VueRouter);
export default new VueRouter({
    mode : "history",
    routes:[
        {
            path: "/",
            name: "Input",
            component: Input
        },
        {
            path: "/Instruct",
            name: "Instruct",
            component: Instruct
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/Legister",
            name: "Legister",
            component: Legister
        },
        {
            path: "/Lecture",
            name: "Lecture",
            component: Lecture
        }
      
    ]
})