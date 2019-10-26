import React from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { Button, ButtonToolbar } from "react-bootstrap"

import { mapModule } from "../../../modules/map"
import { MapName } from "../../../consts/map"

export const DungeonMaps: React.FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const setMapType = (mapName: MapName) => {
    dispatch(mapModule.actions.setMapType({ mapName: mapName }))
  }

  return (
    <>
      <ButtonToolbar>
        <MapButton mapName="3x3" setMapType={setMapType}>
          {t("3x3")}
        </MapButton>
        <MapButton mapName="3x4" setMapType={setMapType}>
          {t("3x4")}
        </MapButton>
        <MapButton mapName="3x5" setMapType={setMapType}>
          {t("3x5")}
        </MapButton>
        <MapButton mapName="3x6" setMapType={setMapType}>
          {t("3x6")}
        </MapButton>
        <MapButton mapName="4x4" setMapType={setMapType}>
          {t("4x4")}
        </MapButton>
        <MapButton mapName="4x5" setMapType={setMapType}>
          {t("4x5")}
        </MapButton>
        <MapButton mapName="4x6" setMapType={setMapType}>
          {t("4x6")}
        </MapButton>
        <MapButton mapName="5x4" setMapType={setMapType}>
          {t("5x4")}
        </MapButton>
        <MapButton mapName="5x5" setMapType={setMapType}>
          {t("5x5")}
        </MapButton>
        <MapButton mapName="5x6" setMapType={setMapType}>
          {t("5x6")}
        </MapButton>
      </ButtonToolbar>
      <ButtonToolbar>
        <MapButton mapName="Spiderweb" setMapType={setMapType}>
          {t("Spiderweb")}
        </MapButton>
        <MapButton mapName="Jormungand" setMapType={setMapType}>
          {t("Jormungand")}
        </MapButton>
        <MapButton mapName="Vortex" setMapType={setMapType}>
          {t("Vortex")}
        </MapButton>
        <MapButton mapName="Ant Hell" setMapType={setMapType}>
          {t("Ant Hell")}
        </MapButton>
        <MapButton mapName="Box in the box" setMapType={setMapType}>
          {t("Box in the box")}
        </MapButton>
        <MapButton mapName="Pause" setMapType={setMapType}>
          {t("Pause")}
        </MapButton>
        <MapButton mapName="Maze" setMapType={setMapType}>
          {t("Maze")}
        </MapButton>
        <MapButton mapName="Exhibition" setMapType={setMapType}>
          {t("Exhibition")}
        </MapButton>
        <MapButton mapName="Into the Abyss" setMapType={setMapType}>
          {t("Into the Abyss")}
        </MapButton>
      </ButtonToolbar>
    </>
  )
}

type ButtonProps = {
  mapName: MapName
  setMapType: (mapName: MapName) => void
}

const MapButton: React.FC<ButtonProps> = ({ mapName, setMapType, children }) => {
  return (
    <Button onClick={() => setMapType(mapName)} variant="outline-primary" className="mx-2 mb-3">
      {children}
    </Button>
  )
}
