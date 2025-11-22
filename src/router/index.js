// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import AboutMe from '@/views/AboutMe.vue'
import MyService from '@/views/MyService.vue'
import Projects from '@/views/Projects.vue'
import CaseStudies from '@/views/CaseStudies.vue'
import Blog from '@/views/Blog.vue'
import Awards from '@/views/Awards.vue'
import CreativeEdge from '@/views/CreativeEdge.vue'
import Testimonials from '@/views/Testimonials.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home
    { path: '/', name: 'home', component: Home },

    // About me
    { path: '/about', name: 'about-me', component: AboutMe },

    // My Service
    { path: '/services', name: 'my-service', component: MyService },

    // Projects
    { path: '/projects', name: 'projects', component: Projects },

    // Case Studies
    { path: '/case-studies', name: 'case-studies', component: CaseStudies },

    // Blog
    { path: '/blog', name: 'blog', component: Blog },

    // Awards
    { path: '/awards', name: 'awards', component: Awards },

    // Creative Edge
    { path: '/creative-edge', name: 'creative-edge', component: CreativeEdge },

    // Testimonials
    { path: '/testimonials', name: 'testimonials', component: Testimonials },

    // Connect me
    { path: '/contact', name: 'contact', component: Contact },

    // 404
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
