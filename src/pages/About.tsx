import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  ShoppingBag, 
  Truck, 
  Shield,
  Star
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: ShoppingBag,
      number: "50K+",
      label: "Productos",
      color: "text-primary"
    },
    {
      icon: Users,
      number: "100K+",
      label: "Clientes Felices",
      color: "text-secondary"
    },
    {
      icon: Award,
      number: "5",
      label: "Años de Experiencia",
      color: "text-success"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Rating Promedio",
      color: "text-warning"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Pasión por el Cliente",
      description: "Cada decisión que tomamos está centrada en ofrecer la mejor experiencia a nuestros clientes."
    },
    {
      icon: Shield,
      title: "Confianza y Seguridad",
      description: "Garantizamos la autenticidad de todos nuestros productos y la seguridad en cada transacción."
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Nos comprometemos a entregar tus productos en el menor tiempo posible, sin comprometer la calidad."
    },
    {
      icon: Target,
      title: "Innovación Constante",
      description: "Siempre buscamos nuevas formas de mejorar nuestro servicio y la experiencia de compra."
    }
  ];

  const team = [
    {
      name: "Carlos Méndez",
      position: "Fundador & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Visionario emprendedor con 15 años de experiencia en e-commerce"
    },
    {
      name: "Ana López",
      position: "Directora de Operaciones",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      bio: "Experta en logística y optimización de procesos"
    },
    {
      name: "Roberto García",
      position: "Director de Tecnología",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Especialista en desarrollo de plataformas de e-commerce"
    },
    {
      name: "María Rodríguez",
      position: "Directora de Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Creativa estratega con enfoque en experiencia del usuario"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            Sobre GuateOfertas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos más que una tienda online. Somos tu aliado de confianza para encontrar 
            los mejores productos con las mejores ofertas en Guatemala.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-background shadow-card flex items-center justify-center`}>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold text-gradient-secondary">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GuateOfertas nació en 2019 con una misión simple pero poderosa: 
                  democratizar el acceso a productos de calidad en Guatemala. 
                  Comenzamos como un pequeño equipo de emprendedores que creía 
                  en el poder del comercio electrónico para transformar vidas.
                </p>
                <p>
                  Desde nuestros inicios, hemos crecido hasta convertirnos en una 
                  de las plataformas de e-commerce más confiables del país, 
                  sirviendo a más de 100,000 clientes satisfechos y ofreciendo 
                  más de 50,000 productos de las mejores marcas.
                </p>
                <p>
                  Nuestro compromiso sigue siendo el mismo: ofrecer productos 
                  auténticos, precios justos, y un servicio al cliente excepcional 
                  que supere las expectativas.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <ShoppingBag className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gradient-primary">2019 - 2024</h3>
                  <p className="text-muted-foreground">5 años conectando Guatemala</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient-primary mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-gradient hover:shadow-primary transition-smooth hover-lift animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient-secondary mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Las mentes brillantes detrás de GuateOfertas
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-gradient hover:shadow-card transition-smooth hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">
                    {member.position}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gradient-primary mb-8">
            Nuestra Misión
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              "Empoderar a los guatemaltecos con acceso fácil, rápido y seguro a productos 
              de calidad, creando una experiencia de compra online excepcional que conecte 
              a las familias con las mejores ofertas del mercado."
            </p>
            <Card className="card-gradient max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gradient-secondary mb-4">
                  Visión 2030
                </h3>
                <p className="text-muted-foreground">
                  Ser la plataforma de e-commerce líder en Centroamérica, 
                  reconocida por nuestra innovación, confiabilidad y compromiso 
                  con el desarrollo económico de la región.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;