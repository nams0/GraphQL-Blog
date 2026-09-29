import { useQuery } from "@apollo/client/react"
import { GET_BLOGS_INFO } from "../../graphql/queries"
import Grid from "@mui/material/Grid"
import CardEL from "../shared/CardEL"
import Loader from "../shared/Loader"

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO)

  if (loading) return <Loader />
  if (errors) return <h3>We got an error...</h3>

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <CardEL {...post} height="420px" />
        </Grid>
      ))}
    </Grid>
  )
}

export default Blogs
