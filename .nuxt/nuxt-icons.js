export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.abed3e.png","120x120":"/_nuxt/icons/icon_120.abed3e.png","144x144":"/_nuxt/icons/icon_144.abed3e.png","152x152":"/_nuxt/icons/icon_152.abed3e.png","192x192":"/_nuxt/icons/icon_192.abed3e.png","384x384":"/_nuxt/icons/icon_384.abed3e.png","512x512":"/_nuxt/icons/icon_512.abed3e.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
