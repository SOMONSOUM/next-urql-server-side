import { graphql } from "../__generated__";

export const LOGIN_MUTATION = graphql(`
  mutation LoginAdminUser($input: LoginAdminUserInput) {
    loginAdminUser(input: $input) {
      token
    }
  }
`);

export const ME_QUERY = graphql(`
  query AdminMe {
    adminMe {
      id
      email
      fullname
      userProfile
      phoneNumber
      info
      planId
      status
      documentInfo
      role {
        id
        name
        slug
        read
        write
        update
        remove
        productRead
        productWrite
        productModify
        productRemove
      }
    }
  }
`);
