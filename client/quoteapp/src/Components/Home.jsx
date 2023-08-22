import { useQuery } from "@apollo/client";
// import { useEffect } from "react";
import { GET_ALL_QUOTES } from "../gqloperations/queries";
import { Link } from "react-router-dom";

export default function Home() {
  // with out apollo client to fetch with the used of fetch
  //   useEffect(() => {
  //     fetch("http://localhost:4000 ", {
  //       method: "Post",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         query: `
  //             query getquotebyuserid($userid:ID!){
  //                 iquote(by:$userid){
  //                 name
  //                  by
  //                }
  //                }

  //             `,
  //         variables: { userid: "64e098ddeec8ebcf2ec30ffa" },
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  console.log(data);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    console.error(error);
  }
  if (data.quotes.length===0) {return <h1>No Quotes avalaibale</h1>;}
  return (
    <div className="container">
      {data.quotes.map((quote) => {
        return (
          
            <blockquote >
              <h6>{quote.name}</h6>
             <Link to={`/profile/${quote.by._id}`}><p className="right-align">~{quote.by.firstName}</p></Link> 
            </blockquote>
           
         
        );
      })}
    </div>
  );
}
