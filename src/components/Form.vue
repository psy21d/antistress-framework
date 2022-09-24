<script>
/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  first upd 4.09.2022
  last upd 18.09.2022
*/
import { 
  getComponentByName,
  getSomeValueFromStore,
} from "@/core/service.js";

export default {
  props: [
    "store",
    "config",
    "componentConfig"
  ],
  setup(props) {

    console.log(props.config)

    let mixedstore = {
        ...props.config.store,
        ...props.config.store[props.componentConfig ? props.componentConfig.storedata : null],
        ...(props.componentConfig ? props.componentConfig.storemix : undefined)
    }

    console.log(mixedstore)
    console.log(props.config.components)

    debugger;

    console.log(props.componentConfig)
    console.log(props.componentConfig.components)

    console.log(getSomeValueFromStore(
          { 
            store: mixedstore, 
            value: props.componentConfig ? 
              props.componentConfig.components : undefined
          }
      )
    )

    debugger;

    return {
      clist: (
        getSomeValueFromStore(
          { 
            store: {
                ...props.config.store,
                ...props.config.store[props.componentConfig ? props.componentConfig.storedata : null],
                ...(props.componentConfig ? props.componentConfig.storemix : undefined)
            }, 
            value: props.componentConfig ? 
              props.componentConfig.components : undefined
          }
      )
      ),
      props,
      ...props,
      getComponentByName,
      };
  },
};
</script>

<template>
  <!-- {{ config }}
  <br /><br /><br /><br />
  {{ componentConfig }}
  <br /><br /><br /><br /> -->
  <div
    v-if="config.style || config.class"
    :style="makeLinksWithStore({ config, json: { ...componentConfig.style } })"
    :class="makeLinksWithStore({ config, json: { ...componentConfig.class } })"
  >
    <component
      :key="c"
      :store="
        componentConfig.storemix? componentConfig.storemix.store : undefined ||
        c.store ||
        componentConfig.store
      "
      :storedata="{
        ...config.store,
        ...config.store[componentConfig ? componentConfig.storedata : null],
        ...(componentConfig ? componentConfig.storemix : undefined)
      }"
      :config="config"
      :componentConfig="{ ...config.components[c.name], ...c }"
      v-for="c in clist"
      :is="getComponentByName({ name: c.name, config })"
    />
  </div>
  <template v-else>
    <component
      :key="c"
      :store="
        componentConfig.storemix ? componentConfig.storemix.store : undefined ||
        c.store ||
        componentConfig.store
      "
      :storedata="{
        ...config.store,
        ...config.store[componentConfig ? componentConfig.storedata : null],
        ...(componentConfig ? componentConfig.storemix : undefined)
      }"
      :config="config"
      :componentConfig="{ ...config.components[c.name], ...c }"
      v-for="c in clist"
      :is="getComponentByName({ name: c.name, config })"
    />
  </template>
</template>