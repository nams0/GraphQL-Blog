import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"

import HomePage from "./components/home/HomePage"
import Layout from "./components/layout/LayoutIndex"

function App() {
  return (
    <Layout>
      <HomePage></HomePage>
    </Layout>
  )
}

export default App
