import { useQuery } from "@apollo/client/react"
import { GET_BLOGS_INFO } from "../../graphql/queries"
import Grid from "@mui/material/Grid"
import CardEL from "../shared/CardEL"

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO)

  if (loading) {
    return <p>Loading...</p>
  }

  if (errors) {
    console.log(errors)
    return <p>Error: {errors.message}</p>
  }
  console.log(data)
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Blogs
