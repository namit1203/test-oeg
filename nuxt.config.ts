// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt'],
    
    
    app:{
      head:{
        title: 'Underground Esports',
        meta:[
          {name: 'description', content:'Website for gaming'}
        ],
        link:[
          {rel: 'stylesheet', href:'https://fonts.google.com/icons'}
        ]
      }
    },
})

