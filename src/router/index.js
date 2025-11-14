import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Courses from '../views/Courses.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import { projects } from '../data/projects'

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
        beforeEnter: (to, from, next) => {
          if (projects.some(p => p.slug === to.params.slug))
            next()
          else
            next('/')
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
