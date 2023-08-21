import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
mutation signupuser($userNew:UserInput!){
    user:signupUser(userNew:$userNew)
      {
     
      firstName
     
      
    }
  }
`;
