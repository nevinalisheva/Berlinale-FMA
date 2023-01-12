import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.COGNITO_SECRET,
      issuer: process.env.DOMAIN,
    }),
  ],
});
