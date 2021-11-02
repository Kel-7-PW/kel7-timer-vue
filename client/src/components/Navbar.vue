<template>
  <div>

    <!-- app bar / menu bar / nav bar -->
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>
             
      <v-spacer></v-spacer>

      <!-- switch theme -->
      <v-switch
        :value="darkMode" 
        @change="toggleDarkMode" 
        :label="`${switchLabel}`"
        hide-details
      ></v-switch>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <!-- list menu -->
    <v-list 
      nav
      class="mt-2"
    >
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.route">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
                        
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

    </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name:'Navbar',
    props:{
        title:String,
    },
    data(){ 
      return{
        darkMode: false,
        drawer: false,
        items: [
          { title: 'List Stopwatch', icon: 'mdi-format-list-bulleted-square', route: '/' },
        ],
      }
    },
    methods: {
      toggleDarkMode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
    },
    computed: {
      switchLabel: function () {
        return this.darkMode ? 'Light' : 'Dark';
      }
    },
    watch:{
      group(){
        this.drawer = false
      }
    }
}
</script>