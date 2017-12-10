<template>
 <div>
    <h1 class="temperature">
        {{vm.temperature}}
        <span>
            &#x2103
        </span>
        <div class="city-detail">{{vm.city}},{{vm.country}}
            <div>Sunrise: {{vm.sunrise}}</div>
            <div>Sunset: {{vm.sunset}}</div>
            <div>Cloud: {{vm.cloudPercentage}}%</div>
        </div>
    </h1>


       <div v-for="item in vm.details" :key="item.id">
          <div class="detail-container">
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
      console.log(data);
      console.log(this.vm);
    });
  }
}

</script>

<style lang="scss">
@import "./styles/style.scss";

</style>
