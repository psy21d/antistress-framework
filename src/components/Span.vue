<script>
    /*
      Apache 2.0 licensed
      psy21d
      psy21d@yourfriend.best
      first upd 4.09.2022
      last upd 26.09.2022
    */
import {
    makeLinksWithStore 
} from '@/core/service.js';

export default {
    props: [
        "store",
        "config",
        "storemix",
        "componentConfig",
    ],
    setup(props) {
        return { props, ...props, makeLinksWithStore }
    }
}

</script>

<template>
    <span
        :style="makeLinksWithStore({ 
            store: {
                ...config.store, 
                ...(componentConfig && componentConfig.storedata) ?
                    componentConfig.storedata[store] : undefined,
                ...storemix 
            }, 
            json: {
                ...componentConfig.style
            }
        })"
        :class="makeLinksWithStore({
            store: {
                ...config.store,
                ...(componentConfig && componentConfig.storedata) ?
                    componentConfig.storedata[store] : undefined,
                ...storemix 
            },
            json: {
                ...componentConfig.class
            }
        })"
    >
    {{
        ( { ...config.store, ...storemix }[store] ||
        { ...config.store, ...storemix }[componentConfig.store])
    }}
    </span>
</template>

