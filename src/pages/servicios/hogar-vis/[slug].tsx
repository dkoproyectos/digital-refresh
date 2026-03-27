import { useParams, Navigate } from "react-router-dom";
import ProductLanding from "@/components/ProductLanding";
import { hogarVisStyles } from "@/lib/content/services/hogar-vis-styles";

const HogarVisStyle = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? hogarVisStyles[slug] : undefined;
  if (!data) return <Navigate to="/servicios/hogar-vis" replace />;
  return <ProductLanding data={data} />;
};

export default HogarVisStyle;
