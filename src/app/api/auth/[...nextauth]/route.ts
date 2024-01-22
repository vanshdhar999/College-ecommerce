import { authOptions } from '@/lib/AuthOptions';
import NextAuth from "next-auth/next";
//export default NextAuth(authOptions);
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
// export default handler;