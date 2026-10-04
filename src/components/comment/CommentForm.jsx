import { useState } from "react"

import { Grid, Typography, TextField, Button } from "@mui/material"

import { useMutation } from "@apollo/client/react"
import { SEND_COMMENT } from "../../graphql/mutations"
import { ToastContainer, toast } from "react-toastify"
import { TailSpin } from "react-loader-spinner"

import {
  validateName,
  validateEmail,
  validateText,
} from "../../utils/validators"

function CommentForm({ slug }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const [sendComment, { loading }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
    onCompleted: (data) => {
      console.log("mutation result:", data)
      toast.success("کامنت ارسال شد و منتظر تایید میباشد", {
        position: "top-center",
      })
      setName("")
      setEmail("")
      setText("")
    },
    onError: (err) => {
      console.log("mutation error:", err)
      toast.error("خطا در ارسال کامنت", { position: "top-center" })
    },
  })

  const errors = {
    name: validateName(name),
    email: validateEmail(email),
    text: validateText(text),
  }

  const sendHandler = () => {
    const firstError = errors.name || errors.email || errors.text
    if (firstError) {
      toast.warn(firstError, { position: "top-center" })
      return
    }
    sendComment()
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid size={{ xs: 12 }} sx={{ m: 2 }}>
        <Typography
          component="p"
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }} sx={{ m: 2 }}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12 }} sx={{ m: 2 }}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12 }} sx={{ m: 2 }}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          multiline
          minRows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12 }} sx={{ m: 2 }}>
        {loading ? (
          <Button variant="contained" sx={{ width: "10%" }} disabled>
            در حال ارسال
            <TailSpin height="20" width="20" ariaLabel="loading" />
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ width: "10%" }}
            onClick={sendHandler}
          >
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  )
}

export default CommentForm
