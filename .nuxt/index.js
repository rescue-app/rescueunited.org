import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_workbox_7f415274 from 'nuxt_plugin_workbox_7f415274' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_ae2da620 from 'nuxt_plugin_nuxticons_ae2da620' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_bootstrapvue_41545987 from 'nuxt_plugin_bootstrapvue_41545987' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_nuxtcookiecontrol_3f518f90 from 'nuxt_plugin_nuxtcookiecontrol_3f518f90' // Source: ./nuxt-cookie-control.js (mode: 'all')
import nuxt_plugin_recaptcha_37fb75c7 from 'nuxt_plugin_recaptcha_37fb75c7' // Source: ./recaptcha.js (mode: 'all')
import nuxt_plugin_http_37c1f3f8 from 'nuxt_plugin_http_37c1f3f8' // Source: ./http.js (mode: 'all')
import nuxt_plugin_nuxttypeform_680a6906 from 'nuxt_plugin_nuxttypeform_680a6906' // Source: ./nuxt-typeform.js (mode: 'all')
import nuxt_plugin_ga_fb0a2534 from 'nuxt_plugin_ga_fb0a2534' // Source: ../plugins/ga.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"RescueUnited: Non-profit project incubator and accelerator, where professionals can donate their talent remotely","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Non-profit project incubator and accelerator, where professionals can donate their talent remotely"},{"hid":"og_locale","property":"og:locale","content":"es_ES"},{"hid":"og_type","property":"og:type","content":"Website"},{"hid":"og_title","property":"og:title","content":"RescueUnited"},{"hid":"og_description","property":"og:description","content":"Non-profit project incubator and accelerator, where professionals can donate their talent remotely"},{"hid":"og_url","property":"og:url","content":"https:\u002F\u002FRescueunited.org"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Rescue App"},{"hid":"author","name":"author","content":"clund & jgmullor"},{"hid":"theme-color","name":"theme-color","content":"#87c4e9"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Rescue App"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.164acdcf.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.abed3e.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.abed3e.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"es"}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_7f415274 === 'function') {
    await nuxt_plugin_workbox_7f415274(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_ae2da620 === 'function') {
    await nuxt_plugin_nuxticons_ae2da620(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_41545987 === 'function') {
    await nuxt_plugin_bootstrapvue_41545987(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtcookiecontrol_3f518f90 === 'function') {
    await nuxt_plugin_nuxtcookiecontrol_3f518f90(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_37fb75c7 === 'function') {
    await nuxt_plugin_recaptcha_37fb75c7(app.context, inject)
  }

  if (typeof nuxt_plugin_http_37c1f3f8 === 'function') {
    await nuxt_plugin_http_37c1f3f8(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxttypeform_680a6906 === 'function') {
    await nuxt_plugin_nuxttypeform_680a6906(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_fb0a2534 === 'function') {
    await nuxt_plugin_ga_fb0a2534(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
