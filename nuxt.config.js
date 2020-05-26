
module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Rescue United: Non-profit projects incubator and accelerator, where professionals can donate their talent remotely',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Non-profit projects incubator and accelerator, where professionals can donate their talent remotely' },
            { hid: 'og_locale', property: 'og:locale', content: 'es_ES' },
            { hid: 'og_type', property: 'og:type', content: 'Website' },
            { hid: 'og_title', property: 'og:title', content: 'Rescue United' },
            { hid: 'og_description', property: 'og:description', content: 'Non-profit projects incubator and accelerator, where professionals can donate their talent remotely' },
            { hid: 'og_url', property: 'og:url', content: 'https://rescueunited.org' },
            { hid: 'msapplication_TileColor', name: 'msapplication-TileColor', content: '#00aba9' },
            { hid: 'msapplication_config', name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
            { hid: 'theme_color', name: 'theme-color', content: '#ffffff' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
            { rel: 'manifest', href: '/favicons/site.webmanifest' },
            { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
            { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/styles.scss',
        '@/assets/scss/bundle.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/ga.js', mode: 'client' }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa',
        'nuxt-typeform',
        '@nuxt/http',
        '@nuxtjs/recaptcha',
        ['nuxt-cookie-control', {
            controlButton: false,
            colors: {
                barBackground: '#87c4e9'
            },
            text: {
                barDescription: 'The Rescueunited.org website uses its own and third-party cookies to collect information that helps optimize your visit to its websites. Cookies will not be used to collect personal information. You can allow their use or reject them, you can also change their settings whenever you want. You can find more information in our Cookie Policy.',
                acceptAll: 'Accept cookies',
                manageCookies: 'Manage cookies'
            }
        }]
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
    },
    /*
    ** Build configuration
    */
    build: {
    /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    },
    cookies: {
        necessary: [
            {
                name: 'Control de cookies',
                description: 'Utilizado para guardar tus preferencias sobre cookies',
                cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
            }
        ],
        optional: [
            {
                name: 'Google Analytics',
                description: 'Google Analytics es una herramienta de analítica web de la empresa Google.',
                cookies: ['_ga', '_gat', '_gid']
            }
        ]
    },
    pwa: {
        manifest: {
            name: 'Rescue App',
            lang: 'es',
            short_name: 'rescueunited',
            display: 'standalone',
            theme_color: '#87c4e9'
        },
        icon: {
            iconSrc: '[srcDir]/[staticDir]/icon.png',
            iconFileName: 'favicon.png'
        },
        workbox: {
            dev: false
        }
    },
    recaptcha: {
        hideBadge: false,
        siteKey: '6Ld3-egUAAAAAFQzBDcoq9OBnjusBOwV8vNKnl7J',
        version: 2,
        size: 'normal'
    }
}
