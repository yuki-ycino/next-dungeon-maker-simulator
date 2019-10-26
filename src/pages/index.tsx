import React from "react"
import Head from "next/head"

import { Main } from "../components/templates/Main"
import { DungeonMaps } from "../components/organisms/DungeonMaps"
import { Map } from "../components/organisms/Map"

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Main>
        <DungeonMaps />
        <Map />
      </Main>
    </>
  )
}

export default Home
