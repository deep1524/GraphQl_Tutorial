import { users, quotes } from "./fakedb.js";
import { randomBytes } from "crypto";
const resolvers = {
  Query: {
    users: () => users,
    user: (parrent, args) => users.find((user) => user.id == args.id),
    quotes: () => quotes,
    iquote: (parrent, args) => quotes.filter((quote) => quote.by == args.by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by == ur.id),
  },
  Mutation: {
    signupUserDummy: (parrent, args) => {
      const id = randomBytes(5).toString("hex");
      users.push({
        id: id,
        ...args.userNew
      });
      return users.find((user) => user.id == id);
    },
  },
};
export default resolvers;
