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
  const user = await prisma.user.findUnique({
    where: {
      apiKey: req.query["apiKey"]
    }
  });

  if (!user) {
    res.status(401).send("Unauthorized");
    res.end();
  }

  switch (req.method) {
    case "GET":
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

  res.end();
}