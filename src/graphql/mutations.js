import { gql } from "@apollo/client"

const SEND_COMMENT = gql`
  mutation sendComment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`

const TOGGLE_POST_BOOKMARK = gql`
  mutation ToggleBookmark($slug: String!, $isBookmarked: Boolean!) {
    updatePost(where: { slug: $slug }, data: { isBookmarked: $isBookmarked }) {
      id
      slug
      isBookmarked
    }
  }
`

export { SEND_COMMENT, TOGGLE_POST_BOOKMARK }
