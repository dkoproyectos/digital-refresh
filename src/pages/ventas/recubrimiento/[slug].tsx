import { useParams, Navigate } from "react-router-dom";
import ProductLanding from "@/components/ProductLanding";
import { recubrimientoProducts } from "@/lib/content/products/recubrimiento";

const RecubrimientoProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? recubrimientoProducts[slug] : undefined;
  if (!data) return <Navigate to="/productos/recubrimiento" replace />;
  return <ProductLanding data={data} />;
};

export default RecubrimientoProduct;
