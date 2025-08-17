import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Database, 
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone
} from "lucide-react";

const Privacy = () => {
  const lastUpdated = "15 de enero de 2024";

  const sections = [
    {
      id: "information-collection",
      icon: Database,
      title: "Información que Recopilamos",
      content: [
        {
          subtitle: "Información Personal",
          items: [
            "Nombre completo y fecha de nacimiento",
            "Dirección de correo electrónico",
            "Número de teléfono",
            "Dirección postal y de entrega",
            "Información de pago (procesada de forma segura)"
          ]
        },
        {
          subtitle: "Información de Navegación",
          items: [
            "Dirección IP y ubicación aproximada",
            "Tipo de navegador y dispositivo",
            "Páginas visitadas y tiempo de navegación",
            "Preferencias de productos y búsquedas",
            "Historial de compras y transacciones"
          ]
        }
      ]
    },
    {
      id: "information-use",
      icon: Eye,
      title: "Cómo Utilizamos tu Información",
      content: [
        {
          subtitle: "Servicios Principales",
          items: [
            "Procesar y gestionar tus pedidos",
            "Proporcionar atención al cliente",
            "Enviar confirmaciones y actualizaciones de pedidos",
            "Gestionar devoluciones y reembolsos",
            "Mejorar nuestros productos y servicios"
          ]
        },
        {
          subtitle: "Marketing y Comunicaciones",
          items: [
            "Enviar ofertas y promociones personalizadas",
            "Newsletter con novedades y descuentos",
            "Comunicaciones de marketing (con tu consentimiento)",
            "Encuestas de satisfacción y feedback",
            "Notificaciones sobre productos favoritos"
          ]
        }
      ]
    },
    {
      id: "information-sharing",
      icon: Users,
      title: "Compartir Información",
      content: [
        {
          subtitle: "Terceros Autorizados",
          items: [
            "Procesadores de pago seguros (Visa, Mastercard)",
            "Servicios de envío y logística",
            "Proveedores de servicios tecnológicos",
            "Servicios de análisis y marketing",
            "Autoridades legales cuando sea requerido"
          ]
        },
        {
          subtitle: "Nunca Compartimos",
          items: [
            "Tu información personal con fines comerciales no autorizados",
            "Datos de pago con terceros no autorizados",
            "Información personal sin tu consentimiento expreso",
            "Datos con empresas de marketing no relacionadas",
            "Información sensible con entidades no verificadas"
          ]
        }
      ]
    },
    {
      id: "data-security",
      icon: Shield,
      title: "Seguridad de Datos",
      content: [
        {
          subtitle: "Medidas de Protección",
          items: [
            "Encriptación SSL de 256 bits para todas las transacciones",
            "Servidores seguros con certificación PCI DSS",
            "Autenticación de dos factores disponible",
            "Monitoreo constante de actividades sospechosas",
            "Copias de seguridad regulares y seguras"
          ]
        },
        {
          subtitle: "Acceso Restringido",
          items: [
            "Solo personal autorizado tiene acceso a datos personales",
            "Sistemas de auditoría y registro de accesos",
            "Capacitación regular en seguridad para empleados",
            "Políticas estrictas de manejo de información",
            "Controles de acceso basados en roles"
          ]
        }
      ]
    },
    {
      id: "user-rights",
      icon: Lock,
      title: "Tus Derechos",
      content: [
        {
          subtitle: "Control de tu Información",
          items: [
            "Acceder a toda tu información personal almacenada",
            "Corregir datos incorrectos o desactualizados",
            "Eliminar tu cuenta y datos personales",
            "Descargar una copia de tus datos",
            "Optar por no recibir comunicaciones de marketing"
          ]
        },
        {
          subtitle: "Cómo Ejercer tus Derechos",
          items: [
            "Contactando nuestro equipo de privacidad",
            "Accediendo a la configuración de tu cuenta",
            "Enviando una solicitud por correo electrónico",
            "Llamando a nuestro servicio al cliente",
            "Utilizando el formulario de contacto en el sitio web"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary">
              Política de Privacidad
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Tu privacidad es nuestra prioridad. Conoce cómo protegemos y utilizamos tu información.
          </p>
          <Badge variant="outline" className="text-sm">
            Última actualización: {lastUpdated}
          </Badge>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="card-gradient max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Nuestro Compromiso</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    En GuateOfertas, respetamos tu privacidad y nos comprometemos a proteger tu información personal. 
                    Esta política describe cómo recopilamos, utilizamos, almacenamos y protegemos tus datos cuando 
                    utilizas nuestros servicios. Al usar nuestro sitio web, aceptas las prácticas descritas en esta política.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.id} className="card-gradient animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="font-semibold text-foreground mb-3">{subsection.subtitle}</h4>
                        <ul className="space-y-2">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="card-gradient max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Database className="h-5 w-5 text-secondary" />
                </div>
                Uso de Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Cookies Esenciales</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Funcionamiento básico del sitio</li>
                    <li>• Carrito de compras</li>
                    <li>• Sesión de usuario</li>
                    <li>• Seguridad y autenticación</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cookies de Análisis</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Estadísticas de uso</li>
                    <li>• Mejoras de rendimiento</li>
                    <li>• Análisis de comportamiento</li>
                    <li>• Optimización de contenido</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="card-gradient max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-3">
                <AlertTriangle className="h-6 w-6 text-warning" />
                ¿Tienes Preguntas sobre Privacidad?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Si tienes dudas sobre nuestra política de privacidad o quieres ejercer tus derechos, 
                contáctanos a través de cualquiera de estos medios:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>privacidad@guateofertas.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>+502 2345-6789</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Responderemos a tu solicitud en un plazo máximo de 72 horas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;