import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import BoardForm from './components/BoardForm.vue'
import { useCurrentUser } from 'vuefire'

const routes = [
{
  path:'/',
  name:'Home',
  component:App
},
{
  path:'/SignUp',
  name:'SignUp',
  component:SignUp
},
{
  path:'/SignIn',
  name:'SignIn',
  component:SignIn
},
{
    path:'/addBoard',
    name:'addBoard',
    component:BoardForm

},
{
    path: '/:pathMatch(.*)*',
    redirect: "/"
},
]


const router = createRouter({history:createWebHistory(), routes})


export default router