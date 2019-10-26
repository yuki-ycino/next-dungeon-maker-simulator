import { MapType } from "./map"

export const maze: MapType = {
  mapType: "Maze",
  height: 5,
  width: 5,
  rooms: [
    [
      {
        enable: true,
        routes: {
          top: false,
          bottom: true,
          left: false,
          right: false
        },
        shrine: true
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
          top: false,
          bottom: true,
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
          right: true
        }
      }
    ],
    [
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
          bottom: false,
          left: false,
          right: false
        },
        shrine: true
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
      }
    ],
    [
      {
        enable: true,
        routes: {
          top: true,
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
          top: true,
          bottom: true,
          left: true,
          right: true
        }
      }
    ],
    [
      {
        enable: true,
        routes: {
          top: false,
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
          bottom: false,
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
          top: false,
          bottom: false,
          left: false,
          right: true
        },
        shrine: true
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: true,
          left: true,
          right: false
        }
      }
    ],
    [
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
          top: true,
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
          top: true,
          bottom: false,
          left: true,
          right: true
        }
      }
    ]
  ]
}
