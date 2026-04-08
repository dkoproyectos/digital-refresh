import { useParams, Navigate } from "react-router-dom";
import ProductLanding from "@/components/ProductLanding";
import { cortinasProducts } from "@/lib/content/products/cortinas";

const CortinasProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? cortinasProducts[slug] : undefined;
  if (!data) return <Navigate to="/productos/cortinas-persianas" replace />;
  return <ProductLanding data={data} />;
};

export default CortinasProduct;
