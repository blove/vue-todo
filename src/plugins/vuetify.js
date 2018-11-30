import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo,
    secondary: colors.pink.accent2,
    accent: colors.pink.accent3,
    error: colors.red.accent3
  }
});
