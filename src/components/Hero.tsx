import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ofertas increíbles en GuateOfertas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">
              ¡Ofertas Flash Disponibles!
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Las Mejores
            <span className="block text-gradient-primary">Ofertas</span>
            de Guatemala
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubre productos increíbles con descuentos de hasta el 70%. 
            Envío gratis a todo el país.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Explorar Ofertas
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10"
            >
              Ver Categorías
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100K+</div>
              <div className="text-white/80">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Soporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse-glow hidden lg:block">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
          <ShoppingBag className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse-glow hidden lg:block animation-delay-1000">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
          <Zap className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;