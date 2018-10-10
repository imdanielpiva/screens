<template>
  <v-flex>
    <v-container white>
      <h1 class="black--text">Screens</h1>
      <p class="pa-0 ma-0 grey--text">These are UI works which I took from Dribbble, UpLabs, Behance or my head then code it.</p>
    </v-container>

    <v-list two-line>
      <v-list-tile @click="goToProject('/storyboards')" ripple>
        <v-list-tile-content>
          <v-list-tile-title>Storyboards</v-list-tile-title>
          <v-list-tile-sub-title>From UpLabs by Artem</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider />
    </v-list>
  </v-flex>
</template>

<script>
import VDivider from "vuetify/es5/components/VDivider";

export default {
  name: "Projects",
  components: { VDivider },
  methods: {
    goToProject(path) {
      this.$router.push(path);
    }
  }
};
</script>
