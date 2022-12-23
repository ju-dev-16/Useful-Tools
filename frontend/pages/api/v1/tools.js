import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const fetchData = async (method = "GET", body, id) => {
  const response = await fetch("http://localhost:8080/api/v1/tools" + id ? "?id=" + id : "", {
    method,
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  });

  if (req.query["apiKey"] === user.apiKey) {
    switch (req.method) {
      case "GET":
        // fetchData(...)
        res.status(200).send([
          { 
            createdAt: new Date(),
            link: "https://useful-tools.org"    
          }, 
          {
            createdAt: new Date(),
            link: "https://wikipedia.com"    
          }
        ]);
        break;
      case "POST":
    
        break;
      case "PUT":

        break;
      case "DELETE":

        break;
      default:
        break;
    }
  } else {
    res.status(401).send("Unauthorized");
  }
  res.end();
}