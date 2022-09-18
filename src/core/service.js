/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  first upd 4.09.2022
  last upd 18.09.2022
*/

export const getComponentByName = ({ name, config }) => {
    if (!( 
            config && 
            config.components && 
            config.components[name]
        )) {
        console.warn(`Component not found: ${ name }. Please check config file.`)
        return
    }
    return config.components[config.components[name].name]
}

export const getComponentConfig = ({ name, сonfig }) => {
    return сonfig.components[name]
}

export const getMethodByEvent = ({ methods, eventType }) => {
    return methods[eventType]
}

export const getWorkingMethod = ({ config, methods, eventType }) => {
    if (config.methods && config.workingMethods[methods[eventType]])
        return config.workingMethods[getMethodByEvent(methods, eventType)]
    return () => { }
}

export const getTextMethodByEvent = ({ config, methods, eventType }) => {
    if (config.methods && config.workingMethods[methods[eventType]])
        return getMethodByEvent(methods, eventType)
    return () => { }
}

export const getSomeValueFromStore = ({ config, value }) => {
    if (typeof value === "string") {
        if (value[0] === "@") {
            debugger;
            return config.store[value.substring(1)]
        } else {
            return value
        }
    } else {
        return value
    }
}

export const makeLinksWithStore = ({ config, json }) => {
    return Object.keys(json).map(key => {
        return getSomeValueFromStore({ config, value: json[key][0] })
    })
}