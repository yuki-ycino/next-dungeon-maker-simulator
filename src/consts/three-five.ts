import { MapType } from "./map"

export const threeFive: MapType = {
  mapType: "3x5",
  height: 3,
  width: 5,
  rooms: [
    [
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
      },
      {
        enable: true,
        routes: {
          top: false,
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
          bottom: true,
          left: false,
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
      },
      {
        enable: true,
        routes: {
          top: true,
          bottom: true,
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
          top: true,
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
          top: true,
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
      }
    ]
  ]
}
