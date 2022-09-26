/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  first upd 4.09.2022
  last upd 26.09.2022
*/
import { reactive } from "vue"

export const getComponentByName = ({ name, config }) => {
    let x = config;
    if (!( 
            config && 
            config.components && 
            config.components[name]
        )) {
        console.warn(`Component not found: ${ name }. Please check config file.`)
        return
    }
    x;
    return config.componentsStore[config.components[name].name]
}

export const getStoreData = ({ name, config }) => {
    return config.components[name]
}

export const getMethodByEvent = ({ methods, eventType }) => {
    return methods[eventType]
}

export const getWorkingMethod = ({ config, methods, eventType }) => {
    if (config.methods && config.workingMethods[methods[eventType]])
        return config.workingMethods[getMethodByEvent({ methods, eventType })]
    return () => { }
}

export const getTextMethodByEvent = ({ config, methods, eventType }) => {
    if (config.methods && config.workingMethods[methods[eventType]])
        return getMethodByEvent({ methods, eventType })
    return () => { }
}

export const getSomeValueFromStore = ({store, value }) => {
    if (typeof value === "string") {
        if (value[0] === "@") {
            return store[value.substring(1)]
        } else {
            return value
        }
    } else {
        return value
    }
}


export const makeLinksWithStore = ({store, json }) => {
    let r = reactive({})
    Object.keys(json).forEach(key => {
        r[key] = getSomeValueFromStore({ store, value: json[key] })
    })
    return r;
}