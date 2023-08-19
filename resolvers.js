import { users, quotes } from "./fakedb.js";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";
import userModal from "./models/user.js";
import jwt from "jsonwebtoken"
import { JWT_SECRET_KEY } from "./config.js";
const resolvers = {
  Query: {
    users: () => users,
    user: (parrent, args) => users.find((user) => user._id == args._id),
    quotes: () => quotes,
    iquote: (parrent, args) => quotes.filter((quote) => quote.by == args.by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by == ur._id),
  },
  Mutation: {
    signupUser: async (parrent, args) => {
      const user = await userModal.findOne({ email: args.userNew.email });
      if (user) {
        throw new Error("User already exists with that email");
      }
      const hashedpassword = await bcrypt.hash(args.userNew.password, 12);
      const newUser = new userModal({
        ...args.userNew,
        password: hashedpassword,
      });
      return await newUser.save();
    },
    signinUser: async (parrent, args) => {
      const user = await userModal.findOne({ email: args.userSignin.email });
      if (!user) {
        throw new Error("User dosent exists with that email");
      }
      const doMatch=await bcrypt.compare(args.userSignin.password, user.password)
      if(!doMatch) {
        throw new Error("email or password in invalid")
      }
          const token=  jwt.sign({userId:user._id},JWT_SECRET_KEY)
          return {token:token}
    },
  },
};

export default resolvers;
