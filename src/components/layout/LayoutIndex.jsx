import Header from "./Header"
import Footer from "./Footer"

function LayoutIndex({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}

export default LayoutIndex
