/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

import axios from "axios"
import { loadComponents } from "@/core/loadcomponents.js"
import { reactive } from "vue"
import { set, get } from "lodash"
let configUrl = window.apiUrl !== "%APIURL%" ? window.apiUrl : "https://yourfriend.best:8080/antistress-demo"
import empty from "@/stand/pages/empty.js"

let window = reactive({
    ...empty
});

let localSwitch = (collection) => {
    let query = {}
    query.query = {}
    if (collection.storeKeys !== undefined) {
        collection.storeKeys.forEach((key) => {
            set(query.query, key, get(window.config, key))
        })
    }
    const toSend = { ...query, ...collection }

    console.log(toSend);

    axios.post(configUrl, toSend).then(response => {
        let data = response.data;
        configUpdate(data);
    });
}

let updateFromServer = (config) => {
    axios.post(configUrl, config).then(response => {
        let data = response.data;
        configUpdate(data);
    });
}

let keysFromJson = (json) => {
    if (typeof json !== 'object') return;
    let keysCollection = Object.keys(json);
    let counter = 0;
    while (counter < keysCollection.length) {
        if (typeof get(json, keysCollection[counter]) === 'object') {
            let portion = []
            try {
                portion = Object.keys(get(json, keysCollection[counter]));
            } catch {
                console.log(keysCollection[counter])
            }
            portion.forEach((key) => {
                keysCollection.push(`${keysCollection[counter]}.${key}`)
            })
        }
        counter++
    }
    return keysCollection
}

let configUpdate = (config) => {
    window.config = window.config ? window.config : reactive({ ...config })
    window.store = window.config.store ? window.config.store : {}

    let keysCollection = keysFromJson(config).filter((key) => {
        return !(typeof get(config, key) === 'object')
    })

    window.config.workingMethods = {
        ...window.config.workingMethods
    }

    window.config.workingMethods.switch = localSwitch;

    Object.keys(window.config.components).forEach((key) => {
        if (window.config.components[key].attributes &&
            window.config.components[key].attributes.components &&
            config.components &&
            config.components[key] &&
            typeof config.components[key].attributes === "object" &&
            typeof config.components[key].attributes.components === "object"
        ) {
            window.config.components[key].attributes.components = config.components[key].attributes.components
        }
    })

    keysCollection.forEach((key) => {
        set(window.config, key, get(config, key))
    })

    // if switch f in config, then will be setup from conf
    Object.keys(window.config.methods).forEach((key) => {
        window.config.workingMethods[key] =
            new Function("return " + window.config.methods[key])()
    })

    if (config.components) loadComponents(config)
}

// --------------------
// TODO: move to core

let setconfig = (config) => {
    if (typeof config === undefined) return;
    configUpdate(config);
}

window.setconfig = setconfig

// --------------------

let getconfig = () => {
    return axios.get(configUrl)
        .then(response => {
            let data = response.data;
            configUpdate(data);
        });
}

window.getconfig = getconfig

export { localSwitch, updateFromServer, configUpdate, getconfig, setconfig, window }

window.switch = localSwitch
window.update = updateFromServer


// start application
if (window.apiUrl !== "%APIURL%") {
    getconfig()
}