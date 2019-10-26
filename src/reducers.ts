import { combineReducers } from "redux-starter-kit"

import { mapModule } from "./modules/map"
import { roomModalModule } from "./modules/room-modal"

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
  map: mapModule.reducer,
  roomModal: roomModalModule.reducer
})
