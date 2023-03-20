import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import ModalInput from "./components/ModalInput.vue";
import ManageStudent from "./components/ManageStudent.vue";

const routes = [
  {
    path: "/",
    component: ManageStudent,
  },
  {
    path: "/student",
    component: ModalInput,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");

