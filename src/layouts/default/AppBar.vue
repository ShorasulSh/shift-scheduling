<template>
  <v-app-bar
      style="padding: 12px"
      density="compact"
      elevation="12"
      image="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:prepend>
      <CreateSchedulerBtn/>
    </template>

    <template v-slot:append>
      <v-switch style="padding-top:20px"
                color="black"
                inset=""
                v-model="darkMode"
                @change="toggleTheme()"
                append-icon="mdi-theme-light-dark"
      ></v-switch>
    </template>
  </v-app-bar>
</template>


<script setup>
import {ref} from "vue";
import {useTheme} from "vuetify";
import CreateSchedulerBtn from "@/components/SchedulerBtnDialog.vue";


const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "dark" : "light";
  localStorage.setItem("darMode", JSON.stringify(darkMode.value))
};
</script>
