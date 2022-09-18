<script>
/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/
import { getComponentConfig } from "@/core/service.js";
import MultiSelect from "primevue/multiselect";

export default {
  components: {
    MultiSelect,
  },
  props: ["keypr", "w"],
  setup(props) {
    try {
      let window = typeof window === "object" ? window : props.w;
    } catch (error) {
      console.log(error);
    }

    let config = getComponentConfig(props.keypr, window);

    return { window, ...props, ...config };
  },
};
</script>

<template>
  <MultiSelect
    :style="config.style ? config.style : {}"
    :class="config.class ? config.class : {}"
    :options="options"
    :optionLabel="optionLabel"
    :placeholder="placeholder"
    v-model="window.config.store[config.store]"
    display="chip"
  />
</template>
