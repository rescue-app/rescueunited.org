
module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'RescueUnited: Non-profit project incubator and accelerator, where professionals can donate their talent remotely',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Non-profit project incubator and accelerator, where professionals can donate their talent remotely' },
            { hid: 'og_locale', property: 'og:locale', content: 'es_ES' },
            { hid: 'og_type', property: 'og:type', content: 'Website' },
            { hid: 'og_title', property: 'og:title', content: 'RescueUnited' },
            { hid: 'og_description', property: 'og:description', content: 'Non-profit project incubator and accelerator, where professionals can donate their talent remotely' },
            { hid: 'og_url', property: 'og:url', content: 'https://Rescueunited.org' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
                barDescription: 'El sitio web Rescueunited.org utiliza cookies propias y de terceros para recopilar información que ayuda a optimizar su visita a sus páginas web. No se utilizarán las cookies para recoger información de carácter personal. Usted puede permitir su uso o rechazarlo, también puede cambiar su configuración siempre que lo desee. Encontrará más información en nuestra Política de Cookies.',
                acceptAll: 'Aceptar cookies',
                manageCookies: 'Modificar cookies'
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
            short_name: 'rescueapp',
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
