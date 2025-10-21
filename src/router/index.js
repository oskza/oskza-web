import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Courses from '../views/Courses.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: { hideFooter: true }
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact
      },
      {
        path: 'courses',
        name: 'courses',
        component: Courses
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects
      },
      {
        path: "projects/:slug",
        name: "project",
        component: Project,
      }
    ]
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
