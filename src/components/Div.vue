<script>
    /*
      Apache 2.0 licensed
      psy21d
      psy21d@yourfriend.best
      first upd 26.09.2022
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
        console.log(
            makeLinksWithStore(
                { 
                    store: {
                        ...props.config.store, 
                        ...(props.componentConfig && props.componentConfig.storedata) ?
                            props.componentConfig.storedata[props.store] : undefined,
                        ...props.storemix 
                    }, 
                    json: { ...props.componentConfig.style } 
                }
            )
        )
        console.log(
            makeLinksWithStore(
                { 
                    store: {
                        ...props.config.store, 
                        ...(props.componentConfig && props.componentConfig.storedata) ?
                            props.componentConfig.storedata[props.store] : undefined,
                        ...props.storemix 
                    }, 
                    json: { ...props.componentConfig.class } 
                }
            )
        )
        return { props, ...props, makeLinksWithStore }
    }
}

</script>

<template>
    <div
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
    </div>
</template>

