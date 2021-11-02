<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4" dark>

        <v-btn
          elevation="2" class="mx-2 green white--text" width="150px" @click="goStopwatch()"
        >Stopwatch</v-btn>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    
    }),
    methods:{
      goStopwatch(){
          this.$router.push({ path: "/stopwatch" });
        }
    }
  }
</script>
