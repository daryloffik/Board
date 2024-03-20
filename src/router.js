import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import BoardForm from "./components/BoardForm.vue";
import Home from "./components/Home.vue";
import { useCurrentUser } from "vuefire";

// function checkAuth(to, from, next)
// {
//     if (IsAuthenticated()) next();
//     else next("/login");
// }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/addBoard",
    name: "addBoard",
    component: BoardForm,
  },
  
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
