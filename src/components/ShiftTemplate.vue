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
import {requestBody} from "@/router/shiftRequestBody_51";

export default {
  components: {SlotTemplate},
  data: function () {
    return {
      response: {},
      body: requestBody(),
      rowCounter: 0
    }
  },

  // created() {
  //   this.body = requestBody();
  //
  //   axios
  //       .post("http://localhost:8095/api/v1/shift/create", requestBody())
  //       .then((response) => {
  //         this.response = response.data
  //         console.log(this.response)
  //       });
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
