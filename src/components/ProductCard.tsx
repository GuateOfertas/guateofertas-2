import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  viewMode?: "grid" | "list";
  UrlGo?: string;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  reviews,
  discount,
  isNew,
  isFeatured,
  viewMode = "grid",
  UrlGo
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isGrid = viewMode === "grid";

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-GT", {
      style: "currency",
      currency: "GTQ",
    }).format(price);
  };

if (!isGrid) {
  const productUrl = UrlGo ? `/producto/${id}/${UrlGo}` : `/producto/${id}`;
  return (
    
    <Link to={productUrl} className="block w-full">
      <Card
        className="group flex flex-col md:flex-row gap-4 border border-border/40 p-4 rounded-md hover:shadow-md transition-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Imagen del producto */}
        <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            {isNew && (
              <Badge className="bg-success text-success-foreground text-xs px-2 py-0.5">
                Nuevo
              </Badge>
            )}
            {isFeatured && (
              <Badge className="primary-gradient text-primary-foreground text-xs px-2 py-0.5">
                Destacado
              </Badge>
            )}
            {discount && (
              <Badge className="bg-destructive text-destructive-foreground text-xs px-2 py-0.5">
                -{discount}%
              </Badge>
            )}
          </div>
        </div>

        {/* Información del producto */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
              {name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">
                ({reviews})
              </span>
            </div>

            {/* Precio */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-bold text-primary">
                {formatPrice(price)}
              </span>
              {originalPrice && (
                <span className="text-base line-through text-muted-foreground">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Acciones */}
          <div className="flex flex-wrap gap-2 mt-2">
            <Button
              variant="cart"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Agregar al Carrito
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
              className={`${
                isFavorite
                  ? "text-destructive"
                  : "text-muted-foreground hover:text-destructive"
              }`}
            >
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon">
              <Eye className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}

const productUrl = UrlGo ? `/producto/${id}/${UrlGo}` : `/producto/${id}`;
  return (
<Link to={productUrl} className="block animate-fade-in duration-500">
<Card
  className="group relative w-[300px] h-[400px] border border-border/60 rounded-md shadow-sm hover:shadow-md transition-shadow"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <CardContent className="p-2">
    <div className="relative w-full aspect-square overflow-hidden rounded-md">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
        style={{ maxWidth: "200px", margin: "0 auto",  }}
      />

      <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
        {isNew && (
          <Badge className="bg-success text-success-foreground text-xs px-2 py-0.5">Nuevo</Badge>
        )}
        {isFeatured && (
          <Badge className="primary-gradient text-primary-foreground text-xs px-2 py-0.5">Destacado</Badge>
        )}
        {discount && (
          <Badge className="bg-destructive text-destructive-foreground text-xs px-2 py-0.5">
            -{discount}%
          </Badge>
        )}
      </div>

      <div
        className={`absolute bottom-2 left-2 right-2 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <Button
          variant="cart"
          size="sm"
          className="w-full text-xs py-1"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Agregar
        </Button>
      </div>
    </div>

    <div className="pt-2 text-sm">
      <h3 className="text-base font-bold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
        {name}
      </h3>

      <div className="flex items-center gap-1 mb-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">({reviews})</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-base font-bold text-primary">
          {formatPrice(price)}
        </span>
        {originalPrice && (
          <span className="text-xs line-through text-muted-foreground">
            {formatPrice(originalPrice)}
          </span>
        )}
      </div>
    </div>
  </CardContent>
</Card>
</Link>
  );
};

export default ProductCard;