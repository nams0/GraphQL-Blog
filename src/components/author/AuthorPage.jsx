import { useQuery } from "@apollo/client/react"
import { useParams } from "react-router-dom"
import { GET_AUTHOR_INFO } from "../../graphql/queries"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { Avatar, Typography } from "@mui/material"
import sanitizeHtml from "sanitize-html"

import CardEL from "../shared/CardEL"
import Loader from "../shared/Loader"

function AuthorPage() {
  const { slug } = useParams()
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  })

  if (loading) return <Loader />
  if (errors) return <h3>We got an error...</h3>

  console.log(data)
  const {
    author: { name, field, avatar, description, posts },
  } = data

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ mt: 10 }}>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography
            component="h3"
            variant="h5"
            sx={{ fontWeight: 700, mt: 4 }}
          >
            {name}
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            sx={{ color: "text.secondary", mt: 2 }}
          >
            {field}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ mt: 6, textAlign: "center" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ mt: 6 }}>
          <Typography component="h3" variant="h5" sx={{ fontWeight: 700 }}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {posts.map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                  isBookmarked={post.isBookmarked}
                  id={post.id}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AuthorPage
