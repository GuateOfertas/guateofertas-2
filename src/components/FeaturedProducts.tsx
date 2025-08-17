import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  // Mock products data
  const products = [
    {
      id: "1",
      name: "iPhone 15 Pro Max 256GB",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      price: 8500,
      originalPrice: 9500,
      rating: 4.8,
      reviews: 124,
      discount: 11,
      isFeatured: true
    },
    {
      id: "2",
      name: "MacBook Air M2 13 pulgadas",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      price: 7200,
      originalPrice: 8000,
      rating: 4.9,
      reviews: 89,
      discount: 10,
      isNew: true
    },
    {
      id: "3",
      name: "AirPods Pro (2da generación)",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
      price: 1800,
      originalPrice: 2200,
      rating: 4.7,
      reviews: 256,
      discount: 18
    },
    {
      id: "4",
      name: "Samsung Galaxy S24 Ultra",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
      price: 7500,
      originalPrice: 8500,
      rating: 4.6,
      reviews: 178,
      discount: 12,
      isFeatured: true
    },
    {
      id: "5",
      name: "Apple Watch Series 9",
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
      price: 2800,
      originalPrice: 3200,
      rating: 4.8,
      reviews: 145,
      discount: 13
    },
    {
      id: "6",
      name: "PlayStation 5 Console",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
      price: 3500,
      originalPrice: 4000,
      rating: 4.9,
      reviews: 324,
      discount: 13,
      isNew: true
    },
    {
      id: "7",
      name: "Nike Air Max 270 React",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      price: 680,
      originalPrice: 850,
      rating: 4.5,
      reviews: 92,
      discount: 20
    },
    {
      id: "8",
      name: "Canon EOS R6 Mark II",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
      price: 15500,
      originalPrice: 17000,
      rating: 4.8,
      reviews: 67,
      discount: 9,
      isFeatured: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre los productos más populares con los mejores descuentos
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
            Ver Todos los Productos
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;