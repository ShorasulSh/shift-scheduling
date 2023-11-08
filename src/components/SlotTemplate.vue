<template>
  <div class="text-center">

    <v-chip size="large"
            class="px-6"
            text-color="black"
            :color="timeSlot.type === 'START' ? 'green' :
                    timeSlot.type === 'END' ? 'red' :
                    timeSlot.type === 'LUNCH_TIME' ? 'blue' : ''"
            :append-icon="timeSlot.type === 'START' ? 'mdi-clock-start' :
                          timeSlot.type === 'END' ? 'mdi-clock-end' :
                          timeSlot.type === 'LUNCH_TIME' ? 'mdi-food' : ''"
            :prepend-icon="timeSlot.type === 'LUNCH_TIME' ? 'mdi-pause' :
                           timeSlot.direction === 'FORWARD' ? 'mdi-skip-forward' : 'mdi-skip-backward'"
            variant="text"
    >

      {{ this.timeRange(timeSlot) }}
    </v-chip>
  </div>
</template>

<script>

export default {
  props: {
    timeSlot: {}
  },

  methods: {
    timeRange(ts) {
      let result = '';

      if (ts != null) {
        if (ts.start != null && ts.start.hours != null && ts.start.minutes != null) {
          let startHours = ts.start.hours.toString().padStart(2, '0');
          let startMinutes = ts.start.minutes.toString().padStart(2, '0');
          result += startHours + ':' + startMinutes;
        }

        result += ' ~ ';

        if (ts.end != null && ts.end.hours != null && ts.end.minutes != null) {
          let endHours = ts.end.hours.toString().padStart(2, '0');
          let endMinutes = ts.end.minutes.toString().padStart(2, '0');
          result += endHours + ':' + endMinutes;
        }
        return result;
      }
      return 'not available';
    },
  }
}
</script>
