import { gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id:ID!):User
    quotes: [QuotewithName]
    iquote(by:ID!):[Quote]
    myprofile:User
  }
  type QuotewithName{
    name: String
    by: IDName
  }
  type IDName{
    _id: String
    firstName: String
  }
  type User {
    _id:ID!
    firstName:String!
    lastName:String!
    email:String!
    password:String!
    quotes: [Quote]
  }
  type Quote {
    name:String
    by:ID
  }
type Token{
  token:String
}
  type Mutation {
    signupUser(userNew:UserInput!):User
    signinUser(userSignin:UsersigninInput!):Token
    createquotes(name:String!):String
  }
  input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String
  }
  input UsersigninInput{
    
    email:String!
    password:String
  }
`;
export default typeDefs;

//   Mutation are used for post update and delete operations
