import React from "react"
import { useQuery } from "@apollo/client/react"
import { GET_AUTHORS_INFO } from "../../graphql/queries"
import { Avatar, Grid, Typography, Divider, Box } from "@mui/material"
import { Link } from "react-router-dom"
import Loader from "../shared/Loader"

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO)

  if (loading) return <Loader />
  if (errors) return <h3>We got an error...</h3>

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
            <Box
              component={Link}
              to={`/authors/${author.slug}`}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "text.secondary",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "primary.main",
                },
                "&:hover .author-name": {
                  color: "primary.main",
                },
                "&:hover .author-avatar": {
                  border: "3px solid",
                  borderColor: "primary.main",
                },
              }}
            >
              <Avatar
                src={author.avatar.url}
                className="author-avatar"
                sx={{
                  marginLeft: 2,
                  border: "3px solid transparent", // reserve space so no jump
                  transition: "border-color 0.2s ease",
                }}
              />
              <Typography
                component="p"
                className="author-name"
                sx={{
                  color: "inherit",
                  transition: "color 0.2s ease",
                }}
              >
                {author.name}
              </Typography>
            </Box>
          </Grid>

          {index !== authors.length - 1 && (
            <Grid size={{ xs: 12 }}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default Authors
