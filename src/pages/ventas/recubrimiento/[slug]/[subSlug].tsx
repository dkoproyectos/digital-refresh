import { useParams, Navigate } from "react-router-dom";
import ProductLanding from "@/components/ProductLanding";
import { recubrimientoItems } from "@/lib/content/products/recubrimiento-items";

const RecubrimientoSubProduct = () => {
  const { slug, subSlug } = useParams<{ slug: string; subSlug: string }>();
  const categoryItems = slug ? recubrimientoItems[slug] : undefined;
  const data = categoryItems && subSlug ? categoryItems[subSlug] : undefined;
  if (!data) return <Navigate to={`/productos/recubrimiento/${slug || ""}`} replace />;
  return <ProductLanding data={data} />;
};

export default RecubrimientoSubProduct;
