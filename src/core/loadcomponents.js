/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

import { defineAsyncComponent, reactive } from 'vue'

let externalComponent = async function(url) {    
    const name = url.split('/').reverse()[0].match(/^(.*?)\.umd/)[1];
  
    if (window[name]) return window[name];
  
    window[name] = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.addEventListener('load', () => {
        resolve(window[name]);
      });
      script.addEventListener('error', () => {
        reject(new Error(`Error loading ${url}`));
      });
      script.src = url;
      document.head.appendChild(script);
    });
  
    return window[name];
}

let loadComponents = (config) => {
    window.componentsStore = window.componentsStore ? window.componentsStore : reactive({})
    Object.keys(config.components).forEach((c) => {
        let LC = () => externalComponent(config.components[c].url);
        window.componentsStore[config.components[c].name] = defineAsyncComponent(() => { 
            return new Promise((resolve) => {
                // ...load component from server
                resolve(LC())
            })
        })
    })
}

export { loadComponents }