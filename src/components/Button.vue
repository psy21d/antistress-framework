<script>
    /*
      Apache 2.0 licensed
      psy21d
      psy21d@yourfriend.best
      first upd 26.09.2022
      last upd 26.09.2022
    */
import {
  getWorkingMethod,
  getTextMethodByEvent,
} from "@/core/service.js";
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
  props: [
        "store",
        "config",
        "storemix",
        "componentConfig",
  ],
  setup(props) {
  
    let onClick = () => {
      try {
        let f = getWorkingMethod({ 
          config: props.config, 
          eventType: "click", 
          methods: props.componentConfig.methods
        });
        f({
          store: props.store,
          config: props.config,
          storemix: props.storemix,
          componentConfig: props.componentConfig,
        });
      } catch (error) {
        console.log(error);
        console.log(`no click method click`);
        //TODO breadcrumbs
        console.log(getTextMethodByEvent({ 
          config: props.config, 
          eventType: "click", 
          methods: props.componentConfig.methods
        }));
      }
    };

    console.log(({ ...props.config.store, ...props.storemix }[props.store] ||
      { 
          ...props.config.store, 
          ...props.componentConfig.storemix, 
          ...props.storemix 
      }[props.componentConfig.store]
      ))

    return {
      props,
      ...props,
      onClick,
    };
  },
};
</script>

<template>
  <Button
    :style="componentConfig.style ? componentConfig.style : {}"
    :class="componentConfig.class ? componentConfig.class : {}"
    @click="onClick"
  >
  {{
      ({ ...config.store, ...componentConfig.storemix, ...storemix }[store] ||
       { ...config.store, ...componentConfig.storemix, ...storemix }[componentConfig.store])
  }}
  </Button>
</template>
