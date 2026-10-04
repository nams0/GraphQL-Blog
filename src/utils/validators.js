export const MIN_NAME_LENGTH = 3
export const MIN_TEXT_LENGTH = 10
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateName(name) {
  if (!name || !name.trim()) return "نام کاربری را وارد کنید"
  if (name.trim().length < MIN_NAME_LENGTH)
    return `نام کاربری باید حداقل ${MIN_NAME_LENGTH} کاراکتر باشد`
  return ""
}

export function validateEmail(email) {
  if (!email || !email.trim()) return "ایمیل را وارد کنید"
  if (!EMAIL_REGEX.test(email.trim())) return "فرمت ایمیل صحیح نیست"
  return ""
}

export function validateText(text) {
  if (!text || !text.trim()) return "متن کامنت را وارد کنید"
  if (text.trim().length < MIN_TEXT_LENGTH)
    return `متن کامنت باید حداقل ${MIN_TEXT_LENGTH} کاراکتر باشد`
  return ""
}
