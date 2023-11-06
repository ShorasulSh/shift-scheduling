/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import '@vuepic/vue-datepicker/dist/main.css';
import VueDatePicker from '@vuepic/vue-datepicker';

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
      .component(VueDatePicker)
}
