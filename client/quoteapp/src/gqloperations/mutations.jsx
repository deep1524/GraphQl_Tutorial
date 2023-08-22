import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
mutation signupuser($userNew:UserInput!){
    user:signupUser(userNew:$userNew)
      {
     
      firstName
     
      
    }
  }
`
export const LOGIN_USER = gql`
mutation signinUser($userSignIn:UsersigninInput!){
  user:signinUser(userSignin:$userSignIn)
    {
   token 
  }
}
`

export const CREATE_QUOTE=gql`
mutation createQuotes($name:String!){
  quotes:createquotes(name:$name) 
}
`
