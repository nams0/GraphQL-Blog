import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@apollo/client/react"
import { GET_POST_INFO } from "../../graphql/queries"
import Loader from "../shared/Loader"
import { Container, Grid, Typography, Avatar, Box } from "@mui/material"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import sanitizeHtml from "sanitize-html"
import CommentForm from "../comment/CommentForm"
import Comments from "../comment/Comments"

function BlogPage() {
  const { slug } = useParams()
  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  })
  const navigate = useNavigate()

  if (loading) return <Loader />
  if (errors) return <h3>We got an error...</h3>

  const {
    post: { title, coverPhoto, author, content },
  } = data

  console.log(data)
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          size={{ xs: 12 }}
          sx={{
            mt: 9,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            sx={{ fontWeight: 700 }}
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            sx={{
              cursor: "pointer",
              borderRadius: "50%",
              padding: "8px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                color: "primary.main",
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ mt: 6 }}>
          <img
            src={coverPhoto.url}
            alt={slug}
            style={{ width: "100%", borderRadius: 15 }}
          />
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{ mt: 7, display: "flex", alignItems: "center" }}
        >
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" sx={{ fontWeight: 700 }}>
              {author.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: "text.secondary" }}
            >
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ mt: 5 }}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(content.html),
            }}
          ></div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogPage
