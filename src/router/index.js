import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import firebase from 'firebase';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      /*meta: {
        requiresAuth: true
      }*/
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      /*meta: {
        requiresGuest: true
      }*/
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      /*meta: {
        requiresGuest: true
      }*/
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    meta: {
        requiresAuth: true
      }
    }
  ]
})

// router guards
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // User is signed in. Proceed to route
      next()
    } else {
      // No user is signed in. Redirect to login
      next({
        name: 'Home'
      })
    }
  } else {
    // if route is not guarded by auth, proceed
    next()
  }
})

export default router;