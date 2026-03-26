import { useParams, Navigate } from "react-router-dom";
import ProductLanding from "@/components/ProductLanding";
import { mobiliarioProducts } from "@/lib/content/products/mobiliario";

const MobiliarioProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? mobiliarioProducts[slug] : undefined;
  if (!data) return <Navigate to="/ventas/mobiliario-exterior" replace />;
  return <ProductLanding data={data} />;
};

export default MobiliarioProduct;
