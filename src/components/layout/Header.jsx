import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import BookTwoToneIcon from "@mui/icons-material/BookTwoTone"

function Header() {
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
          <BookTwoToneIcon />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
