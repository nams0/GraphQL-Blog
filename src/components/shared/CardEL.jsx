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
  IconButton,
} from "@mui/material"

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined"

import { Link } from "react-router-dom"

function CardEL({
  title,
  slug,
  coverPhoto,
  author,
  isBookmarked,
  height = "370px",
}) {
  const toggleBookmark = () => {}

  return (
    <Card
      sx={{
        height,
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        border: "1px solid #1976D2",
        borderRadius: 2,
      }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography component="p" sx={{ color: "text.secondary" }}>
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        height="180"
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
        <IconButton
          sx={{ marginLeft: 1 }}
          color={isBookmarked ? "primary" : "default"}
          onClick={() => toggleBookmark()}
          aria-label={isBookmarked ? "حذف نشان" : "افزودن نشان"}
        >
          {isBookmarked ? (
            <BookmarkOutlinedIcon />
          ) : (
            <BookmarkBorderOutlinedIcon />
          )}
        </IconButton>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
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
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardEL
