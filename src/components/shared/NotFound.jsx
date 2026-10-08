import { Box, Typography, Button, Container } from "@mui/material"
import { Link } from "react-router-dom"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 3,
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "6rem", sm: "10rem" },
            color: "primary.main",
            lineHeight: 1,
            textShadow: "rgba(25, 118, 210, 0.2) 0px 4px 12px",
          }}
        >
          404
        </Typography>

        <Typography
          component="h2"
          variant="h4"
          sx={{ fontWeight: 700, color: "text.primary" }}
        >
          صفحه‌ای که دنبالش بودید پیدا نشد!
        </Typography>

        <Typography
          component="p"
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 500, mb: 2 }}
        >
          ممکن است آدرس را اشتباه وارد کرده باشید یا این صفحه حذف شده باشد.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            startIcon={<HomeRoundedIcon />}
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1,
              gap: 1,
            }}
          >
            بازگشت به صفحه اصلی
          </Button>

          <Button
            onClick={() => navigate(-1)}
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackRoundedIcon />}
            sx={{ borderRadius: 2, px: 3, py: 1, gap: 1 }}
          >
            بازگشت به صفحه قبل
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default NotFound
