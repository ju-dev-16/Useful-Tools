import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    if (req.method === "PUT") {
      await prisma.user.update({
        where: { email: session.user.email },
        data: { apiKey: req.query["apiKey"] }
      })
      res.status(200);
    }
  } else {
    res.status(401).send("Unauthorized");
  }
  res.end();
}