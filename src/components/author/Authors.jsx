import { useQuery } from "@apollo/client/react"
import { GET_AUTHORS_INFO } from "../../graphql/queries"
import { Avatar, Grid, Typography, Divider } from "@mui/material"
import { Link } from "react-router-dom"

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO)
  if (loading) return <h3>Loading...</h3>
  if (errors) return <h3>We got an error...</h3>
  console.log(data)
  const { authors } = data
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        border: "1px solid #1976D2",
        borderRadius: 2,
      }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid size={{ xs: 12 }} sx={{ padding: 2 }}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" sx={{ color: "text.secondary" }}>
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index != authors.length - 1 && (
            <Grid size={{ xs: 12 }}>
              <Divider variant="middle"></Divider>
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default Authors
