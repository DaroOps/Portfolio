import { createRouter, createWebHistory } from 'vue-router'
import Home from '@pages/Home/Home.vue'
import About from '@pages/About/About.vue'
import Projects from '@pages/Projects/Projects.vue'
import Certifications from '@pages/Certifications/Certifications.vue'
import Services from '@pages/Services/Services.vue'
import Contact from '@pages/Contact/Contact.vue'


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/certifications', name: 'Certifications', component: Certifications },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:catchAll(.*)', redirect: '/home' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router