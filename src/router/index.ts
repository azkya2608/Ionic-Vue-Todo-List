import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ToDoList from '../views/ToDoList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/todos'
  },
  {
    path: '/todos',
    name: 'ToDoList',
    component: ToDoList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
