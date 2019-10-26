import { MapType } from "./map"

export const jormungand: MapType = {
  mapType: "Jormungand",
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
        enable: false
      },
      {
        enable: true,
        routes: {
          top: false,
          bottom: true,
          left: false,
          right: true
        },
        shrine: true
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
          bottom: true,
          left: true,
          right: false
        }
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: true,
          left: false,
          right: false
        }
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
        },
        shrine: true
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
        enable: true,
        routes: {
          top: true,
          bottom: true,
          left: false,
          right: false
        },
        shrine: true
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: true,
          left: false,
          right: false
        }
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: true,
          left: false,
          right: false
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
          top: true,
          bottom: false,
          left: true,
          right: false
        }
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: true,
          left: false,
          right: false
        }
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: true,
          left: false,
          right: false
        }
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
          top: true,
          bottom: false,
          left: true,
          right: false
        },
        shrine: true
      }
    ]
  ]
}
