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
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.min.js",
            components: [
                {
                    key: "card",
                    storemix: "card-item-01"
                },
                {
                    key: "card",
                    storemix: "card-item-02"
                },
                {
                    key: "card",
                    storemix: "card-item-03"
                },
            ]                
        },
        photo: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.min.js",
            style: {
                "background-image": "@card-image"
            }
        },
        card: {
            "name": "Form-0",
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.min.js",
            // important: we can get it from config directly
            components: [
                {
                    key: "photo",
                },
                {
                    key: "textcard",
                },
                {
                    key: "tags",
                }
            ],
        },
        textcard: {
            "name": "Form-0",
            "url": "http://yourfriend.best:8080/components/Form/Form-0.umd.min.js",
            // important: we can get it from config directly
            components: "@tags",
        },
        maintext: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.min.js",
            store: "maintext"
        },
        date: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.min.js",
            store: "date"
        },
        tag: {
            "name": "Span-0",
            "url": "http://yourfriend.best:8080/components/Span/Span-0.umd.min.js",
        }
    },
    composition: {
        point: "box"
    },
    store: {
        "card-item-01": {
            tags: [
                {
                    key: "tag",
                    store: "tag1",
                },
                {
                    key: "tag",
                    store: "tag2",
                },
                {
                    key: "tag",
                    store: "tag3",
                }
            ],
            "card-image": "https://d1ag85ptixulvl.cloudfront.net/k28kmvrzx80m/6IFVQ6rYVvx1YCVjn3FJSj/61876da0e6ed85da38aa04c75ed33ee3/Screenshot_2022-08-03_at_09.22.17.png?w=512&q=90&fl=progressive&fit=fill&h=332",
            maintext: "Seaboard RISE 2: First Touch | Madeon",
            date: "August 4th 2022",
            tag1: "Artists",
            tag2: "Features",
            tag3: "Videos",
        },
        "card-item-02": {
            tags: [
                {
                    key: "tag",
                    store: "tag1",
                },
                {
                    key: "tag",
                    store: "tag2",
                },
                {
                    key: "tag",
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
                    key: "tag",
                    store: "tag1",
                },
                {
                    key: "tag",
                    store: "tag2",
                },
                {
                    key: "tag",
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