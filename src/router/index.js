import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/auth/View-LogIn.vue'),
      //component: () => import('../components/dashboard/auth/Base-Login.vue'),
    },
    {
      path: '/reset-password',
      component: () => import('../views/auth/View-PwReset.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('../views/dashboard/View-Dashboard.vue'),
    },
    {
      path: '/dashboard/tabelle',
      component: () => import('../views/dashboard/View-Table.vue'),
    },
    {
      path: '/messenger',
      component: () => import('../views/messages/View-Messenger.vue')
    },
    {
      path: '/calendar',
      component: () => import('../views/calendar/View-EventCalendar.vue')
    },
    {
      path: '/todo',
      component: () => import('../views/todolist/View-TodoList.vue')
    },
    {
      path: '/benachrichtigung',
      component: () => import('../views/notifications/View-NotificationsOverview.vue')
    }, 
    {
      path: '/test',
      component: () => import('../views/test/View-Test.vue')
    },   
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/errors/View-NotFound.vue')
    }
  ]
})

export default router
