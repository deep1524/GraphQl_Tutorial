import { users, quotes } from "./fakedb.js";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "./config.js";
import userModal from "./models/user.js";
import quotesModal from "./models/quotes.js";
const resolvers = {
  Query: {
    users: async() =>await userModal.find({}),
    user: async(parrent, {_id}) => await  userModal.findOne({_id}),
    quotes: async() => await quotesModal.find({}).populate("by","_id firstName"),
    iquote:async (parrent, {by}) =>await  quotesModal.find({by:by})
  },
  User: {
    quotes:async (ur) => await quotesModal.find({by:ur._id}),
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
      const doMatch = await bcrypt.compare(
        args.userSignin.password,
        user.password
      );
      if (!doMatch) {
        throw new Error("email or password in invalid");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY);
      return { token: token };
    },
    createquotes:async (_, args, context) => {
      if (!context.userId) throw new Error("You must be logged in");
      const newQuote=new quotesModal({
        name: args.name,
        by: context.userId,
      });
      await newQuote.save()
      return "Quote created successfully"
    },
  },
};

export default resolvers;
