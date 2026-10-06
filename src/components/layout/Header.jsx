import { useState } from "react"
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Box,
} from "@mui/material"
import BookTwoToneIcon from "@mui/icons-material/BookTwoTone"
import { Link } from "react-router-dom"

import { useQuery } from "@apollo/client/react"
import { GET_BLOGS_INFO } from "../../graphql/queries"

function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO)
  const bookmarkedPosts = data?.posts.filter((post) => post.isBookmarked) || []

  const handleOpen = (e) => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ flex: 1, fontWeight: 700 }}
          >
            وبلاگ نامسو
          </Typography>

          <IconButton
            color="inherit"
            onClick={handleOpen}
            aria-label="نشان‌شده‌ها"
          >
            <BookTwoToneIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                sx: {
                  maxHeight: 320,
                  width: 280,
                },
              },
              list: {
                sx: { py: 0 },
              },
            }}
          >
            {bookmarkedPosts.length === 0 || loading || errors ? (
              <MenuItem disabled>هیچ پستی نشان نشده</MenuItem>
            ) : (
              bookmarkedPosts.map((post, index) => (
                <Box key={post.id}>
                  <MenuItem
                    component={Link}
                    to={`/blogs/${post.slug}`}
                    onClick={handleClose}
                    sx={{
                      whiteSpace: "normal",
                      ":hover": { color: "primary.main" },
                    }}
                  >
                    {post.title}
                  </MenuItem>
                  {index < bookmarkedPosts.length - 1 && <Divider />}
                </Box>
              ))
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
