<script>
    /*
      Apache 2.0 licensed
      psy21d
      psy21d@yourfriend.best
      first upd 4.09.2022
      last upd 18.09.2022
    */
import { 
    getComponentConfig, 
    makeLinksWithStore 
} from '@/service/service.js';

export default {
    props: [
        'store', // key store
        'config',
        'storedata'
    ],
    setup(props) {
        let componentConfig = getComponentConfig(props.store, props.w);
        return { ...props, props, componentConfig, ...componentConfig }
    }
}

</script>

<template>
    <span
        :style="makeLinksWithStore({ config, json: componentConfig.style })"
        :class="makeLinksWithStore({ config, json: componentConfig.class })"
    > {{
        props.storedata['default'] ||
        props.storedata[store] ||
        window.store[componentConfig.store]
    }}
    </span>
</template>

