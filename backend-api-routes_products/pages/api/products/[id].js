import { getProductById } from "../../../services/productServices.js";

export default function handle(request, response) {
  const { id } = request.query;

  if (!getProductById(id)) {
    return response.status(404).json({ status: "Page not found" });
  }
  response.status(200).json(getProductById(id));
}
