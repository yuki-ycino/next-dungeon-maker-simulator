import { MapType } from "./map"

export const antHell: MapType = {
  mapType: "Ant Hell",
  height: 5,
  width: 5,
  rooms: [
    [
      {
        enable: false
      },
      {
        enable: false
      },
      {
        enable: false
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: true,
          left: false,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: false,
          left: true,
          right: true
        }
      }
    ],
    [
      {
        enable: false
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: true,
          left: false,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: false,
          left: true,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: false,
          left: true,
          right: false
        }
      },
      {
        enable: false
      }
    ],
    [
      {
        enable: true,
        routes: {
          top: false,
          bottom: false,
          left: true,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: true,
          left: true,
          right: true
        },
        shrine: true
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: false,
          left: true,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: false,
          left: true,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: false,
          left: true,
          right: true
        }
      }
    ],
    [
      {
        enable: false
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: false,
          left: false,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: false,
          left: true,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: true,
          left: true,
          right: false
        }
      },
      {
        enable: false
      }
    ],
    [
      {
        enable: false
      },
      {
        enable: false
      },
      {
        enable: false
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: false,
          left: false,
          right: true
        }
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: false,
          left: true,
          right: true
        }
      }
    ]
  ]
}
