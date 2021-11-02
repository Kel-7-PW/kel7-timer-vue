<template>
  <v-app>
   <v-main>
    <Navbar title="Stopwatch"/>
    <router-view/>
   </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  
  name: 'App',
  components:{Navbar}

};
</script>