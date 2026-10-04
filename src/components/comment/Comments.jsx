import { useQuery } from "@apollo/client/react"
import { GET_POST_COMMENTS } from "../../graphql/queries"
import Loader from "../shared/Loader"
import { Grid, Typography, Box, Avatar } from "@mui/material"

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  })

  if (loading) return <Loader />

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid size={{ xs: 12 }} sx={{ m: 2 }}>
        <Typography
          component="p"
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            size={{ xs: 12 }}
            sx={{ mt: 2, p: 2, border: "1px silver solid", borderRadius: 1 }}
            key={comment.id}
          >
            <Box
              component="div"
              sx={{ display: "flex", alignItems: "center ", mb: 3 }}
            >
              <Avatar>{comment.name[0]}</Avatar>
              <Typography
                component="span"
                variant="p"
                sx={{ fontWeight: 700, mr: 1, letterSpacing: "0.1em" }}
              >
                {comment.name}
              </Typography>
            </Box>
            <Typography
              component="p"
              variant="p"
              sx={{ letterSpacing: "0.1em" }}
            >
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Comments
