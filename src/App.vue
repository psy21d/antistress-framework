<template>
  <component
    v-if="window.config"
    :is="getComponentByName(window.config.composition.point, window)"
    :w="window"
    :keypr="window.config.composition.point"
  />
</template>

<script>
import { getComponentByName } from "@/core/service.js";

export default {
  setup() {
    return { window, getComponentByName };
  },
};
</script>