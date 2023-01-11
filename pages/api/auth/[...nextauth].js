import Providers from "next-auth/providers";
import nextAuth from "next-auth";

export default nextAuth({
  providers: [
    Providers.Congnito({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.COGNITO_SECRET,
      clientDomain: process.env.DOMAIN,
    }),
  ],
});
