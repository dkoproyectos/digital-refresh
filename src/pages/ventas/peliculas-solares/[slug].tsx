import { useParams, Navigate } from "react-router-dom";
import ProductLanding from "@/components/ProductLanding";
import { peliculasProducts } from "@/lib/content/products/peliculas";

const PeliculasProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? peliculasProducts[slug] : undefined;
  if (!data) return <Navigate to="/ventas/peliculas-solares" replace />;
  return <ProductLanding data={data} />;
};

export default PeliculasProduct;
