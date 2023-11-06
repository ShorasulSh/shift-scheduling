<template>
  <v-dialog width="800">
    <template v-slot:activator="{ props }">
      <v-btn color="green" block="" v-bind="props" text="Добавить час пик"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Добавить час пик">
        <div class="ma-6 pr-6 align-center justify-center">

          <v-row v-for="key in this.peakHoursList.length" :key="key">
            <v-col :cols="1"/>
            <v-col :cols="5">
              <label style="font-size: small">Начало рабочего времени</label>
              <VueDatePicker id="startWorkingTime" time-picker v-model="peakHoursList[key - 1].start" :dark="darkMode"/>
            </v-col>
            <v-col :cols="5">
              <label style="font-size: small">Окончание рабочего времени</label>
              <VueDatePicker id="endWorkingTime" time-picker v-model="peakHoursList[key - 1].end" :dark="darkMode"/>
            </v-col>
            <v-col :cols="1">
              <v-btn style="margin-top: 24px" variant="text" color="red" @click="removePeakTime(key - 1)">
                <v-icon size="large">mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <div class="mt-16 px-12">
            <v-divider/>
          </div>

          <div class="d-flex align-center justify-center mb-16">
            <v-btn class="px-12 my-8" size="large" variant="elevated" color="green" @click="addPeakHours()">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Сохранить и закрыть"
              @click="isActive.value = false;"
              v-on:click="setPeakHours"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>

import VueDatePicker from "@vuepic/vue-datepicker";

export default {
  components: {VueDatePicker},
  name: "Test",
  props: {
    result: {
      default: [],
      type: Array
    },
    darkMode: {
      default: false,
      type: Boolean
    },
  },
  data: () => ({
    peakHoursCount: 1,
    startTime: [],
    endTime: [],
    peakHoursList: [
      {
        start: null,
        end: null
      }
    ],
    peakHours: {
      start: null,
      end: null
    }

  }),
  methods: {
    setPeakHours() {
      this.$emit('set-peak-hours', this.peakHoursList);
    },
    addPeakHours() {
      let newValue = Object.create(this.peakHours)
      this.peakHoursList.push(newValue);
    },

    removePeakTime(index) {
      let value = this.peakHoursList[index]
      this.peakHoursList = this.peakHoursList.filter(function (item) {
        return item !== value
      })
    }
  }
}
</script>
