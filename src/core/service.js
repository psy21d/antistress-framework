/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

export const getComponentByName = (name, window) => {
    if (!
        (window.config && 
         window.config.components && 
         window.config.components[name]
        )) {
        console.warn(`Component not found: ${name}. Please check config file.`)
        return
    }
    return window.componentsStore[window.config.components[name].name]
}

export const getComponentConfig = (name, window) => {
    return window.config.components[name]
}

export const getWorkingMethod = (config, eventType, window) => {
    if (config.methods && window.config.workingMethods[config.methods[eventType]])
        return window.config.workingMethods[config.methods[eventType]]
    return () => { }
}

export const getTextMethod = (config, eventType, window) => {
    if (config.methods && window.config.workingMethods[config.methods[eventType]])
        return config.methods
    return () => { }
}