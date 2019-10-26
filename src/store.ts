import { configureStore, getDefaultMiddleware } from "redux-starter-kit"

import { rootReducer } from "./reducers"

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware()
  })

  return store
}

export type Store = ReturnType<typeof setupStore>
