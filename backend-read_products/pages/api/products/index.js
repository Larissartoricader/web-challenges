import dbConnect from "@/db/connect";
import Product from "@/db/models/Product.js";

export default async function handler(request, response) {
  try {
    await dbConnect();

    if (request.method === "GET") {
      const products = await Product.find();
      console.log(products);
      return response.status(200).json(products);
    }
  } catch (error) {
    console.error("Error in Fetching;", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}

// import dbConnect from "@/db/connect";
// import Product from "@/db/models/Product.js";

// export default async function handler(request, response) {
//   await dbConnect();

//   if (request.method === "GET") {
//     const products = await Product.find();
//     console.log(products);
//     return response.status(200).json(products);
//   }
// }
