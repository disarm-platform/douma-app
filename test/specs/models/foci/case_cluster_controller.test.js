import test from 'ava'
import {CaseClustersController} from "../../../../src/apps/foci/lib/models/case_clusters/controller"


test('case cluster controller exists', t => {
  const case_controller = new CaseClustersController()
  t.true(case_controller instanceof CaseClustersController)
})


test('case cluster controller converts cases to fc', t => {
  const case_controller = new CaseClustersController()
  const cases = [
    {
      "id": "2949c6b9-b388-43aa-9a5b-2ea2ea899c00",
      "cases": "94",
      "status": "investigated",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              31.43463134765625,
              -25.89134949832312
            ],
            [
              31.451110839843746,
              -25.869109390999295
            ],
            [
              31.43463134765625,
              -25.84439325019513
            ],
            [
              31.37008666992187,
              -25.818435743058643
            ],
            [
              31.335754394531254,
              -25.803600326491388
            ],
            [
              31.309661865234375,
              -25.79618192160457
            ],
            [
              31.26983642578125,
              -25.803600326491388
            ],
            [
              31.24923706054687,
              -25.835741380387113
            ],
            [
              31.208038330078125,
              -25.857987767091533
            ],
            [
              31.169586181640625,
              -25.902467981098617
            ],
            [
              31.180572509765625,
              -25.935817142040115
            ],
            [
              31.25747680664062,
              -25.933347157371625
            ],
            [
              31.33026123046875,
              -25.93458215617875
            ],
            [
              31.43463134765625,
              -25.89134949832312
            ]
          ]
        ]
      }
    },
    {
      "id": "5ee3762d-1f5a-47db-adae-68bbd5509ef1",
      "cases": "54",
      "status": "not investigated",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              31.309661865234375,
              -26.11660246600098
            ],
            [
              31.244430541992188,
              -26.117835537578326
            ],
            [
              31.20323181152344,
              -26.132631381562252
            ],
            [
              31.1846923828125,
              -26.176391443277474
            ],
            [
              31.18194580078125,
              -26.206582472568016
            ],
            [
              31.20391845703125,
              -26.236149768192117
            ],
            [
              31.245117187499996,
              -26.23430203240673
            ],
            [
              31.29730224609375,
              -26.231838339013287
            ],
            [
              31.32339477539062,
              -26.207814593239636
            ],
            [
              31.332321166992188,
              -26.164682612764572
            ],
            [
              31.328887939453125,
              -26.11721900341594
            ],
            [
              31.309661865234375,
              -26.11660246600098
            ]
          ]
        ]
      }
    }
  ]

  const actual = case_controller.convert_case_clusters_to_fc(cases)

  const expected = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "id": "2949c6b9-b388-43aa-9a5b-2ea2ea899c00",
          "cases": "94",
          "status": "investigated",
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                31.43463134765625,
                -25.89134949832312
              ],
              [
                31.451110839843746,
                -25.869109390999295
              ],
              [
                31.43463134765625,
                -25.84439325019513
              ],
              [
                31.37008666992187,
                -25.818435743058643
              ],
              [
                31.335754394531254,
                -25.803600326491388
              ],
              [
                31.309661865234375,
                -25.79618192160457
              ],
              [
                31.26983642578125,
                -25.803600326491388
              ],
              [
                31.24923706054687,
                -25.835741380387113
              ],
              [
                31.208038330078125,
                -25.857987767091533
              ],
              [
                31.169586181640625,
                -25.902467981098617
              ],
              [
                31.180572509765625,
                -25.935817142040115
              ],
              [
                31.25747680664062,
                -25.933347157371625
              ],
              [
                31.33026123046875,
                -25.93458215617875
              ],
              [
                31.43463134765625,
                -25.89134949832312
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "5ee3762d-1f5a-47db-adae-68bbd5509ef1",
          "cases": "54",
          "status": "not investigated",
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                31.309661865234375,
                -26.11660246600098
              ],
              [
                31.244430541992188,
                -26.117835537578326
              ],
              [
                31.20323181152344,
                -26.132631381562252
              ],
              [
                31.1846923828125,
                -26.176391443277474
              ],
              [
                31.18194580078125,
                -26.206582472568016
              ],
              [
                31.20391845703125,
                -26.236149768192117
              ],
              [
                31.245117187499996,
                -26.23430203240673
              ],
              [
                31.29730224609375,
                -26.231838339013287
              ],
              [
                31.32339477539062,
                -26.207814593239636
              ],
              [
                31.332321166992188,
                -26.164682612764572
              ],
              [
                31.328887939453125,
                -26.11721900341594
              ],
              [
                31.309661865234375,
                -26.11660246600098
              ]
            ]
          ]
        }
      }
    ]
  }

  t.deepEqual(actual, expected)
})