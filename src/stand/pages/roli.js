/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

export default {
    components: {
        page: {
            "name": "Form-0",
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.js",
            components: [
                {
                    name: "gridbox"
                },
                {
                    name: "addmore"
                }
            ],
            style: {
                padding: "32px",
                "background-color": "rgb(232, 232, 233)",
                "min-height": "100vh"
            }
        },
        gridbox: {
            "name": "Form-0",
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.js",
            components: [
                {
                    name: "card",
                    storedata: "card-item-01",
                    storemix: {
                        maintext: "From card-item-01",
                    }
                },
                {
                    name: "card",
                    storedata: "card-item-02"
                },
                {
                    name: "card",
                    storedata: "card-item-03"
                },
            ],
            storedata: "gridbox",
            storemix: {
                maintext: "!!! Seaboard RISE 2: First Touch | Madeon",
            },
            style: {
                display: "flex",
                width: "100%",
                "max-width": "1200px",
                "-webkit-flex-wrap": "wrap",
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "-webkit-box-align": "stretch",
                "-webkit-align-items": "stretch",
                "-ms-flex-align": "stretch",
                "align-items": "stretch",
                gap: "32px",
                "justify-content": "center"
            }
        },
        photo: {
            "name": "Div-0",
            "url": "http://yourfriend.best:8080/components/Div/Div-0.umd.js",
            style: {
                display: "block",
                height: "50%",
                "flex-grow": "0",
                "background-image": "@card-image",
                "min-height": "100px",
                "background-size": "cover"
            }
        },
        card: {
            "name": "Form-0",
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.js",
            // important: we can get it from config directly
            components: [
                {
                    name: "photo",
                },
                {
                    name: "maintext",
                },
                {
                    name: "card-date-and-tags"
                },
            ],
            style: {
                "display": "flex",
                "flex-direction": "column",
                "min-width": "230px",
                "max-width": "300px",
                "min-height": "280px",
                "height": "35vw",
                "max-height": "400px",
                "width": "26vw",
                "border-radius": "8px",
                overflow: "hidden",
                "background-color": "#fff"
            },
            storemix: {
                maintext: "From card-component",
            }
        },
        textcard: {
            "name": "Form-0",
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.js",
            // important: we can get it from config directly
            components: "@tags",
            style: {
                "padding": "0",
                "row-gap": "12px",
                "display": "flex",
                "justify-items": "center",
                "flex-glow": "row"
            }
        },
        maintext: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.js",
            store: "maintext",
            style: {
                "flex-grow": "0.5",
                "padding": "24px",
                "padding-bottom": "12px",
            }
        },
        date: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.js",
            store: "date"
        },
        "card-date-and-tags": {
            "name": "Form-0",
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.js",
            components: [
                {
                    name: "date",
                },
                {
                    name: "textcard",
                    style: {
                        "padding": "0",
                        "column-gap": "12px",
                        "flex-wrap": "wrap",
                        "display": "flex",
                        "justify-items": "center",
                        "flex-glow": "row"
                    }
                },
            ],
            style: {
                display: "flex",
                "gap": "12px",
                "flex-flow": "row",
                "flex-grow": "0.5",
                "padding": "24px",
                "padding-top": "0",
                "padding-bottom": "12px",
            }
        },
        tag: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.js",
        },
        addmore: {
            "name": "Button-0",
            "url": "http://yourfriend.best:8080/components/Button/Button-0.umd.js",
            storemix: {
                "addmore": "Add another card +"
            },
            store: "addmore",
            style: {
                margin: "32px",
            },
            methods: {
                "click": "mockable",
            }
        }
    },
    composition: {
        point: "page"
    },
    methods: {
        mockable: `({store, config, storemix, componentConfig }) =>  {
            config.components.gridbox.components.push({
                name: "card",
                storemix: {
                    maintext: "maintext",
                    "card-image": "url(https://d1ag85ptixulvl.cloudfront.net/k28kmvrzx80m/16Uk3PJjbc9eJPKoMvjPr4/9070b9f806b18c07c7957e7e0f6220a2/2021-12_Pensacola_Mist_LUMI_SE_-_Blog__2x.jpg?w=512&q=90&fl=progressive&fit=fill&h=332)",
                    "date": "Undated",
                    tags: [{
                        name: "tag",
                        store: "ta",
                        storemix: {
                            ta: "tag AA"
                        }
                    },
                    {
                        name: "tag",
                        store: "tb",
                        storemix: {
                            tb: "tag AB"
                        }
                    },
                    {
                        name: "tag",
                        store: "tc",
                        storemix: {
                            tc: "tag AC"
                        }
                    }],
                    ta: "tag A",
                    tb: "tag B",
                    tc: "tag C",
                }
            })
        }`
    },
    store: {
        "gridbox": {
            reactivetest01: "A",
        },
        "card-item-01": {
            tags: [
                {
                    name: "tag",
                    store: "tag1",
                },
                {
                    name: "tag",
                    store: "tag2",
                },
                {
                    name: "tag",
                    store: "tag3",
                }
            ],
            "card-image": "url(https://d1ag85ptixulvl.cloudfront.net/k28kmvrzx80m/6IFVQ6rYVvx1YCVjn3FJSj/61876da0e6ed85da38aa04c75ed33ee3/Screenshot_2022-08-03_at_09.22.17.png?w=512&q=90&fl=progressive&fit=fill&h=332)",
            //maintext: "Seaboard RISE 2: First Touch | Madeon",
            date: "August 4th 2022",
            tag1: "Artists",
            tag2: "Features",
            tag3: "Videos",
        },
        "card-item-02": {
            tags: [
                {
                    name: "tag",
                    store: "tag1",
                },
                {
                    name: "tag",
                    store: "tag2",
                },
                {
                    name: "tag",
                    store: "tag3",
                }
            ],
            "card-image": "url(https://d1ag85ptixulvl.cloudfront.net/k28kmvrzx80m/1IrLCPnufZhNdS9sqsWdWj/63b76e6b6b4570d3d895aa4ff5dd841d/Screenshot_2022-06-24_at_14.34.39.png?w=512&q=90&fl=progressive&fit=fill&h=332)",
            maintext: "Marco Parisi: Two Finger Seaboard Performance",
            date: "June 24th 2022",
            tag1: "Artists",
            tag2: "Features",
            tag3: "Videos",
        },
        "card-item-03": {
            tags: [
                {
                    name: "tag",
                    store: "tag1",
                },
                {
                    name: "tag",
                    store: "tag2",
                },
                {
                    name: "tag",
                    store: "tag3",
                }
            ],
            "card-image": "url(https://d1ag85ptixulvl.cloudfront.net/k28kmvrzx80m/4PHZfFSlIRpv5dEvhicLZ6/33f5419e85d237a37392442737826e67/Marco_Smiling.jpg?w=512&q=90&fl=progressive&fit=fill&h=332)",
            maintext: "Marco Parisi: Orchestral Explorations on Seaboard",
            date: "June 16th 2022",
            tag1: "Artists",
            tag2: "Features",
            tag3: "Videos",
        },
    }
}