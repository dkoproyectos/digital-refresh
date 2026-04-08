import { useParams, Navigate } from "react-router-dom";
import ProductLanding from "@/components/ProductLanding";
import { piedraFlexibleProducts } from "@/lib/content/products/piedra-flexible";

const PiedraFlexibleProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? piedraFlexibleProducts[slug] : undefined;
  if (!data) return <Navigate to="/productos/piedra-flexible" replace />;
  return <ProductLanding data={data} />;
};

export default PiedraFlexibleProduct;
