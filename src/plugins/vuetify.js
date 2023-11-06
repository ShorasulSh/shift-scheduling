/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#4e8aff',
        secondary: '#6c757d',
        // accent: '#204165',
        // info: '#17a2b8',
      },
      dark: {
        primary: '#10163a',
        secondary: '#262b44',
        // info: '#5b52c5',
        // accent: '#ea5455',
      },
    },
  },
})


