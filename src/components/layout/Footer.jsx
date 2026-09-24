import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

function Footer() {
  return (
    <div>
      <Typography
        component="p"
        color="primary"
        sx={{
          bgcolor: "#f7f7f7",
          padding: "10px",
          textAlign: "center",
          mt: 10,
        }}
      >
        ساخته شده توسط{" "}
        <Link
          href="https://github.com/nams0"
          target="_blank"
          underline="none"
          sx={{
            fontWeight: 700,
            transition: "color 0.2s ease",

            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          Namso
        </Link>
      </Typography>
    </div>
  )
}

export default Footer
