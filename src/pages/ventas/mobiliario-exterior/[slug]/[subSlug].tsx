import { useParams, Navigate } from "react-router-dom";
import ProductLanding from "@/components/ProductLanding";
import { mobiliarioItems } from "@/lib/content/products/mobiliario-items";

const MobiliarioSubProduct = () => {
  const { slug, subSlug } = useParams<{ slug: string; subSlug: string }>();
  const categoryItems = slug ? mobiliarioItems[slug] : undefined;
  const data = categoryItems && subSlug ? categoryItems[subSlug] : undefined;
  if (!data) return <Navigate to={`/ventas/mobiliario-exterior/${slug || ""}`} replace />;
  return <ProductLanding data={data} />;
};

export default MobiliarioSubProduct;
