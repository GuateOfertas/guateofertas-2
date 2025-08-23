import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Package, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Circle,
  Search,
  Phone,
  Mail,
  Calendar
} from "lucide-react";

const OrderTracking = () => {
  const { orderNumber } = useParams();
  const [orderData, setOrderData] = useState(null);

  // Mock order data
  const mockOrderData = {
    orderNumber: "GT-2024-001234",
    status: "en_transito",
    estimatedDelivery: "2024-01-20",
    courier: "Cargo Express",
    trackingSteps: [
      {
        id: 1,
        title: "Pedido Confirmado",
        description: "Tu pedido ha sido recibido y confirmado",
        timestamp: "2024-01-15 10:30 AM",
        status: "completed",
        location: "Guatemala City"
      },
      {
        id: 2,
        title: "Preparando Envío",
        description: "Empacando productos y preparando para envío",
        timestamp: "2024-01-16 02:15 PM",
        status: "completed",
        location: "Centro de Distribución"
      },
      {
        id: 3,
        title: "En Tránsito",
        description: "Tu pedido está en camino",
        timestamp: "2024-01-17 08:45 AM",
        status: "current",
        location: "Ruta Guatemala - Zona 10"
      },
      {
        id: 4,
        title: "En Reparto",
        description: "El repartidor está en tu zona",
        timestamp: "",
        status: "pending",
        location: "Zona de Entrega"
      },
      {
        id: 5,
        title: "Entregado",
        description: "Pedido entregado exitosamente",
        timestamp: "",
        status: "pending",
        location: "Dirección de Entrega"
      }
    ],
    items: [
      {
        id: "1",
        name: "iPhone 15 Pro Max 256GB",
        quantity: 1,
        price: 8500,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop"
      },
      {
        id: "2",
        name: "AirPods Pro (2da gen)",
        quantity: 1,
        price: 1800,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&h=200&fit=crop"
      }
    ],
    deliveryAddress: {
      name: "Juan Pérez",
      address: "Avenida Reforma 12-34, Zona 10",
      city: "Ciudad de Guatemala",
      phone: "+502 1234-5678"
    }
  };

  useEffect(() => {
    if (orderNumber) {
      // Simular búsqueda de pedido
      setOrderData(mockOrderData);
    }
  }, [orderNumber]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-success";
      case "current": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "procesando": return "default";
      case "en_transito": return "secondary";
      case "entregado": return "outline";
      default: return "outline";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "procesando": return "Procesando";
      case "en_transito": return "En Tránsito";
      case "entregado": return "Entregado";
      default: return "Desconocido";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-4">
            Rastrear Pedido
          </h1>
          {orderNumber ? (
            <p className="text-muted-foreground">
              Estado del pedido: <span className="font-medium text-foreground">{orderNumber}</span>
            </p>
          ) : (
            <p className="text-muted-foreground">
              No se encontró el número de pedido en la URL
            </p>
          )}
        </div>

        {/* Order Details */}
        {orderData && (
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Tracking Timeline */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Status */}
              <Card className="card-gradient">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Pedido {orderData.orderNumber}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">
                        Estado actual de tu pedido
                      </p>
                    </div>
                    <Badge variant={getStatusBadgeVariant(orderData.status)} className="w-fit">
                      {getStatusText(orderData.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Entrega Estimada</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(orderData.estimatedDelivery).toLocaleDateString('es-GT')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg">
                      <Truck className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Transportista</div>
                        <div className="text-xs text-muted-foreground">{orderData.courier}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Steps */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Seguimiento del Envío</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderData.trackingSteps.map((step, index) => (
                      <div key={step.id} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          {step.status === "completed" ? (
                            <CheckCircle className="h-6 w-6 text-success" />
                          ) : step.status === "current" ? (
                            <div className="h-6 w-6 rounded-full bg-primary animate-pulse" />
                          ) : (
                            <Circle className="h-6 w-6 text-muted-foreground" />
                          )}
                          {index < orderData.trackingSteps.length - 1 && (
                            <div className={`w-0.5 h-12 mt-2 ${
                              step.status === "completed" ? "bg-success" : "bg-border"
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className={`font-semibold ${getStatusColor(step.status)}`}>
                              {step.title}
                            </h3>
                            {step.timestamp && (
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {step.timestamp}
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {step.description}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                            <MapPin className="h-3 w-3" />
                            {step.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Sidebar */}
            <div className="space-y-6">
              {/* Delivery Info */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-lg">Información de Entrega</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">{orderData.deliveryAddress.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {orderData.deliveryAddress.address}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {orderData.deliveryAddress.city}
                    </p>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{orderData.deliveryAddress.phone}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Order Items */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-lg">Productos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{item.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-muted-foreground">
                            Cantidad: {item.quantity}
                          </span>
                          <span className="text-sm font-bold text-primary">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-lg">¿Necesitas Ayuda?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar Soporte
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* No Order Found */}
        {orderNumber && !orderData && (
          <Card className="card-gradient max-w-2xl mx-auto">
            <CardContent className="text-center py-12">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pedido no encontrado</h3>
              <p className="text-muted-foreground mb-6">
                No pudimos encontrar un pedido con el número: {orderNumber}
              </p>
            </CardContent>
          </Card>
        )}
    </div>
  );
};

export default OrderTracking;