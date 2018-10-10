<template>
  <v-flex white>
    <v-container>
      <v-layout justify-space-between align-center>
        <h1 class="graphik-font-family black--text">Storyboards</h1>
        <v-btn icon>
          <v-icon color="grey ligthen-1" size="2em">mdi-magnify</v-icon>
        </v-btn>
      </v-layout>
    </v-container>

    <v-flex>
      <v-container pt-0>
        <v-layout justify-space-between align-center>
          <h3 class="graphik-font-family">Featured templates</h3>

          <v-btn
            flat
            color="primary"
            class="ma-0 pa-0 graphik-font-family"
            style="text-transform: unset;"
          >Show all</v-btn>
        </v-layout>
      </v-container>

      <v-flex>
        <carousel :per-page="3">
          <slide
            v-for="(card, index) in createTemplates"
            :key="index"
            class="ml-3"
          >
            <featured-template-card v-bind="card" />
          </slide>
        </carousel>
      </v-flex>

      <v-divider class="mt-4" style="border-color: #e9e9e9;" />

      <v-container pt-2>
        <v-layout mb-1 justify-space-between align-center>
          <h3 class="graphik-font-family">My storyboard</h3>

          <v-btn
            flat
            color="primary"
            class="ma-0 pa-0 graphik-font-family"
            style="text-transform: unset;"
          >Show all</v-btn>
        </v-layout>

        <story-card
          v-for="(card, index) in storyboards"
          :key="index"
          v-bind="card"
        />
      </v-container>
    </v-flex>

    <v-footer fixed height="48px">
      <v-tabs
        grow
        centered
        fixed-tabs
        style="width: 100%;"
      >
        <v-tab>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-tab>

        <v-tab>
          <v-icon>mdi-book-open-variant</v-icon>
        </v-tab>

        <v-tab>
          <v-icon>mdi-bell-ring</v-icon>
        </v-tab>

        <v-tab>
          <v-icon>mdi-account</v-icon>
        </v-tab>
      </v-tabs>
    </v-footer>
  </v-flex>
</template>

<script>
import VTabs from "vuetify/es5/components/VTabs";
import VFooter from "vuetify/es5/components/VFooter";
import VDivider from "vuetify/es5/components/VDivider";
import { Carousel, Slide } from "vue-carousel";
import FeaturedTemplateCard from "@/components/Storyboards/FeaturedTemplateCard.vue";
import StoryCard from "@/components/Storyboards/StoryCard.vue";

export default {
  name: "Storyboards",
  components: {
    ...VFooter.$_vuetify_subcomponents,
    ...VTabs.$_vuetify_subcomponents,
    FeaturedTemplateCard,
    StoryCard,
    VDivider,
    Carousel,
    Slide
  },
  data: () => ({
    createTemplates: [
      {
        color: "green accent-4",
        icon: "mdi-heart-half-full",
        title: "Health\nmonitor"
      },
      {
        color: "primary lighten-1",
        icon: "mdi-call-split",
        title: "DACI\ndecisions"
      },
      {
        color: "deep-purple accent-3",
        icon: "mdi-library-books",
        title: "Blank\npage"
      }
    ],
    storyboards: [
      {
        color: "primary lighten-1",
        icon: "mdi-heart-half-full",
        title: "Creativity needs to\nbecome more inclusive",
        date: "Modified 12 May, 2018"
      },
      {
        color: "green accent-4",
        icon: "mdi-call-split",
        title: "What am I going to\ndo about it?",
        date: "Modified 24 May, 2018"
      },
      {
        color: "deep-purple accent-3",
        icon: "mdi-library-books",
        title: "The more tools, the more need of connectivity",
        date: "Modified 1 May, 2018"
      }
    ]
  })
};
</script>

<style>
.graphik-font-family {
  font-family: Graphik !important;
}
</style>
