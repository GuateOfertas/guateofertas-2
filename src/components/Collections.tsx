import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Flame, Gift, Zap } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      id: "bestsellers",
      title: "Los Más Vendidos",
      subtitle: "Productos que todos aman",
      description: "Descubre los productos favoritos de nuestros clientes",
      icon: Star,
      color: "text-warning",
      bgColor: "bg-warning/10",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      count: "250+ productos",
      badge: "TOP"
    },
    {
      id: "trending",
      title: "Tendencias",
      subtitle: "Lo más popular ahora",
      description: "Productos que están marcando tendencia",
      icon: Flame,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      count: "180+ productos",
      badge: "HOT"
    },
    {
      id: "offers",
      title: "Ofertas Especiales",
      subtitle: "Descuentos únicos",
      description: "Las mejores ofertas por tiempo limitado",
      icon: Gift,
      color: "text-success",
      bgColor: "bg-success/10",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop",
      count: "120+ productos",
      badge: "OFERTA"
    },
    {
      id: "flash",
      title: "Flash Sales",
      subtitle: "Descuentos relámpago",
      description: "Ofertas por tiempo muy limitado",
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      count: "50+ productos",
      badge: "24H"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-4">
            Colecciones Especiales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Colecciones curadas especialmente para ti con los mejores productos
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => {
            const IconComponent = collection.icon;
            return (
              <Card
                key={collection.id}
                className="group cursor-pointer card-gradient border-border/50 hover:shadow-lg transition-smooth hover-lift animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  {/* Background Image */}
                  <div className="h-48 md:h-56 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`${collection.bgColor} ${collection.color} px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm`}>
                      {collection.badge}
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${collection.bgColor} flex items-center justify-center backdrop-blur-sm`}>
                        <IconComponent className={`h-5 w-5 ${collection.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {collection.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {collection.count}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {collection.subtitle}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {collection.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <Link to={collection.id === "offers" ? "/offers" : `/category/${collection.id === "bestsellers" ? "electronics" : collection.id === "trending" ? "computers" : collection.id === "flash" ? "electronics" : "electronics"}`}>
                      Explorar Colección
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;