<template>
  <v-card
    :color="color"
    flat ripple
    width="100%"
    class="card-border-radius mb-3"
  >
    <v-card-text>
      <v-layout justify-space-between align-start mb-1>
        <h3
          class="font-weight-regular graphik-font-family white--text"
          style="max-width: 200px"
        >
          {{ title }}
        </h3>
        <v-icon color="white">{{ icon }}</v-icon>
      </v-layout>

      <span class="light--text">{{ date }}</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FeaturedTemplateCard",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: "mdi-call-split"
    },
    title: {
      type: String,
      default: "Card Title"
    },
    date: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.card-border-radius {
  border-radius: 6px;
}

.light--text {
  color: rgba(255, 255, 255, 0.8);
}
</style>
