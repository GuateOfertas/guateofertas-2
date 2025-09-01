import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, Bell, Star } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto card-gradient border-border/50 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>

              {/* Header */}
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                ¡No Te Pierdas Nada!
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Suscríbete a nuestro newsletter y recibe ofertas exclusivas, 
                nuevos productos y descuentos especiales directamente en tu correo.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-success/10 rounded-full flex items-center justify-center">
                  <Gift className="h-6 w-6 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Ofertas Exclusivas</h4>
                <p className="text-sm text-muted-foreground">
                  Descuentos especiales solo para suscriptores
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-warning/10 rounded-full flex items-center justify-center">
                  <Bell className="h-6 w-6 text-warning" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Primero en Saber</h4>
                <p className="text-sm text-muted-foreground">
                  Entérate de nuevos productos antes que nadie
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Contenido Premium</h4>
                <p className="text-sm text-muted-foreground">
                  Guías de compra y consejos exclusivos
                </p>
              </div>
            </div>

            {/* Subscription Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button 
                    type="submit" 
                    size="lg"
                    className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Suscribirse
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Al suscribirte aceptas recibir emails promocionales. 
                  Puedes darte de baja en cualquier momento.
                </p>
              </form>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-success mb-2">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-muted-foreground">
                  Pronto recibirás ofertas exclusivas en tu correo.
                </p>
              </div>
            )}

            {/* Statistics */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-wrap justify-center items-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Suscriptores</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">24h</div>
                  <div className="text-sm text-muted-foreground">Ofertas Flash</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;