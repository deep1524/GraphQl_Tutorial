import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGql.js";


// Connect
 import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";
 mongoose.connect(MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
 });

 mongoose.connection.on("connected",()=>{
console.log("Connected to Mongodb");
 })
 mongoose.connection.on("error",(error)=>{
  console.log("Error will created for Connected to Mongodb",error);
   })

// import models here
// import userModel from "./models/user.js"
// import QuoteModel from "./models/quotes.js"

import resolvers from "./resolvers.js";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`serve ready on ${url}`);
});

// MONGO_URL = mongodb+srv://d:deep@cluster0.issupkm.mongodb.net/turseniya?retryWrites=true&w=majority