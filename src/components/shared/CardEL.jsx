import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material"

import { Link } from "react-router-dom"

function CardEL({ title, slug, coverPhoto, author }) {
  return (
    <Card
      sx={{
        height: 430,
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        border: "1px solid #1976D2",
        borderRadius: 2,
      }}
    >
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
        title={
          <Typography component="p" sx={{ color: "text.secondary" }}>
            {author.name}
          </Typography>
        }
      />

      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />

      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography
          component="h3"
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </CardContent>

      <Divider variant="middle" sx={{ margin: "10px" }} />

      <CardActions>
        {/* <Link
          to={`/blogs/${slug}`}
          state={{ textDecoration: "none", width: "100%" }}
        > */}
        <Button
          variant="outlined"
          size="small"
          color="primary"
          sx={{
            width: "100%",
            borderRadius: 1,
          }}
        >
          مطالعه مقاله
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  )
}

export default CardEL
