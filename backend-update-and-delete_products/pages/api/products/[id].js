import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  if (request.method === "PUT") {
    console.log({ id });
    const updatedProduct = request.body;
    console.log(updatedProduct);
    await Product.findByIdAndUpdate(id, updatedProduct);
    response.status(200).json({ status: "Product successfully updated." });
    return;
  }

  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    response.status(200).json({ status: "Product successfully deleted." });
    return;
  }
}