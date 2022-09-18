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
        // ключ компонента в сторе,
        'store',
        'w',
        'storedata'
    ],
    setup(props) {
        let componentConfig = getComponentConfig(props.store, props.w);
        return { w: props.w, ...props, props, componentConfig, ...componentConfig }
    }
}

</script>

<template>
    <span
        :style="makeLinksWithStore(w, componentConfig.style)"
        :class="makeLinksWithStore(w, componentConfig.class)"
    > {{
        props.storedata['default'] ||
        props.storedata[store] ||
        window.store[componentConfig.store]
    }}
    </span>
</template>

