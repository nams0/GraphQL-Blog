import { createRoot } from "react-dom/client"

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"
import App from "./App.jsx"

import theme from "./mui/theme.js"
import { ThemeProvider } from "@mui/material"

import "./styles/fonts.css"
import "./styles/index.css"

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_ENDPOINT,
  }),
  cache: new InMemoryCache(),
})

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  //</StrictMode>,
)
