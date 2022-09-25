/*
  Apache 2.0 licensed
  psy21d
  psy21d@yourfriend.best
  4.09.2022
*/

export default {
    components: {
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
            }
        },
        photo: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.js",
            style: {
                "background-image": "@card-image"
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
                    name: "textcard",
                },
            ],
        },
        textcard: {
            "name": "Form-0",
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.js",
            // important: we can get it from config directly
            components: "@tags",
        },
        maintext: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.js",
            store: "maintext"
        },
        date: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.js",
            store: "date"
        },
        tag: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.js",
        }
    },
    composition: {
        point: "gridbox"
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
            "card-image": "https://d1ag85ptixulvl.cloudfront.net/k28kmvrzx80m/6IFVQ6rYVvx1YCVjn3FJSj/61876da0e6ed85da38aa04c75ed33ee3/Screenshot_2022-08-03_at_09.22.17.png?w=512&q=90&fl=progressive&fit=fill&h=332",
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
            "card-image": "https://d1ag85ptixulvl.cloudfront.net/k28kmvrzx80m/1IrLCPnufZhNdS9sqsWdWj/63b76e6b6b4570d3d895aa4ff5dd841d/Screenshot_2022-06-24_at_14.34.39.png?w=512&q=90&fl=progressive&fit=fill&h=332",
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
            "card-image": "https://d1ag85ptixulvl.cloudfront.net/k28kmvrzx80m/4PHZfFSlIRpv5dEvhicLZ6/33f5419e85d237a37392442737826e67/Marco_Smiling.jpg?w=512&q=90&fl=progressive&fit=fill&h=332",
            maintext: "Marco Parisi: Orchestral Explorations on Seaboard",
            date: "June 16th 2022",
            tag1: "Artists",
            tag2: "Features",
            tag3: "Videos",
        },
    }
}