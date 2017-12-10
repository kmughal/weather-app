<template>
 <div>
    <h1 style="text-aign:center;">{{vm.country}}</h1>
    <div style="text-aign:center;font-size:1rem;">{{vm.city}}</div>
    <div style="text-align:center;">
      <div>Sunrise:{{vm.sunrise}}</div>
      <div>Sunset:{{vm.sunset}}</div>
    </div>
       <div v-for="item in vm.details" :key="item.id">
          <div>
              <img :src="item.icon"/>
              <span>{{item.description}}</span>
          </div>
      </div>
 </div>
</template>


<script lang='ts'>

import Vue from 'vue';
import Component from 'vue-class-component';
import {WeatherService} from './services/weather-service';
import {WeatherReport} from './models/weather-report';
import {WeatherReportViewModel} from './viewmodel/weather-report-view-model';
import {Helpers} from './common/helpers';

@Component
export default class App extends Vue {
  vm: WeatherReportViewModel = new WeatherReportViewModel();

  created() {
    this.getWeatherReport();
  }
  private getWeatherReport() {
    const service = new WeatherService();
    service.get(this.$parent.$data.city).then((data: WeatherReport) => {
      this.vm = Helpers.materializeViewModel(data);
    });
  }
}

</script>