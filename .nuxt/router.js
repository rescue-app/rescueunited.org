import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _74bbdb90 = () => interopDefault(import('../pages/aviso-legal.vue' /* webpackChunkName: "pages/aviso-legal" */))
const _d07d415c = () => interopDefault(import('../pages/cubrir-necesidad.vue' /* webpackChunkName: "pages/cubrir-necesidad" */))
const _151df2bc = () => interopDefault(import('../pages/gracias.vue' /* webpackChunkName: "pages/gracias" */))
const _650881e1 = () => interopDefault(import('../pages/participar.vue' /* webpackChunkName: "pages/participar" */))
const _e9d80e96 = () => interopDefault(import('../pages/politica-de-cookies.vue' /* webpackChunkName: "pages/politica-de-cookies" */))
const _fd143932 = () => interopDefault(import('../pages/solicitar-ayuda.vue' /* webpackChunkName: "pages/solicitar-ayuda" */))
const _d21eb0f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aviso-legal",
    component: _74bbdb90,
    name: "aviso-legal"
  }, {
    path: "/cubrir-necesidad",
    component: _d07d415c,
    name: "cubrir-necesidad"
  }, {
    path: "/gracias",
    component: _151df2bc,
    name: "gracias"
  }, {
    path: "/participar",
    component: _650881e1,
    name: "participar"
  }, {
    path: "/politica-de-cookies",
    component: _e9d80e96,
    name: "politica-de-cookies"
  }, {
    path: "/solicitar-ayuda",
    component: _fd143932,
    name: "solicitar-ayuda"
  }, {
    path: "/",
    component: _d21eb0f4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
