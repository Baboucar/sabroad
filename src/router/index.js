import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Programs from '../components/Programs.vue';
import CourseDetail from '../components/CourseDetail.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/programs',
      name:'programs',
      component:Programs
    },
  
    {
      path: '/course/:name',
      name: 'CourseDetail',
      component: CourseDetail
    }
    
    
  ]
})

export default router
