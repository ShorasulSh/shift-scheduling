<template>
  <v-table class="pa-3">
    <thead>
    <tr style="align-items: center; font-size: small">
      <th class="text-left">
        Номер автобуса
      </th>
      <th class="text-left">
        Всего поездок
      </th>

      <th class="text-center"
          style="font-size: small; align-content: center"
          v-for="x in response.maxSizeOfLine" :key="x">
        {{ this.direction === 'FORWARD' ? 'Вперед' : 'Обратно' }}
      </th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="line in response.lines" :key="line" v-bind:class="getColor()">
      <td>{{ line.busNumber }}</td>
      <td>{{ line.totalTripsByLine - 1 }}</td>
      <td v-for="slot in line.slots" :key="slot">
        <SlotTemplate v-bind:timeSlot="slot"/>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>

import axios from "axios";
import SlotTemplate from "@/components/SlotTemplate.vue";
import {requestBody} from "@/router/shiftRequestBody_109";

export default {
  components: {SlotTemplate},
  props: {
    direction: {}
  },
  data: function () {
    return {
      response: {},
      body: requestBody(),
      rowCounter: 0
    }
  },

  mounted() {
    window.addEventListener('requestBody-localstorage-changed', (event) => {
      axios
          .post("http://localhost:8095/api/v2/shift/create/" + this.direction, event.detail.storage)
          .then((response) => {
            this.response = response.data
            console.log(this.response)
          });
    });
  },

  created() {
    this.body = requestBody();

    axios
        .post("http://localhost:8095/api/v2/shift/create/" + this.direction, requestBody())
        .then((response) => {
          this.response = response.data
          console.log(this.response)
        });
  },

  methods: {
    getColor() {
      this.rowCounter++;
      if (this.rowCounter % 2 !== 0) return 'gray';
    },

  },

}
</script>
