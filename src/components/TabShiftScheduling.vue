<template>
  <v-card>
    <v-tabs
        v-model="tab"
    >
      <v-spacer/>
      <v-tab prepend-icon="mdi-skip-forward" value="one">Вперед</v-tab>
      <v-tab append-icon="mdi-skip-backward" value="two">Назад</v-tab>
      <v-spacer/>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <ShiftScheduleByDirection v-bind:direction="'FORWARD'"/>
        </v-window-item>

        <v-window-item value="two">
          <ShiftScheduleByDirection v-bind:direction="'REVERSE'"/>
        </v-window-item>

      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
import ShiftScheduleByDirection from "@/components/ShiftScheduleByDirection.vue";

export default {
  components: {ShiftScheduleByDirection},
  data: () => ({
    tab: null,
  }),
}
</script>
