/* tslint:disable */
export const REPORT = {
  "kind": "pagespeedonline#result",
  "id": "http://www.renovasolar.com/",
  "responseCode": 200,
  "title": "Renova Solar | Solar Panel Solution | Palm Desert CA",
  "ruleGroups": {
    "SPEED": {
      "score": 41
    }
  },
  "pageStats": {
    "numberResources": 49,
    "numberHosts": 9,
    "totalRequestBytes": "5288",
    "numberStaticResources": 34,
    "htmlResponseBytes": "41813",
    "cssResponseBytes": "130055",
    "imageResponseBytes": "1313045",
    "javascriptResponseBytes": "690008",
    "otherResponseBytes": "75405",
    "numberJsResources": 11,
    "numberCssResources": 3
  },
  "formattedResults": {
    "locale": "en_US",
    "ruleResults": {
      "AvoidLandingPageRedirects": {
        "localizedRuleName": "Avoid landing page redirects",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your page has no redirects. Learn more about {{BEGIN_LINK}}avoiding landing page redirects{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/AvoidRedirects"
            }
          ]
        }
      },
      "EnableGzipCompression": {
        "localizedRuleName": "Enable compression",
        "ruleImpact": 39.4942,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Compressing resources with gzip or deflate can reduce the number of bytes sent over the network."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Enable compression{{END_LINK}} for the following resources to reduce their transfer size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/EnableCompression"
                },
                {
                  "type": "BYTES",
                  "key": "SIZE_IN_BYTES",
                  "value": "385.7KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "71%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery-1.10.2.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "187.6KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "70%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery-ui-1.10.4.custom.min.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "163.9KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "73%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/slider.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "9.7KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "72%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://cdn.rlets.com/capture_configs/091/0a2/297/361451990c9b94cc667b79e.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "8.5KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "85%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery.colorbox-min.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "6.3KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "58%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/swfobject.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "6.1KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "61%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/renova.core.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "2KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "75%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery.masknew.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "1.6KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "54%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "LeverageBrowserCaching": {
        "localizedRuleName": "Leverage browser caching",
        "ruleImpact": 14.416666666666666,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Leverage browser caching{{END_LINK}} for the following cacheable resources:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/css/fonts/entypo/entypo.woff"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/css/smoothness/jquery-ui-1.10.0.custom.css"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/css/stylenewws.css"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/logos/hero_logo.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/bestofthevalley.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/calseia.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/homeicon1.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/homeicon2.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/homeicon3.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/homeicon4.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/nabcep.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/renovasolarlogo.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/sunpowerimg.jpg"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/sunpowerlogo.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/fb.jpg"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/go.jpg"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/houzz.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/linkedin.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/tw.jpg"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/yelp.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/youtube.png"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery-1.10.2.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery-ui-1.10.4.custom.min.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery.colorbox-min.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery.masknew.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/renova.core.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/slider.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/swfobject.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.google-analytics.com/analytics.js"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "2 hours"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MainResourceServerResponseTime": {
        "localizedRuleName": "Reduce server response time",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your server responded quickly. Learn more about {{BEGIN_LINK}}server response time optimization{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/Server"
            }
          ]
        }
      },
      "MinifyCss": {
        "localizedRuleName": "Minify CSS",
        "ruleImpact": 0.3501,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Compacting CSS code can save many bytes of data and speed up download and parse times."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Minify CSS{{END_LINK}} for the following resources to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                },
                {
                  "type": "BYTES",
                  "key": "SIZE_IN_BYTES",
                  "value": "3.4KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "19%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/css/stylenewws.css"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "2.3KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "19%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/css/smoothness/jquery-ui-1.10.0.custom.css"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "1.1KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "18%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MinifyHTML": {
        "localizedRuleName": "Minify HTML",
        "ruleImpact": 0.33,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Compacting HTML code, including any inline JavaScript and CSS contained in it, can save many bytes of data and speed up download and parse times."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Minify HTML{{END_LINK}} for the following resources to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                },
                {
                  "type": "BYTES",
                  "key": "SIZE_IN_BYTES",
                  "value": "2.8KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "42%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://0910a229-7361-4519-90c9-b94cc667b79e.rlets.com/static/setItem.html?rl_eid=setItem-Qrd2KRw&rl_ws=%5B%7B%22k%22%3A%22bot_type%22%2C%22v%22%3A%22%22%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22history_campaign%22%2C%22v%22%3A%22%22%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22history_referrer_type%22%2C%22v%22%3A%22DIRECT%22%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22last_activity_at%22%2C%22v%22%3A1500487496251%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22visit_id%22%2C%22v%22%3A%221f68cd76-9ee3-4b86-9ce1-4f6619d21740%22%2C%22e%22%3A%22%22%7D%2C%7B%22k%22%3A%22visitor_id%22%2C%22v%22%3A%22355659ab-b80e-443a-844f-9b0aec92bf5c%22%2C%22e%22%3A%22%22%7D%5D"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "838B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "47%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://0910a229-7361-4519-90c9-b94cc667b79e.rlets.com/static/getItem.html?rl_eid=getItem-E2ohoAU&rl_ws=%5B%22rl_campaign%22%5D"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "682B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "40%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://0910a229-7361-4519-90c9-b94cc667b79e.rlets.com/static/getItem.html?rl_eid=getItem-K2yphSV&rl_ws=%5B%22RlocalOptOut%22%2C%22RlocalOptOut_USA_192900%22%5D"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "682B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "40%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://0910a229-7361-4519-90c9-b94cc667b79e.rlets.com/static/getItem.html?rl_eid=getItem-w1tupMX&rl_ws=%5B%22bot_type%22%2C%22history_campaign%22%2C%22history_referrer_type%22%2C%22last_activity_at%22%2C%22visitor_id%22%2C%22visit_id%22%5D"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "682B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "40%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MinifyJavaScript": {
        "localizedRuleName": "Minify JavaScript",
        "ruleImpact": 13.2317,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Compacting JavaScript code can save many bytes of data and speed up downloading, parsing, and execution time."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Minify JavaScript{{END_LINK}} for the following resources to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                },
                {
                  "type": "BYTES",
                  "key": "SIZE_IN_BYTES",
                  "value": "129.2KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "46%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery-1.10.2.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "125KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "47%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/slider.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "3.7KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "28%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/renova.core.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "552B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "21%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MinimizeRenderBlockingResources": {
        "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
        "ruleImpact": 12,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your page has {{NUM_SCRIPTS}} blocking script resources and {{NUM_CSS}} blocking CSS resources. This causes a delay in rendering your page.",
          "args": [
            {
              "type": "INT_LITERAL",
              "key": "NUM_SCRIPTS",
              "value": "7"
            },
            {
              "type": "INT_LITERAL",
              "key": "NUM_CSS",
              "value": "3"
            }
          ]
        },
        "urlBlocks": [
          {
            "header": {
              "format": "None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML."
            }
          },
          {
            "header": {
              "format": "{{BEGIN_LINK}}Remove render-blocking JavaScript{{END_LINK}}:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/BlockingJS"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/swfobject.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery-1.10.2.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery-ui-1.10.4.custom.min.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/slider.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery.colorbox-min.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/jquery.masknew.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/js/renova.core.js"
                    }
                  ]
                }
              }
            ]
          },
          {
            "header": {
              "format": "{{BEGIN_LINK}}Optimize CSS Delivery{{END_LINK}} of the following:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/css/stylenewws.css"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/css/smoothness/jquery-ui-1.10.0.custom.css"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "OptimizeImages": {
        "localizedRuleName": "Optimize images",
        "ruleImpact": 75.37490000000001,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Properly formatting and compressing images can save many bytes of data."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Optimize the following images{{END_LINK}} to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/OptimizeImages"
                },
                {
                  "type": "BYTES",
                  "key": "SIZE_IN_BYTES",
                  "value": "735.8KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "59%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/sunpowerimg.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "572KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "64%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://c768846.ssl.cf2.rackcdn.com/Read015.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "39.1KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "79%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://c768846.ssl.cf2.rackcdn.com/Write019.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "33KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "78%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/tw.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "17.8KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "96%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/fb.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "17.6KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "96%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/go.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "12KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "94%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/homeicon2.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "6.7KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "24%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/sunpowerlogo.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "5.2KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "33%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/bestofthevalley.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "4.6KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "24%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/homeicon4.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "4.6KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "20%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/homeicon3.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "4.5KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "14%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/homeicon1.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "3.9KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "14%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/logos/hero_logo.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "3.6KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "43%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/nabcep.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "3KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "20%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/houzz.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "2.8KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "85%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/social/sm/youtube.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "2.8KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "87%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.renovasolar.com/images/newws/calseia.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "2.6KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "11%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "PrioritizeVisibleContent": {
        "localizedRuleName": "Prioritize visible content",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "You have the above-the-fold content properly prioritized. Learn more about {{BEGIN_LINK}}prioritizing visible content{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
            }
          ]
        }
      }
    }
  },
  "version": {
    "major": 1,
    "minor": 15
  },
  "screenshot": {
    "mime_type": "image/jpeg",
    "data": "_9j_4AAQSkZJRgABAQAAAQABAAD_2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj_2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj_wAARCADwAUADASIAAhEBAxEB_8QAHAAAAQQDAQAAAAAAAAAAAAAAAAMEBQYBAggH_8QATBAAAgEDAwEEBQgEDAQFBQAAAQIDAAQRBRIhMQYTQVEUImFxgQcWMlaRlKHRFSRSwQgXIzNCU1RzkrGy8ENik-EYNERygjU2ZKLx_8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv_EAC8RAAICAAYDAAEBBgcAAAAAAAABAhEDEhQhMVEEE0EFQmFxgZHw8RUiIzJSocH_2gAMAwEAAhEDEQA_AOqaKaasWGm3JTfu2HGwsD8NvrfZzVX0t7o6jbB_TNu8Z3PdkfHcu37eKAudFA6UUAUUUUAUUUUAUUUUAUUUUAUUUUAUUVG6-0wtYUgeRDLcRRs0f0gpYZwfDjxoCSzRmqddPfx6vJbi6eJkkjW2MssmGTC5yApD5O4Ek591OIDdx-j3SzXbSSX8kLRu5Kd3ucD1fAcLzQllpzRVG06W9u1sYIdQvm1CaJxehwQIG2Eg4xhSH2gY6jPXrTyTUby4spLuaK4iRmjttgd4xGwyXkJUE43eqCPL21zwsRYqtHfyMF4Esrd_1X9fsLbRmoDs7dTS6fcrNOzETOkMjbm9XaD1IBOMnr5VD215diCWNZribAiM11FLI4CbwHIVlG1sZPGcDPlXQ4WXKe4igMQmcKZHEaZ8WPQfhSuaqDSPLdxejPcXFjHeQtE77mO7a-4BjyR9Hr4mmSanejvJLaSZWe0mdomkklaNwAVyGUAEHI4q0LL5RSFlALe3WMSSyY53SuWY_E0vUKFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFVnW9ct7pL3SNP76fUmBg7uMFdpI-kW6ADxNTek2rWOmWtq8jStDGqF2PLEDrQDuiuL7zt72tW8uFXtJqqqJHAAuDwNxpA9ve1_1m1b7wa9mjl2efUx6O16M1xP8_e1_wBZtX-8mj5-9r_rNq_3k00cuxqI9HbGaM1xP8_O1_1m1f7yaPn72v8ArNq33k00cuxqI9HbGaM1xP8AP3tf9ZtX-8mj5-9r_rNq_wB5NNHLsaiPR2xmjNcT_P3tf9ZtX-8mj5-9r_rNq_3k00cuxqI9HbGaM1xP8_e1_wBZtW-8mj5-9r_rNq_3g00cuxqI9HbGaM1xQO3na_6zav8AeTWfn52u-sur_eTTRy7Goj0drZorir599rvrLq33k0fPvtd9ZdW-8mpo5djUR6O1aK4qPbvtd9ZdX-8mtD287X5_-5tX-8mro5djUR6O2KK4n-fna_6zav8AeTR8_e1_1m1f7yaaOXY1MejtiiuJ_n72v-s2r_eTR8_O1_1m1f7yaaOXZNTHo7Yorif5-9r_AKzav95NHz97X_WbV_vJpo5djUx6O2KM1xP8_e1_1m1f7yaPn52v-s2r_eTTRy7Gpj0dsZozXE_z87X_AFm1f7yaPn72v-s2r_eTTRy7LqY9HbGaM1xP8_O1_wBZtX-8mj5-dr_rNq_3k00cuxqY9HbGaM1xP8_O1_1m1f7yaPn52v8ArNq_3k00cuyamPR2xmjNcT_Pztf9ZtX-8mj5-dr_AKzav95NNHLsupj0dsZozXE_z87X_WbV_vJrPz87X_WbV_vJpo5djUx6O180VxR8_O1_1m1f7yaPn52v-s2r_eTTRy7Gpj0dqhEDMwUBm6kDk1tXFI7e9r_rNq33g0vZ9vO1rXlurdpNVKmRAQbg8jcKaOXY1Meit3w_Xrn-9f8A1GkMU6vlPp1z_ev_AKjSG2voI8hpijFb7aNpqkNMVnFbhaztoBPFGKU21jFAJ4oxW-KMUBpijFbYrOKA0rYCs7ayBQGAK2xWQK2ArJTTFYZaVC1nZSy0N9ta4pwUpNlwaqZGhPFGK320bapk0xRit8UYqlNMUYrfbRtqENMUYrfbRtoDTFGKU20baFE8UYrfbWcUIaYoxW-2jbQGmKMVvijbQGmKMVvtrOyhRPFL2I_Xrb-9T_UK020vYr-vW396n-oVGBW9T9duf71_9RpHbT68TF7c_wB6_wDqNI7QaiZqhuUo2Z6CnGysbSelWxQhs9lY2mlyn20beOlCCG2jbS22s7aAQKUd3TjbWQtLA17us93TnbRspYobbKzspcpRspYENtAGKX2-ysFaEEwK3GKNtZxUotmdoNJugNKYNGKJUWxuUxWNtONlGyqZG-2jbTjZRsq2Qb7KNlONlGygG-2s7aX2VnZQDfZRspxsrOyoBtsrOynGys7KFG2yjZTnZWdlLA22UbKdd3We7pYGvd1nZTru6z3dLA17ul7KP9dt_wC9T_UKU2UtZJ-uW_8Aep_qFRsqQXsZN7cdP5x_9RpAoRgHFSF8q-l3HP8AxX_1Gm5QLjnmspm2hv0HTmseHSlymOaUtLZ7q7ht4QDLM6xrk49ZiAOfDk1bMjPYaCp8albjTZY7k29q0N7IMhvQi0205xg4HWm5s7kGMNaz5kBKZib1wOuOOceyikGhltHFbbRjHNPBY3TXDwLaXBnQZaMRMWUeZGMik-4l2lu6k2hQ5bacBScA-4nxpYG2zyrPd808NlchC7W04RX7ssY2wH_Zzjr7OtLDTrlYw7wSglgqoUYO2QTkDHTAPNRyCRH93R3ZPQGpWLTL152hjtbkzry0QhYuB7VxmtWtpjb3cpG1LYqJQ3qkFm2gY99ZzmspF7D5VjbUnNp12kgjELynuUuD3Sl8I6hgTgccGkorG6ljV4rW4dGICssTMGJ6AEDmtJoy0MCtY209FpcETEW8xEP86RG38n_7uOPjR6Hcd3HIbabu5ASjd22GxycHHOB5Vq0Shlso2U9W1nYgLBKxKhxhCcqeh9x8DW4sLs3Po_olx6Rjd3XdNvx57cZxSyUxhso2U-js7iVQ0VtO6khQVjYgknAHA65B49lJTwvA7pNG8bp9JHUqR7waWKG-yjZU3qGg3dhGXdreXY6RyLBJvaNnXcqsMZ5GcYyOMUyeyuUl7p7adZNwTY0bBtx6DGM5PgPGopJlpjHZRsp7FaXExxDbzyHBb1I2bgcE8DoD1raGxnljMixOIgrN3jKQhwCcA4xnAP2UtEpjDZRtp89lcoIy9rOokO1N0TDefIccn3Uxl0zUf05aWZikt7q5kEcaTgxggnAJ3Dp15rGJirDWZmowcnRgrgcCoyfUu7lCBAxJxx199S2uI1hpSXiNb31rLGzrNaSd5HhWCtk4BGCyjkDqPOqtplleTXU0rWN1JDFgysIW2IDyCxxgDBBGfA15cbHtpRex1hh7bonLO4aZtrpg84p9spz-jZ7ZJgIJHSBiryIjMi4OD62OB762FtPtgItpyJziIiNv5T_28et8K9OG6W7sxKNvZDXZRsp8bG5VZma1uAsJxKTEwEZ8m44-NZgs5Z7e6miUFbdVdxnnBYKCB48kfbW8yM0MdnspOVxGyg45qb1TRr3TJLyO6RBJavFG4Vt2Wl-gFx9InB6eRqpaq9zb3YiNnci53iPu3iYNvPKrjHU4OB1NccXHjCN2bjhtseC4XI6nz4xiloZo5fonnOKr1pFcXkjXDLI9uXVQmDlt2RhRjnBXBx5VK2Ol3UWrR28VreLJINwgML79vmFxnHtrzw8ty3rY6PBSJTu6zspy8TRyPHIrJIh2srDBB8iDWNte1StHFqhAJS1mn65b8f8AET_UK220tZr-twf3i_6hRsCV5ERe3HOD3jf6jSTxMByBipW5j3Xc-R_xG_zNaiJPJa5eyjpkIoR-zinWmyR2eqWVy4YpDPHKwXqQrAnH2U5ljP8ARxzSDRZ6g5rSnZHGiUv9YVhqncXl1K93GiK_o625QCYPg7DyMDr51K2GuxX2s3zyTXaCWe7ukcsNyI1s6YGTw2cceyqp3XPFHdYOCKjSaFsnhrFq8EdobjUIo4ktwLtFHeyGIucEbuB_KcescbBnPg-h7TWLFRd2k3dzzSLdpHg5t97yRIvtV3JPQeqKqyptPAB99bhGbn1eKy0ipsnT2kE1nD3paO4BxOogVxKDP3pIcsCp56YPIHPPCdp2gEd3eXEj3TSzXk1yj5ywDQyovOeCDIPhmoYw8ZJGaSZMGqkmRtouHZq7FxZQkPI89tHbR_tMJEllcSH11JQBgOTjPUdKr1nqD6UNZhhmWS4ndESdEV0bbISWwwIweo4qNZAeoB94o21VEjkWUdoreaeKS4e8heOS1nL26qDK0UQRkIBAAJGQegyeKaTa8XtJYojcQh9OktAkbYRXecycc_RwcZ61C7aNtXKiZmWebtNDJDciLvIJi7SLI1uspkLQJGwOWGDlTzzwx4zScfaK2imE6-lsZntu8t2A7uFI12OEOedykgcDAJBzVc20baZEMzLWvau1jltnhiuY2guNisMZFrGr9yvX6QL5PhwKZaVr0MFhDbXPemQWohadoxMVZZ2kHBYZBB8xggVHaNYx32oLFM7RwqkksjIAW2Ihc4B8SBge-tpreC5tri6sYZLeG37sOk0veMxdiAQQo8ualR4Lb5HsuvyTXVhJ6TPH3L3LysIVKsZXYk93uAOQ2CM8c4qK1o2NzNLLYLOm9sbJB6oXYBkEsTy271STgY5NSz9mpIZFW4u4lU3nohZI3cAhwhJIGF65AOCRWh7Plp3jgvYGLzSw2yurK07R_SxxhfLnGT0onFcBpvkWl7SFtdW4WPZYhwxWKNUkJ7oxhyR9JlySMn7KzB2lttNtgiNdTG1th6NcSgBvSVdyjkZOFUSMByTwKRHZ3-T3yanZx4EDOCshKd8uY-i89ecdKa6t2P1KTRp7gsiGEu2zDHcI5NjENjbnIOBnJANZk4pbGldjqbt3p8dxOkEM9pb4hlilMCzFHVnkf1dw4LyMQc_0VyPKLXtlaXUtsjTykJp9zb7QPVMkvencADgD-UXNaX3ZCS1ttUzfW0p08lJRFHI-1xuyOF-jlfpngE4zVR7WWKaP2hli00N3eyOVN5HDNErMOPax-GPfXheJi4azPc75YvZHquk69FqHaGU95OUmuYZoxIeiRwurKATwxBwoBHvFVjtZeR6J2w7O6hcSO8Nr3BEUaEyRIhICMpZstjnlucjp0qsaPOxgHLtK_O1uRg-Xj--jtREZLFAiMzAj6OBg5z4e6us558NtGEqlQ41rtTps2ljTprjUJknsprWS9SyjjK5ljkTEKsFIBjbJyCd__KK2btJp14t-m--MBjX0W3khVWjkW3iiEhkV-MmMbkIYEAdDyPPO9admaRdyD34BGOB8a3tbrLFXAGW6DyFfNzOWyPTVI9ave3ltNexyo14tv32oSGP9sXCkJxnBI4z--tJflCSe5slgkns_XjM0QsEcR7ITGQG3-upBIxhfVPmBXne_0hA3qjapGQev-xT5bZkRJn4BB2sx5yR091azzuiUi9fOnS5or63T0k2xybaBk5jcqgLiTvCQpKnKMG4AGfGpDs3qljp-sG5ZJp9OdXUoyhXdDyhIzgHcqEjPnXkU9w1qXDqU38jd4c_9vxqXXtCYlhWNgcn1zt6nHFejC8nInnexzlh5uC_X_bmztYdKF4lybmGaVruWPGXBV0jZM_0lErkZxyB8K_D29s7RDHbG-nktLRfQbmcAP6WskhSRhk4RVmcDkn1V-FP743oZlwZgMtu8c-w8HjNRyoEuiAAfU9Xngk8c1wxPIWJI3HDaR6cnbbTodaiuLW0vIbOCe0uI4xtyhR5pJjjPjJOdvsHhT7sZrUV9pwgka5uLi0tTG653ySM1yJUK-urFVwd3rDGR1ryyJW3tGD0TD8YqRsrNXuI2cbAFBUlVIHh40UnKWw45LlcXbNr2pRteQ3bi4cvLCMJISSSR7Mnpz7zT1cFQRjmqaUig7p4nRmzjKjHOT-RqQm1NVVTKemTkeGP9mvZheRk2kcpYd7ljOAM58cUrZFTdwYYHEiH8RVQGqpsBMrbWbBGemep-zP20-0nVUlvbTvcbe9Qquc7iSMH3Yqvzo3RPQW66hb0uby7xv8zQiYBBAqRu4sXM3P8ATb_M02dfMfhW8-Y1koSOxcADJoKn9kUqOn0V4pNwWOSaIMbSRgk560kIyPCnTLjoa1IPnXWLOTQ2K-yg047vJrXZzW00ZoQOa1IJpwV9lZxkcgVbJQ220bakrG2SZpVZVztyrMTtX2nkfbzjyNLfo2FQe8mb1m2oVK9D0Y-ymdDKQ22jbU29rZyyFIiVKYDFTgYIHPrHnHOcY6isppdoSp9M3ZGdq4yeM4_wkfHIpnJlIPbRtqUWC0S52uzvEISzNkA7tuRgezy8ac_oy2XczTBgAABHIPXOzwz05q5xlIiyuJrK7jubV9k0ZypwD4YIIPBBBIIPUGnaapKjS93a2CRSqqvCtuO7JU7lbbnqD4_DpThrG2ALtK20AnKsuCcH1R454HPtobT7dLaWXvg2ASi7xz6pI6eII_GpmTLTEW1m8Z7qQCBJ7qTvJZkiAdjvD4z5bgDjHhWf01eBpGVLVHZ3kRlhAMTOMO0f7JPj7eRinMdhaTQRHftYIpbZnJO0ZHOQepPH7JFJjT4O73CRmJXcq5UM5weAPDw86ilFlqSGb6hdOsisUxIIQcL_AFQwn4dfOt7rVLm6jYXMdtKxdnWRoQXj3PvIVvAbiTjwycdaeXVhZxGR1ndkG8hUIOcZwufPgefWsjTbZpVRJfV4y5cc8sDj7BxTMiUxgmp3KXN3cqtv6VcM7GYxAshcENt8s7jxzVY1qza7lluGjjUhBGiIgC-qoGceZwOfjVrVLYXVxEgjnaJI-GfA5I3HOR4c-yibT7GciOO7YxyA5fgAKTjrjqM8j39K5Yjw5KmdIqSPKZRNZypJaApG-4jPQEc-rj4-_mn82rMbAtIIy5IyEBHI5Hw91WHXtFsvRu-NzLsBDlIgCFIX6HPAJxx78Y4qF0XTLR3jF47YVxGyd4FOzcMIR1zgk56Ae7j57U4Oo8M77SVsosd2RPMSd2ST-81nvEkeNhgoBuxjOD1xTy2tLBrYSTGaGWRyCUlUBSZVAGD4BTnnOfZQumWNleWKGc3EVzxLIOAoIHrIfYWPB_Z684HPIkr-myT0mGBd3pLFd67t2ecHnn7BS9q0t6iW0RJSNvpqeAQOntOM9KUg0iz1Bo3ju3WJnYbVIHClhjPXccBseTezNP7U2WmXEcNu4ZlXLybgVOBjgD3fjW8PESdPYODe6Gg0cSW5EzPvKgc9Qff7sVBzRi2YwzR7zKA0UuMEkezz5q7NeJcejqmGcIDkY65x-AFVztEgEUChCQjBt2fWJ5-zNZxoxSuIhd0yOSIoEMkWAv8AST6Q9uPf4Ui4dLpGAfYRjJGM-eMU7t-79KQwRuZc4MhbIYnypbG5Wdtnesx5PiPdXznKnZ6FH4KWqQhi8hYY5ZiMAg-VI3rpZNMo5ZDnIJG4E_7_AApaxmR4zDdOoUqQW5yPdj3VDahcMt1cxSAMQwAI8QPP8Oa1hylwZlFVY6W6Pf5BygJC8ePX4daXuZvSIB3IyEC7mI4HPiM8c1Dos00IbaGAyDtHFPYjEkI7w_SHUDBHHXr_ANjW3iOPBlQsUs4pmkzIqtD9ElD15qa0izKanbxy-qquhVuoI3eOPf1FRtpqEce7ulbvCOVH0TxnOKcWWtGS_tF4AM6FDjx3DNcW5SfB2ioJHrN9qtqLmfa_essjAiMZxyaYPqkrPiK3Xb5u-Dj3AGk7sqLqf6P843U-00kzEYwfbwMZr2PyZvjYiwY_TF5q8scgRY41YDJy278qQGuzh9vdxHAz41CanJqSXcnc6XJcRnkSLKq5-BpoLjVAS50S4O7HSaPjHxr3YePDIs0tzzzwnbpFn_TshbaYY84z1NZ_TTE4MKefU1VjeX4be2i3uCMYDIf31n0y9B3foTUOmOFU_vrp78P_AJIz6ZdFp_TJzjuRnGfpVkasN20w84z9Kqul_dbtzaNqIA9U5jXx-NSdurTFXMUinBBTgn7QcfjV1EFvZPQ38Jb9Kpu2902cZ61kapHuK92-cZ603itOjPEqnHVjuOPd0_zoNmMHaV3Hn1l6fEYrk_Oima0tocfpOJmIKPkc-FA1KAlhtfIPPAqPltHVw-1lGCCR6w9nTn8KYSzBLgbUldT6rOiEqPHJPh8a7R8qEuGc347XwsA1K3bPD8HH0ehoGo2zLn18f-2qy1_bozmPdK2P6J9XPtbp--kLbVcySG5jEUZ5BjywHv8AH41h-ZBOi6VtWW79JWuzdubbjOdtB1G0HJf2fRNVW51K1s1VpZgsUnKtyRnxHFNV1zTCpU3kWzoMkj4V3WKnumc_TRdf0haZH8oAT5qa2F7alsCQFj0AByapQ1nTSuGvoMeDbxz_AN6muyesac-swgXds1xscQgSDJfHG324zj21uDzyUb5MTgoRcq4LiBdSW4QadOARj1omGK1_Rl5_ZJPw_OndnqFjtkF4zBsjBUZOPZ7c-dLDUdLFweH7jZ4kls7vh1GPd76-nh_iI4VpSb_gfMn-UeJTpL-JHjTLz-ySfh-dIXdhfxxFkspWI5wF3ce4GpgX-kAqC07ZHrN02n2D86RvNQse7QWZffvO4ufDwFdH-NUtra_gY_xHLvS_meZXTXl3PI3d92HwpAHPXjNIPZ3cUgXfIB630SfWOMgkHP8As1fdUYrfs6xoZXRTKDwS2OfjjGaZSTQvxPE6Ec5xuHTHhX5ieFgxnKDlumfei5ygp5dmiitc3cNwwlVGhRg-CnBZfL8R8KZSXDX17JcJvjuQDnGOvPH2eHSvQTpttfepG8RUg7Vzz9nWojXLfSrGImVhHMgG11AyWA_7VlxyK3LYqTl8PMUs3vLlYYwS8jBOnhSvcLADChLluCV5J56VJaZZvqetiFNsPfyZDDgLwc4-3ivQfm7pNg28BmkjBZ1jG4jjx8vjXNLNH9iOrVMpNrbCKASvACpGcsOox_3pLbKyNIq4BUuCRyw5GB9lTmpX0Uksqi1JjOHAyN20eHHHNQrXKTzEsHRCc7MY6c14Hy2tzt0a2l_JHKn8qm7oM8Y8fd1pTUZY5E3zNOJskFWXr7c-NM7uFJQxiRUBIwc859lIQ3bx93DdgyRlio_ajPn7uelbVyM1THYumsz3ilSYwdi_RAz44pjHqQ9K3MQgI248KbXQ7tspyMjK55H500ePCM2QSj4z55J_KukcNPkjb-EzJOZI_VILbtwBH-803uSJrstyMqGBJ9g8aQin3MoUdBjg4yPKl1jVmYuwVwRweeh5FRLKR7i1pPJFINiEhiCUA8Mj8qdCwkmheVlIRzjaRyCP94pO2ngt3VzgN-yB1GfGpNNRRjMEXLsuN2OmBjge-uMm72NpL6yPitDbM29H2qeu3xAqSso1XULOaD1o3ljBRh_zD7K0iZUkPqsqkD6QPGOh59pJp9Y2Zf0YxertlTKgbv6Q8au2ZbmklWxfbw_rM_rD-cbjn9o0jwf2SKXuhi4mLEbTK_JHGNxpmZ4lc91ulbODsHB-PSrR0FQCc4GQOKfWd-baIqsUDDPLumOvmc4qLaSVshkWIZ67tzfuH-dYMQK5lJlkB4DAPt-B4rUXl3Rlq9mKXN13ty7ICQ5yBCuVU-w9PxpMBthLuFDEYGdxH7v86WZxgllOFOOCOPdW2Y-Dhsdeoo7KIhUYndukK9N5z9g6UsioyAgDIPupMksMKjBgcZJGK1kurazXM7CMDgesCfwoBch8H1gBikZp0hG-V0CEYXNQt52glkYi0T1fB2bAPx8fgKj3juL-Yyz-ux65GF-zx-NP3hElf66QdliA3H86W9Uez_8Amaiz6VeMTK7ybuoOQn2ePx-ypK200AgyZY-3wqWtbB3A2JgeZ6U3IQcOmrgGU7sDgHgClJ9MRl9UYPgRVnk05FtpVI7x2RlA8ORTfRtMENtLFNCItzhhjHljPFKFlLnspIGZkLKT1ZP3jxqUstZiRSL6FdoH01GR8fEfH7anrzS2AJUb19nWoO600HLJ6rDxFRoo_e709IO9xbsp5wQM_wC_bURqGpwIwWK2tiByCYwSfcMZ_wAh7aYS20luxK5Qk5JUZB94_eMVrbSQxyfysO3c2N6ncpPtJ6fGmxHYrF2m1q3kLPd3BjPQSkN9pxkfjVn03tQLx0jNzLFK3QNjDe4-NMm00XFuWiCygcELyR8KgbvSWjYtbkqc5K44rr7Zv9TOSw4dIv8AJdT7T-suD4c5_dWsN3dwzLIlxMXU555H2eVUTTtVurCVYpt7ByFVHJIJ9h_P7auVtL3sKyOjxkno4wRU9uIv1M2sPDf6USt9eQXVuD6P3U4Gcqwx8aiwuOWbBpOaZYiVC-t4U2a4l5AwoJ_ojmsSlmdmkq2HzdztzIoZR5r0qndqNPaS5iIfdEGXYM7snPjUpf6hFbRs80hJGBtBy2fLFVbVdYlvJFgjiaNQx3YOS3x8KlCUkuRWWU6ZfekwYRVZmVsZxzg4-zipqLtBFeWFxDFNsP8ARiCHdjxJ8z4Z-NV-SCR9CDzAshd0IxnkLnP41AyW9xZbXiJKryOcFfcfCuyvLls5zpuy0QSwyrhoXct0PkOf31E6tG9rNA0nAfDA56-2l9O1F4ArTR72bIXdjPIPJx165zSGtamt1b26tbhZVBRiOOB0P4mvLFNSrlEfF2Z1e3kQRqM9M5waiNRfbkOpB689STVhtrhprPu9wG3jJ5weKaazpvfWsUsUkbS7fXVWzjGSW_ywK64DcnT-EmyvrcFwwJwTnHspSSTc-Aq8nxHjTaHKEKwxml4VJuV-yvS0kS9jVnMczbcY8ST1pRO8kJ2vnIzgedKXNsIZH9IIXaR6p601aeMDK5Bqc8E4e5IGAQODJuIwCc-2n8brGqq_Hqn1j_R_3xTWCRJ7RHI3Kpww8qlF9FktHBxuUBuc4YeGfLwrzye9M6qvgRyujShJASAPUJ8OPCpbQbgObd8FTHOmSuB_SHXz5qu29uqhyZCCE2HI64qa0t44Y4o2_nDcxgZ6n1hWmouKJFu3YrfdoLqbVrxWVGZZX9VohjG4-HQ1mLXb1BhY4MZ_qF493FNo4IbXVr-S4kVV7x8bm_5zT-1k0-aNW79FJGSM9KST5-G4tcGF1-__AGIPP-ZWth2h1BSSBHk9f5MUviwH_qE_xVkDT_7Qv-Kudm6EBr18eoi_6dH6evR_Ri_6dOWFgoG6dR8aSc6dj_zKf4qW-xQ3n7RX7ADcqjzRcH8KLFP0kzzevI27BaTnn2CtZlsnBEc4Y-QOad6PdWen2cgmuYUbvfos3rYOB06-f2VUm9kRtLkQmW4hvXRFRwoHLDJ6U6jur5RwkP8AhP50teXmmpdSTLdI8JwBIp4JwPsrRdX0nxvIh_8AKplotikWp38Zz3Nux8Mqfzp0O0OqD_hW_wDhP503i1HTJjiK6R2AzhSTSZ1TSgf_ADkX-KlPsDmbXtQlUrLbWrr5FT-dJxa3eQsWis7RGxjKqfzpOPUtMkYKl3GxPAAbJok1HS0cq91GpBwQWwalMDr5y6l_Z7f7D-dN7jW72f6VrbhvMbvzpIalpRbAu4yfINW0uo6ZE5WS6RHHUMcEVaYGsl_dv9K3h_Gm8CTT3BBRYztJyuaeHVNKPS7j_wAVKR3tjDcKzzrGrKcF8jPu4plb2JZCXl0dPlSJw8ayZyyHC_EZBH_xIproMMz9r7aKS4n7qTLd2ZGbHB656-dadq7uG-FtLayodjuuMnPsOK37KzD5wWrFjuUbWcnA6dMnjFdacTjeaVFs1u3ismgY3sVtIr70eTIDY6rx76Tl7SaesY7y6QtjBERLfYcVD9tUvbi4eK6bdAkjd1kYOPeKqn6N2szOSEChj7OK169rZfZ8RcpO1lluCwxTSOTgchcnp7aZz69NdLtjX0aM53k-sSPZ0qBsLeF0MsBLbVJB28VGTXzPJuOSSOc1l4bukZliMlry9KjCq3UZY-J6DNMnu5xDtD8E4z7KQS4Lht2MKOhppPJ63jtB8PGrDCXDRzLzpKq0FvcCR0lUqPE4VsAN7-TUn2ptrW2hjkMsjyvyWkwcjzPH4eOKgo5y-hpLaqdqpscEk4Bzg59n5Ur2nvnutAgup7MBJdqRssxJUrkcjHTg-NSUG6SO9pIg7m7ljZkTMeRjeOvvyKa3N00yMSMlQDgU3juw20SAYGePCsNII3AVwQOjVqMK-HJuzeC9liUlB6xB5PUdPyq0xrby6d3neRtKy7gwHQ4HGR0OaqEhGFCKDKf2RVn0O0ij09N6IZnyzlifV44x4Vz8hqCUkWD3plYjctdwpyQGxx1Iz_nT9EEF2G2Eoj856nkZ_CtbiBbbV125WP6Wc5p1IyvOkcILrgFlbjkDnnrXoUk0mipbFk1HRreW3km-jH3ZIAXkDg_bVaWwsAOWunHkIcf5mrpbur2IVQ42qE5PkKjyq4xgVhM24orFjDAly6PFcGN16cA--paWPuoYnCkugBYEAceXup8LRC6ynGAMED20nayLc6cQUx3YKs3mfd8BWJb7hKhlcRvES8aMpIDcvweKe6WqXN5C-wB1mRSm7odw_wB5pzbwRywxByXOMBT4YprpzJH2jSMYULcojZ4yMjH7q4rM90itUPO2mmGC8mMoHeF5GTADf0jTLsjZ7y5kC94ynOB0OfKrP2-AfUinqHIfA3c53HwFN-xNvuupoZg2Y0B6-JNei_8ATJX-YrY-T9yfX1BiP7v_AL1uPk9BP_1BwP7r_vXqgsYv2W_x1uLKH9g_46ntn2MkOijdoezS6va20InMIh8Qmd3GPOoE_J9GP_XS_wDTH516yLOH-r__AGoNpD_VD7akZyiqTK4xbto820bs0uj-kMJmm7wAesuMYqN1uCUQb4HIbvM4xkDwr03VraJLKVkjVWAHI99ULUF3QSRxlN5bLAnnrx08KsJNythpZaRvDpkeqaW1tLIwVwuWX6Q6HGT199Ix9gLHHM9yfblfyqf7MW7zwYUAEEZJJ4GKtlvZxxgFirt7ameSbSZXFPkpmg9i4NMuXubczyFkKYfGMHHs9lNP4uLXJJe7J8yV_KvSgAOm34UYH_LRTld2TKuKPPdP7A29lewXMTXJaJgwViuCfbxWb_sFb3t3NcSG4DSsXIBXAJ-Feg8f8tY481pnld2MqqqPOovk9to5VcNc5UgjJXw-FKaz2Fh1O9lu5jcI7gZCEY4GPKvQOPNfsoIHmPspnlzYyrijys9gbBSP5a5BHtH5U91SDbeRBR6pjYE4JxyOeKv1xbRTZ3YDeYHNVftJCsT2sbkFQJMnHXOOKmeTkrZVFJbHnd1byJpYEkj_AM_hXbkdD4eFWPs52egdYLybVIFUjmPO39_BpjdQoLfuwqurPuIwSNuOc-Qp1pWsDT7cokcLRF8IWUEY_Opi4q4RlSUVVbjHtDq00FxLZ7YZEgkYIz5ZseGSCP8AKsWhF7aoWKqZYwCR0XjFbahdWc19czy2Eb-kP3g_lWG3C4I48-tRy7u6UxRgJH0w3TjGK6-xZVRy4bZZNN0O1sNNd_0xbStsJCdM-4Z_dVCv44zcTNCdo3ZC5yMVdYNXMmirEiKe7TYGwCWP-yOaqWqW7CISbCGHXjGKmHiOUtxKq2I0SGMkEkZ8jStusYl3kkYHq7vOtYjyhUAtnnPTFZOO8JI4zywP0a7s5lqsJkTR-5ikEbFWD8dQD_nT7tFd2jdn7VYpB6K4Ox-7ONwY-GM-Jpnpto13ocZR1UoHGJMAAc559oOaba7b7NBs7QXFq7xsxKpOjAesccg-RrNcHS7RVpXG8FB6meoHWhzlgVJPPxrd0McKq3Xk8HIpumdwwa68nMXScx3Cy43YPQ1Ki_khkDROGH7OOKie5dwCis2TzgVeexnZO21Ky7-_meIkkhAQDjoM5FccVQq2WKcnsVy9la5uw7Nvyq4I4x7KmYXijmllZQpKHbnBB49bPlVqm7D2KbvRbmUMQcBip5_CqbNG0O6Nh0JV_EoRwc-z3VwzpKkdU3Dks-nTI57vcpYgcfCmGT9lV1Ly4spvUUHcdwJHWpu3neSFXPBIycVtb7mlKxwsjKhU-qD19tMNHY5u42PAcj8TTwetIoPU9aT0SBX7RXsMhwmSxX7Pzq_GX6iR01cTDxA4HHSo66i29sJY1GAZoH_FanNIC-lKNuVIP4GrDbdkbaXXl1S-nYo_chYk45BHJP2UhG3SE2ki5dpvkf7Y39-8ltZWEkZHBe5UHlifL21jsv8AI92wsrid7qxs4wygDF4rZ591dRr0FFd_TGqOPsfJ4CPky7S_2e0-8Cs_xZdpf7PafeBXvtFT0RHtkeBH5M-0h_4Fp8ZxR_Fl2l_s9n_1xXvtFPREe2Rzxf8AyW9qJrWSOO3tNzDj9YAqpyfIr23LuFs7MKxPK3yp9vq811nRRYMU7Htkcz9nfki7W2MUgube13Mc_wDmlb91TY-TPtIP-Dbf9dfyr32inoiPbI8F_i07Sf1Nt94X8qP4tO0n9TbfeF_KveqKeiI9jPBf4tO0n9Tb_eB-VH8WnaT-pt_vA_KveqKeiI9jPBP4tO0n9Tb_AHkflQfk07Sf1Ft95H5V73RT0RHtZ4Cfky7S_wBRb_eRVc7UfI72v1ARm1trMsoYZN0BjOMeHsrqGinoiPbI5Aj-Q7t1DFGEsbGRyfXzfADHiOlNv4ge2Tu7NpunruPG29Xj4YrsiisaWHJHNs4u1L-D929kZe6tNOlUHgm8VTjy6Ugv8H_5QmeMyWGnbA4LL6cvP4V2xRXRYMUqM2cap8hHb-OYmKx05Y1PqD01emPHikbr5Au301mUNjp7Sefpy_HwrtCisrx4LcuZnDA_g5fKIuQlpp4B8r1K1_8ADh8oYORZ6eD5-mpXdNFdqRk480z5B-3VvoMltJb2KyEsQq3a5JOOrY6eyoe5_g79vJIMR2Ngr5HBvlOB9ldt0VMqNZvhwyP4Ofyh92VNnp-D_wDnJ-Vax_wb_lCDr-qaeBnk-mrXdFFWkZOLov4PnbyONu7tdOR_pDF6OD9n41Yuy3yJ9sLaKUarYafuOcbbtTk8eyur6K5eiLNKTTtHNVx8jGutEwjsrPdg4_WB5e6qLL8gPbtgu2xsARjn05fLx4rs-ipp4Fc2-Ti0_wAH7t7Jb7JLPTyVzt_XV49vSncfyDdu44VRbSwJA8b1fyrseitLBiiKTRxdL8hHyjFvVs9Oxnr6cox7uKdab8hHb2LU5LiazsFV48E-mgndgeyux6KvqiM7uzkFPkR7fC5jUWtkkC-sXW8QtnHlj2-dTWlfJf8AKHaahaNJY6e9tHICxN6pbGeccfhXUlYb6J91Z9EbsvskZXoKKF6CiuxgKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKZXyXhkjazkRQM7lcAg8j49M0lv1QRRkxWpk9beoY4HPq4PuoCSNV8wavHPL6Ozd20pZTJICxyfEHI2AZGBg9PLJfF9U3RKI7bkEu_OBz4c56ZpN21kp6qWinHmc_wC_zoBrYwa0txDHNKEtUCBiGVmOFOeSM8nGfwqwCosS6qIgGhtjKWA4J2gYOc8-ePtrdH1Mh98dspCErgk7m8PHgedASNFRYfV2b-btEXd-0ScUppct_LuN9DHEPADrnJ9pzxjnigJCiiigCiiigCiiigCiiigCiiigCiiigCiiigCsN9E-6s1hvon3UBlegooXoKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKA1d1RGZ2CqoySTgAVRNY-U3SbOZorKKa-KnBdCFT4E9fsqP8All1qWCC20m3coLhTLPjxQHAX3E5J91U3TeyM13ZRzyyyxmSA3AVLfeNvgM7h6x649o5r4_medirEeD463XLP0n438X47wV5HmPZ8L-25f9J-U_SrqZY763nstxwHYh0HvI5H2VfopEljWSJ1eNgGVlOQR5g14Ld9jp4rYyQyzO_cmcK9tsBAzlc7jhsA8VaPkZ1uV2uNHmctGid_Bk_RGcMo9nIP21PE87G9iwvIXPDL-R_F-P6Xj-G_9vK_vueqUUUV9k_NBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBWG-ifdWaw30T7qAyvQUUL0FFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAeP_AC0WbLren3bhu4lh7okeBViT8cNUc2q6a8-oSG40vE0Jhi3adIWC5UKHOORtXHvxXrvaTRLXX9LksrwEKfWR1-kjDowrxnWPk_17T5mENqb2HPqyQEHI9qnkfjX5_wA7x8XCxZYmHG1L_r-R-v8AxXmePj4EcHGnllHb4rV39F11XT420ySK40gS2oIY_o6Tj1y3q8ccH7c0_wDkltFm7XX11ahxZwRuqFhzhm9UH24B-yofSuwWv6hMqvZmziz60lwQuPh1Neydl9Atez2mLZ2mWOd0krD1pG8z-4eFTwsDFxcSM8SNKP7_AP01-U8vx_HwJYWFPNKW3x0rv4TFFFFfoT8cFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFYb6J91ZrDfRPuoD_2Q==",
    "width": 320,
    "height": 240,
    "page_rect": {
      "left": 0,
      "top": 0,
      "width": 1024,
      "height": 768
    }
  }
};


