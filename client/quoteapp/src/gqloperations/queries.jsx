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
`;
