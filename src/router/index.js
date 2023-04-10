import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/MainPage.vue'
import signIn from '../components/signIn.vue'
import subscribe from '../components/subscribe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/' , component:Main },
    {path:'/subscribe', components:subscribe},
    {path:'/signIn' , component:signIn},
  ]
})

export default router
