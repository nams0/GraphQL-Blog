import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client/react"
import { GET_POST_INFO } from "../../graphql/queries"
import Loader from "../shared/Loader"

function BlogPage() {
  const { slug } = useParams()
  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  })

  if (loading) return <Loader />
  if (errors) return <h3>We got an error...</h3>

  console.log(data)
  return <div>BlogPage</div>
}

export default BlogPage
