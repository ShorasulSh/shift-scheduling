<template>
  <v-dialog width="1200"
            v-model="dialog"
  >
    <template v-slot:activator="{ props }">
      <v-btn
          variant="elevated"
          v-bind="props"
      >
        Создать шаблон
      </v-btn>
    </template>
    <v-card>
      <v-card-actions>
        <span class="text-h5">Создать шаблон</span>
        <v-spacer/>
        <v-btn
            color="red"
            variant="text"
            @click="dialog = false"
            append-icon="mdi-close"
        >
          Close
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  label="Скорость сообщение"
                  required
                  v-model="requestBody.messageSpeed"
                  type="number"
                  variant="outlined"
              ></v-text-field>
              <v-text-field
                  label="Общий путь вперед, км"
                  required
                  v-model="requestBody.forwardTotalDistanceKm"
                  type="number"
                  variant="outlined"
              ></v-text-field>
              <v-text-field
                  label="Общий путь назад, км"
                  required
                  v-model="requestBody.reverseTotalDistanceKm"
                  type="number"
                  variant="outlined"
              ></v-text-field>

              <v-text-field
                  label="Время обеда (в минутах)"
                  required
                  v-model="requestBody.lunchDuration"
                  type="number"
                  variant="outlined"
              ></v-text-field>

              <v-text-field
                  label="Время ужина (в минутах)"
                  required
                  v-model="requestBody.dinnerDuration"
                  type="number"
                  variant="outlined"
              ></v-text-field>


            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  label="Интервал (в минутах)"
                  required
                  v-model="requestBody.interval"
                  type="number"
                  variant="outlined"
              ></v-text-field>
              <v-text-field
                  label="Время остановки в конечном пункте"
                  required
                  v-model="requestBody.forwardParkingTime"
                  type="number"
                  variant="outlined"
              ></v-text-field>

              <v-combobox
                  variant="outlined"
                  v-model="requestBody.lunchDestination"
                  :items="directions"
                  label="Направление на обед"
              ></v-combobox>

              <v-combobox
                  variant="outlined"
                  v-model="selectedDirType"
                  :items="directionType"
                  label="Направление маршрута"
              ></v-combobox>

              <div class="" v-if="selectedDirType === 'ONE_DIRECTION'">
                <v-combobox
                    variant="outlined"
                    v-model="selectedDirType"
                    :items="directionType"
                    label="Начальное направление маршрута"
                ></v-combobox>
              </div>

              <div class="" v-if="selectedDirType === 'DOUBLE_DIRECTION'">
                <v-combobox
                    variant="outlined"
                    v-model="selectedDirType"
                    :items="directionType"
                    label="К-во авто в противоположном направлении"
                ></v-combobox>
              </div>
            </v-col>
            <v-col
                style="margin-top: -20px"
                cols="12"
                sm="6"
                md="4"
            >
              <div class="flex flex-col gap-1">
                <label style="font-size: small">Начало рабочего времени</label>
                <VueDatePicker id="startWorkingTime" time-picker v-model="requestBody.workingHours.start"
                               :dark="darkMode()"/>
              </div>
              <div class="flex flex-col gap-1 mb-6">
                <label style="font-size: small">Окончание рабочего времени</label>
                <VueDatePicker id="endWorkingTime" time-picker v-model="requestBody.workingHours.end"
                               :dark="darkMode()"/>
              </div>

              <PeakHourComponent v-bind:parentListResult="requestBody.peakHourList"
                                 v-on:set-peak-hours="updatePeakHours"
                                 :darkMode="darkMode()"/>

              <v-card style="margin-top: 12px" elevation="6">
                <v-card-title style="font-size: medium" v-if="checkPeakHourSize()">Час пик:</v-card-title>
                <v-card-text v-for="ph in filteredItems()" :key="ph" v-if="checkPeakHourSize()">
                  {{ this.displayPeakHours(ph) }}
                </v-card-text>
                <v-card-text v-else>Час пик не добавлен.</v-card-text>
              </v-card>

            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn
            @click="downloadWithAxios()"
            color="blue-darken-1"
            variant="text"
            prepend-icon="mdi-download">
          Export Shift
        </v-btn>
        <v-spacer/>
        <v-btn
            @click="saveRequestBody(); dialog = false"
            color="blue-darken-1"
            variant="text"
            prepend-icon="mdi-okay">
          Apply
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import PeakHourComponent from "@/components/PeakHourComponent.vue";
import {useTheme} from "vuetify";
import {ref} from 'vue';
import {requestBody} from "@/router/shiftRequestBody_100";
import axios from "axios";

export default {
  components: {VueDatePicker, PeakHourComponent},
  data: () => ({
    directionType: ['ONE_DIRECTION', 'DOUBLE_DIRECTION'],
    selectedDirType: '',
    requestBody: {
      peakHourList: [],
      messageSpeed: ref(),
      forwardTotalDistanceKm: ref(),
      reverseTotalDistanceKm: ref(),
      workingHours: {
        start: ref(),
        end: ref(),
      },
      interval: ref(),
      lunchDuration: ref(),
      dinnerDuration: ref(),
      forwardParkingTime: ref(),
      reverseParkingTime: ref(),
      lunchDestination: 'FORWARD',
      startStation: 'REVERSE',
      routeDirection: 'FORWARD',
      vehiclesOnOppositeDir: 2
    },
    dialog: false,
    directions: ['FORWARD', 'REVERSE'],
  }),

  created() {
    this.requestBody = requestBody()
  },

  methods: {

    forceFileDownload(response, title) {
      console.log(title)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', title)
      document.body.appendChild(link)
      link.click()
    },

    downloadWithAxios() {
      const date = new Date(Date.now()).toLocaleString()

      axios({
        method: 'post',
        url: "http://localhost:8095/api/v1/shift/download",
        data: requestBody(),
        responseType: 'arraybuffer',
      })
          .then((response) => {
            this.forceFileDownload(response, requestBody().routeName + '  ' + date + '.xlsx')
          })
          .catch(() => console.log('error occured'))
    },

    saveRequestBody() {
      localStorage.setItem("requestBody", JSON.stringify(this.requestBody));
      window.dispatchEvent(new CustomEvent('requestBody-localstorage-changed', {
        detail: {
          storage: this.requestBody
        }
      }));
    },

    filteredItems() {
      return this.requestBody.peakHourList.filter(function (it) {
        return it !== null && it.start !== null && it.start.hours !== null;
      });
    },

    displayPeakHours(ph) {
      if (ph != null
          && ph.start != null && ph.end != null
          && ph.start.hours != null && ph.start.minutes != null
          && ph.end.hours != null && ph.end.minutes != null
      ) {
        let startHours = ph.start.hours.toString().padStart(2, '0');
        let startMinutes = ph.start.minutes.toString().padStart(2, '0');
        let endHours = ph.end.hours.toString().padStart(2, '0');
        let endMinutes = ph.end.minutes.toString().padStart(2, '0');
        return startHours + ':' + startMinutes + ' ~ ' + endHours + ':' + endMinutes;
      }
      return '';
    },
    checkPeakHourSize() {
      return this.filteredItems().length > 0;
    },

    updatePeakHours(updatedPeakHours) {
      this.requestBody.peakHourList = updatedPeakHours
    },

    darkMode() {
      return useTheme().global.name.value === 'dark';
    },
  },
  watch() {
    this.checkPeakHourSize()
  }
}
</script>
