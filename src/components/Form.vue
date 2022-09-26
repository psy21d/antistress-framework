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
  makeLinksWithStore,
} from "@/core/service.js";

export default {
  props: [
    "store",
    "config",
    "storemix",
    "componentConfig",
  ],
  setup(props) {
    // let storemix={
    //     ...props.storemix,
    //     ...(props.componentConfig ? props.componentConfig.storemix : undefined),
    //     ...props.config.store[props.componentConfig ? props.componentConfig.storedata : undefined],
    //   }
    //   console.log(storemix);
    //   console.log(props.storemix);
    //   console.log(props.componentConfig ? props.componentConfig.storemix : undefined)
    //   console.log(props.config.store[props.componentConfig ? props.componentConfig.storedata : undefined])

    return {
      clist: (
        getSomeValueFromStore(
          { 
            store: {
                ...props.config.store,
                ...props.storemix,
                ...(props.componentConfig ? props.componentConfig.storemix : undefined),
                ...props.config.store[props.componentConfig ? props.componentConfig.storedata : undefined],
            }, 
            value: props.componentConfig ? 
              props.componentConfig.components : undefined
          }
      )
      ),
      props,
      ...props,
      getComponentByName,
      makeLinksWithStore,
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
    v-if="componentConfig.style || componentConfig.class"
    :style="makeLinksWithStore({ store: config.store, json: { ...componentConfig.style } })"
    :class="makeLinksWithStore({ store: config.store, json: { ...componentConfig.class } })"
  >
  {{ config.style }}
    <component
      :key="c"
      :store="
        componentConfig.storemix? componentConfig.storemix.store : undefined ||
        c.store ||
        componentConfig.store
      "
      :storedata="componentConfig.storedata"
      :storemix="{
        ...storemix,
        ...(componentConfig ? componentConfig.storemix : undefined),
        ...config.store[componentConfig ? componentConfig.storedata : undefined],
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
      :storedata="componentConfig.storedata"
      :storemix="{
        ...storemix,
        ...(componentConfig ? componentConfig.storemix : undefined),
        ...config.store[componentConfig ? componentConfig.storedata : undefined],
      }"
      :config="config"
      :componentConfig="{ ...config.components[c.name], ...c }"
      v-for="c in clist"
      :is="getComponentByName({ name: c.name, config })"
    />
  </template>
</template>