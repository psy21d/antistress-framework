<script>
/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

import { getComponentByName } from "@/core/service.js";
import { w } from "@/router/router.js"
import roli from "@/stand/pages/roli.js"
// start application
// if (w.apiUrl !== "%APIURL%") {
//     w.getconfig()
// } 

w.setconfig(roli)

export default {
  setup() {
    return { w, getComponentByName };
  },
};
</script>

<template>
  <component
    v-if="w"
    :is="getComponentByName({name: w.composition.point, config: w})"
    :w="w"
    :store="w.composition.point"
  />
</template>
