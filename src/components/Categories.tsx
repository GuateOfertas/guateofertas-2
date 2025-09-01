import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Watch, 
  Gamepad2, 
  Shirt, 
  Home, 
  Dumbbell 
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "electronics",
      name: "Electrónicos",
      icon: Smartphone,
      count: "15,234",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: "computers",
      name: "Computadoras",
      icon: Laptop,
      count: "8,567",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: "audio",
      name: "Audio",
      icon: Headphones,
      count: "5,432",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: "watches",
      name: "Relojes",
      icon: Watch,
      count: "3,210",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      id: "gaming",
      name: "Gaming",
      icon: Gamepad2,
      count: "7,891",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      id: "fashion",
      name: "Moda",
      icon: Shirt,
      count: "12,456",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: "home",
      name: "Hogar",
      icon: Home,
      count: "9,876",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: "sports",
      name: "Deportes",
      icon: Dumbbell,
      count: "4,321",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-4">
            Explora por Categorías
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas en nuestras categorías organizadas
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={`/category/${category.id}`}>
                <Card
                  className="group cursor-pointer card-gradient border-border/50 hover:shadow-secondary transition-smooth hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  
                  {/* Category Name */}
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  
                  {/* Product Count */}
                  <p className="text-sm text-muted-foreground">
                    {category.count} productos
                  </p>
                </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;