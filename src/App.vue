<script>
/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  first upd 4.09.2022
  last upd 24.09.2022
*/

import { getComponentByName, getComponentConfig } from "@/core/service.js";
import { w } from "@/router/router.js"
import roli from "@/stand/pages/roli.js"
// start application
// if (w.apiUrl !== "%APIURL%") {
//     w.getconfig()
// } 

w.setconfig(roli)

export default {
  setup() {
    return { w, getComponentByName, getComponentConfig };
  },
};
</script>

<template>
  <component
    v-if="w"
    :is="getComponentByName({name: w.composition.point, config: w})"
    :w="w"
    :name="w.composition.point"
    :config="w"
    :componentConfig="w.components[w.composition.point]"
    :storemix="{
      ...w.store[w.components[w.composition.point].storedata],
      ...w.components[w.composition.point].storemix
    }"
  />
</template>

<style>
  body {
    padding: 0;
    margin: 0;
  }
</style>
