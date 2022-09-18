<script>
/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

import { getComponentByName } from "@/core/service.js";
import window from "@/router/router.js"

export default {
  setup() {
    return { window, getComponentByName };
  },
};
</script>

<template>
  <component
    v-if="window.config"
    :is="getComponentByName(window.config.composition.point, window)"
    :w="window.config"
    :keypr="window.config.composition.point"
  />
</template>
