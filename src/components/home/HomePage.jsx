import { Container, Grid, Typography } from "@mui/material"
import Authors from "../author/Authors"
import Blogs from "../blog/Blogs"

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ padding: 3 }}>
        <Grid size={{ xs: 12, md: 3 }} sx={{ mt: 4 }}>
          <Typography
            component="h3"
            variant="h5"
            sx={{ mb: 3, fontWeight: 700 }}
          >
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>

        <Grid size={{ xs: 12, md: 9 }} sx={{ mt: 4 }}>
          <Typography
            component="h3"
            variant="h5"
            sx={{ mb: 3, fontWeight: 700 }}
          >
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
