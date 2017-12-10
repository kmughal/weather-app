import Vue from 'vue';
import App from './app/app.vue';

const city =
  document.querySelector('#weather-app-container').getAttribute('data-city') ||
  'London';

const vm = new Vue({
  el: '#app',
  data: {
    city,
  },
  props: [city],
  render: h => h(App),
});
