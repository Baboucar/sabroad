import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Programs from '../components/Programs.vue';
import CourseDetail from '../components/CourseDetail.vue';
import About from '../components/About.vue';
import Apply from '../components/Apply.vue';
import Contact from '../components/Contact.vue';

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
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/apply',
      name:'apply',
      component:Apply
    },
    {
      path:'/contact',
      name:'contact',
      component:Contact
    }
    
    
  ]
})

export default router
