<template>
  <header>
    <v-theme-provider>
      <v-app-bar app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-switch
          :value="darkMode"
          @change="toggleDarkMode"
          :label="`${switchLabel}`"
          hide-details
        ></v-switch>
      </v-app-bar>
    </v-theme-provider>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String,
  },
  data: () => ({
    darkMode: false,
  }),
  methods: {
    toggleDarkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkMode = !this.darkMode;
    },
  },
  computed: {
    switchLabel: function () {
      return this.darkMode ? "Light" : "Dark";
    },
  },
};
</script>
