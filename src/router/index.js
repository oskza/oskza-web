import { createRouter, createWebHistory } from 'vue-router'
import { useI18n } from 'vue-i18n'
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
        component: Contact,
        meta: {
          breadcrumbs: [
            { label: 'Home', to: '/' },
            { label: 'Contact' }
          ]
        }
      },
      {
        path: 'courses',
        name: 'courses',
        component: Courses,
        meta: {
          breadcrumbs: [
            { label: 'Home', to: '/' },
            { label: 'Courses' }
          ]
        }
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects,
        meta: {
          breadcrumbs: [
            { label: 'Home', to: '/' },
            { label: 'Projects' }
          ]
        }
      },
      {
        path: "projects/:slug",
        name: "project",
        component: Project,
        meta: {
          breadcrumbs: (route, i18n) => {

            const project = projects.find(p => p.slug === route.params.slug)

            const title = project
              ? i18n.t(`projects.${ project.id }.title`)
              : route.params.slug

            return [
              { label: 'Home', to: '/' },
              { label: 'Projects', to: '/projects' },
              { label: title }
            ]
          }
        },
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
