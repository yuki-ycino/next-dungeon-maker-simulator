import { MapType } from "./map"

export const threeThree: MapType = {
  mapType: "3x3",
  height: 3,
  width: 3,
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
          right: false
        }
      }
    ]
  ]
}
