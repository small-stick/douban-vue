import Vue from 'vue'
import Router from 'vue-router'


import Shouye from "../pages/shouye"
import Book from "../pages/book"
import Radio from "../pages/radio"
import Movie from "../pages/movie"
import Group from "../pages/group"
import Login from "../pages/login"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shouye',
      name: 'Shouye',
      component: Shouye
    },

    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },

    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },

    {
      path: '/group',
      name: 'Group',
      component: Group
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
