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
        {{ x % 2 === 1 ? 'Вперед' : 'Обратно' }}
      </th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="x in response.route" :key="x" v-bind:class="getColor()">
      <td>{{ x.busNumber }}</td>
      <td>{{ x.totalTripsByLine - 1 }}</td>
      <td v-for="line in x.line" :key="line">
        <SlotTemplate v-bind:timeSlot="line"/>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>

import axios from "axios";
import SlotTemplate from "@/components/SlotTemplate.vue";
import {requestBody} from "@/router/shiftRequestBody";

export default {
  components: {SlotTemplate},
  data: function () {
    return {
      response: {},
      body: requestBody(),
      rowCounter: 0
    }
  },

  // created () {
  //   this.readDataFromAPI()
  // },
  mounted() {
    window.addEventListener('requestBody-localstorage-changed', (event) => {
      axios
          .post("http://localhost:8095/api/v1/shift/create", event.detail.storage)
          .then((response) => {
            this.response = response.data
            console.log(this.response)
          });
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
