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
    timeRange(timeSlot) {
      let start = this.formatTime(timeSlot.start)
      if (timeSlot.end != null) {
        let end = this.formatTime(timeSlot.end)
        return start + ' - ' + end;
      }
      return start;
    },

    formatTime(time) {
      time = time.split('T')[1];
      return time.substring(0, 5);
    }
  }
}
</script>