import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import { rootReducer } from "./reducers"

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware()
  })

  return store
}

export type Store = ReturnType<typeof setupStore>
