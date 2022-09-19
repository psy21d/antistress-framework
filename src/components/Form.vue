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
  getComponentConfig,
} from "@/core/service.js";

export default {
  props: [
    "store",
    "w",
  ],
  setup(props) {
    try {
      let window = typeof window === "object" ? window : props.w;
    } catch (e) {
      console.log(e);
    }

    let config = getComponentConfig(props.keypr, window);

    let clist = config.attributes.components;

    // Передавать в компонент именно микс: конфиг частичный и keypr
    // Далее компонент готовит себе по сервисной функции реактивный конфиг слитный

    // Это нужно для того, чтобы не объявлять миллион компонентов на 1 уровне,
    // а пользоваться компонентом в частном (например, заменить ему store)

    return {
      window,
      clist,
      ...props,
      getComponentByName,
      ...config,
      config,
    };
  },
};
</script>

<template>
  <div
    v-if="config.style || config.class"
    :style="config.style ? config.style : {}"
    :class="config.class ? config.class : {}"
  >
    <component
      :keypr="c.key"
      :w="window"
      v-for="c in clist"
      :is="getComponentByName(c.key, window)"
      :key="c.key"
    />
  </div>
  <template v-else>
    <component
      :keypr="c.key"
      :w="window"
      v-for="c in clist"
      :is="getComponentByName(c.key, window)"
      :key="c.key"
    />
  </template>
</template>