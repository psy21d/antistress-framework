<script>
/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

import {
  getComponentConfig,
  getWorkingMethod,
  getTextMethod,
} from "@/core/service.js";
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
  props: ["keypr", "w", "field", "parentComponent", "slotProps"],

  setup(props) {
    try {
      let window = typeof window === "object" ? window : props.w;
    } catch (e) {
      console.log(e);
    }

    let config = getComponentConfig(props.keypr, window);

    let click = (e) => {
      try {
        let f = getWorkingMethod(config, "click", window);
        f({
          value: e.target.value,
          field: props.field,
          parentComponent: props.parentComponent,
          keypr: props.keypr,
          slotProps: props.slotProps,
        });
      } catch (error) {
        console.log(error);
        console.log(`no click method for ${props.keypr}`);
        console.log(getTextMethod(config, "click", window));
      }
    };

    return {
      window,
      props,
      ...props,
      click,
      config,
      ...config,
    };
  },
};
</script>

<template>
  <Button
    :style="config.style ? config.style : {}"
    :class="config.class ? config.class : {}"
    @click="click"
  >
    {{ config.attributes ? config.attributes.label : "" }}
  </Button>
</template>