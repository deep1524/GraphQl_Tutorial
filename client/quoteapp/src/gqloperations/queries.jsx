import { gql } from "@apollo/client";
export const GET_ALL_QUOTES = gql`
  query getallquotes {
    quotes {
      name
      by {
        _id
        firstName
      }
    }
  }
`
export const GET_MY_PROFILE = gql`
query getMyProfile {
 user:myprofile{
  firstName
  lastName
  email
  quotes {
    name
  }
 }
}
`
export const GET_USER_BY_ID = gql`
query getuserByid($userid:ID!){
  user(_id:$userid){
   firstName
   lastName
   email
   quotes{
    name
   }
 }
 }
`
;
