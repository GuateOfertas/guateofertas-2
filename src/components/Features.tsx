import { Card, CardContent } from "@/components/ui/card";
import { 
  Truck, 
  Shield, 
  CreditCard, 
  Clock, 
  RefreshCw, 
  Award 
} from "lucide-react";
import productsShowcase from "@/assets/products-showcase.jpg";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "En compras mayores a Q250 a todo Guatemala",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Protección completa en todas tus transacciones",
      color: "text-secondary"
    },
    {
      icon: CreditCard,
      title: "Pagos Flexibles",
      description: "Acepta tarjetas de crédito, débito y transferencias",
      color: "text-success"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Recibe tus productos en 24-48 horas",
      color: "text-warning"
    },
    {
      icon: RefreshCw,
      title: "Devoluciones",
      description: "30 días para cambios y devoluciones",
      color: "text-destructive"
    },
    {
      icon: Award,
      title: "Garantía",
      description: "Productos originales con garantía oficial",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              ¿Por qué elegir GuateOfertas?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Más que una tienda online, somos tu socio de confianza para las mejores compras
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 card-gradient hover:shadow-card transition-smooth hover-lift animate-slide-in-right"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg bg-background/50`}>
                          <IconComponent className={`h-5 w-5 ${feature.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-primary">
              <img
                src={productsShowcase}
                alt="Productos destacados de GuateOfertas"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute top-4 right-4 glass-effect rounded-lg p-4 animate-pulse-glow">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-white/80 text-sm">Rating</div>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 glass-effect rounded-lg p-4 animate-pulse-glow">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;