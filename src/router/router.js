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
let configUrl = window.apiUrl !== "%APIURL%" ? window.apiUrl : "http://yourfriend.best/antistress-demo"
import empty from "@/stand/pages/empty.js"

let w = reactive({
    ...empty
});

let localSwitch = (collection) => {
    let query = {}
    query.query = {}
    if (collection.storeKeys !== undefined) {
        collection.storeKeys.forEach((key) => {
            set(query.query, key, get(w, key))
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
    if (typeof config === "string") {
        config = JSON.parse(config)
    }

    w = w ? w : reactive({ ...config })
    w.store = w.store ? w.store : {}

    let keysCollection = keysFromJson(config).filter((key) => {
        return !(typeof get(config, key) === 'object')
    })

    w.workingMethods = {
        ...w.workingMethods
    }

    w.workingMethods.switch = localSwitch;

    Object.keys(w.components).forEach((key) => {
        if (w.components[key].attributes &&
            w.components[key].attributes.components &&
            config.components &&
            config.components[key] &&
            typeof config.components[key].attributes === "object" &&
            typeof config.components[key].attributes.components === "object"
        ) {
            w.components[key].attributes.components = config.components[key].attributes.components
        }
    })

    keysCollection.forEach((key) => {
        set(w, key, get(config, key))
    })

    // if switch f in config, then will be setup from conf
    Object.keys(w.methods || []).forEach((key) => {
        w.workingMethods[key] =
            new Function("return " + w.methods[key])()
    })

    if (config.components) loadComponents(config)
}

// --------------------
// TODO: move to core

let setconfig = (config) => {
    if (typeof config === undefined) return;
    configUpdate(config);
}

w.setconfig = setconfig

// --------------------

let getconfig = () => {
    return axios.get(configUrl)
        .then(response => {
            let data = response.data;
            configUpdate(data);
        });
}

w.getconfig = getconfig

export { localSwitch, updateFromServer, configUpdate, getconfig, setconfig, w }

w.switch = localSwitch
w.update = updateFromServer

window.w = w;