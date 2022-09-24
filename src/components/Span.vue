<script>
    /*
      Apache 2.0 licensed
      psy21d
      psy21d@yourfriend.best
      first upd 4.09.2022
      last upd 18.09.2022
    */
import {
    makeLinksWithStore 
} from '@/core/service.js';

export default {
    props: [
        "store",
        "config",
        "componentConfig"
    ],
    setup(props) {
        return { props, ...props, makeLinksWithStore }
    }
}

</script>

<template>
    <span
        :style="makeLinksWithStore({ config, json: { ...componentConfig.style } })"
        :class="makeLinksWithStore({ config, json: { ...componentConfig.class } })"
    >
    {{ componentConfig }}
    {{ store }}
    {{
        componentConfig.store ? componentConfig.store['default'] : undefined ||
        componentConfig.store ? componentConfig.store[store] : undefind||
        config.store[componentConfig.store]
    }}
    </span>
</template>

