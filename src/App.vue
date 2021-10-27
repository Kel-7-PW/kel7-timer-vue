<template>
  <v-app>
    <v-content>
      <Stopwatch/>
    </v-content>
  </v-app>
</template>

<script>
import Stopwatch from './components/Stopwatch';

export default {
  name: 'App',

  components: {
    Stopwatch,
  },

  data: () => ({
    //
  }),
};
</script>
