var APP_DATA = {
  "scenes": [
    {
      "id": "0-east-entrance",
      "name": "East Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2437593561440412,
          "pitch": 0.028006817542269857,
          "rotation": 0,
          "target": "1-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-elevator",
      "name": "Elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-west-entrance"
        },
        {
          "yaw": 3.0629531967644876,
          "pitch": 0.013126219835822184,
          "rotation": 0,
          "target": "0-east-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-west-entrance",
      "name": "West Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1141811246504965,
          "pitch": -0.0077424304547513145,
          "rotation": 0,
          "target": "0-east-entrance"
        },
        {
          "yaw": 2.8616661387752345,
          "pitch": 0.043986599958040884,
          "rotation": 0,
          "target": "1-elevator"
        },
        {
          "yaw": 1.190230548021658,
          "pitch": 0.00022799209222590378,
          "rotation": 0,
          "target": "3-conference"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-conference",
      "name": "Conference",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.584060145467495,
          "pitch": 0.015437905477398317,
          "rotation": 0,
          "target": "2-west-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
