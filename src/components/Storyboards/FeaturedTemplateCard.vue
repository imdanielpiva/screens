<template>
  <v-card
    :color="color"
    flat ripple
    width="120px"
    height="120px"
    class="card-border-radius"
  >
    <v-card-text>
      <div class="mb-2">
        <v-icon color="white">{{ icon }}</v-icon>
      </div>

      <div>
        <h3 class="font-weight-regular graphik-font-family white--text">
          {{ title }}
        </h3>
      </div>
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
    }
  }
};
</script>

<style>
.card-border-radius {
  border-radius: 6px;
}
</style>
