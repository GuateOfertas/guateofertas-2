import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  MapPin, 
  Package, 
  Heart, 
  CreditCard, 
  Settings,
  Edit,
  Eye,
  Truck,
  CheckCircle,
  Clock,
  Plus,
  Trash2
} from "lucide-react";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const user = {
    name: "María González",
    email: "maria.gonzalez@email.com",
    phone: "+502 5555-1234",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop",
    memberSince: "Enero 2023",
    totalOrders: 15,
    totalSpent: 45600
  };

  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: 8500,
      items: [
        { name: "iPhone 15 Pro Max", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop" }
      ]
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      status: "in-transit",
      total: 3600,
      items: [
        { name: "AirPods Pro", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=100&h=100&fit=crop" },
        { name: "Apple Watch", image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=100&h=100&fit=crop" }
      ]
    },
    {
      id: "ORD-003",
      date: "2024-01-25",
      status: "processing",
      total: 1200,
      items: [
        { name: "MagSafe Charger", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop" }
      ]
    }
  ];

  const addresses = [
    {
      id: "1",
      type: "home",
      name: "Casa",
      street: "5ta Avenida 12-34, Zona 10",
      city: "Ciudad de Guatemala",
      phone: "+502 5555-1234",
      isDefault: true
    },
    {
      id: "2",
      type: "work",
      name: "Oficina",
      street: "Edificio Torre del Sol, 15to Piso",
      city: "Ciudad de Guatemala",
      phone: "+502 2222-5678",
      isDefault: false
    }
  ];

  const favorites = [
    {
      id: "1",
      name: "MacBook Air M2",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop",
      price: 7200,
      inStock: true
    },
    {
      id: "2",
      name: "iPad Pro 12.9",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop",
      price: 6500,
      inStock: true
    },
    {
      id: "3",
      name: "Samsung Galaxy Tab S9",
      image: "https://images.unsplash.com/photo-1609392658077-0e24115b2f7a?w=200&h=200&fit=crop",
      price: 4200,
      inStock: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(price);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-GT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "in-transit":
        return <Truck className="h-4 w-4 text-primary" />;
      case "processing":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <Package className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Entregado";
      case "in-transit":
        return "En Tránsito";
      case "processing":
        return "Procesando";
      default:
        return "Desconocido";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-success/10 text-success border-success/20";
      case "in-transit":
        return "bg-primary/10 text-primary border-primary/20";
      case "processing":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-accent/20">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
              <p className="text-muted-foreground">Miembro desde {user.memberSince}</p>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="outline">
                  {user.totalOrders} pedidos
                </Badge>
                <Badge variant="outline">
                  {formatPrice(user.totalSpent)} gastados
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Pedidos
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Direcciones
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favoritos
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configuración
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Nombre Completo</Label>
                    <Input defaultValue={user.name} />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input defaultValue={user.email} type="email" />
                  </div>
                  <div>
                    <Label>Teléfono</Label>
                    <Input defaultValue={user.phone} />
                  </div>
                  <div>
                    <Label>Fecha de Nacimiento</Label>
                    <Input type="date" />
                  </div>
                </div>
                <div>
                  <Label>Biografía</Label>
                  <Textarea placeholder="Cuéntanos un poco sobre ti..." />
                </div>
                <Button variant="default">
                  Guardar Cambios
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Estadísticas de Compra</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">{user.totalOrders}</div>
                    <div className="text-sm text-muted-foreground">Pedidos Totales</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <div className="text-3xl font-bold text-secondary">{formatPrice(user.totalSpent)}</div>
                    <div className="text-sm text-muted-foreground">Total Gastado</div>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-3xl font-bold text-success">{formatPrice(user.totalSpent * 0.15)}</div>
                    <div className="text-sm text-muted-foreground">Ahorros Totales</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6 mt-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Historial de Pedidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-border/50 rounded-lg p-4 hover:shadow-card transition-smooth">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-semibold">Pedido #{order.id}</div>
                          <div className="text-sm text-muted-foreground">
                            {formatDate(order.date)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1">{getStatusText(order.status)}</span>
                        </Badge>
                        <div className="text-right">
                          <div className="font-bold text-primary">{formatPrice(order.total)}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded object-cover"
                          />
                          <span className="text-sm text-muted-foreground">{item.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalles
                      </Button>
                      {order.status === "delivered" && (
                        <Button variant="outline" size="sm">
                          Volver a Comprar
                        </Button>
                      )}
                      {order.status === "in-transit" && (
                        <Button variant="outline" size="sm">
                          <Truck className="h-4 w-4 mr-2" />
                          Rastrear Envío
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-6 mt-6">
            <Card className="card-gradient">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Mis Direcciones</CardTitle>
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Dirección
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="border border-border/50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{address.name}</span>
                          {address.isDefault && (
                            <Badge variant="outline" className="bg-primary/10 text-primary">
                              Predeterminada
                            </Badge>
                          )}
                        </div>
                        <div className="text-muted-foreground">
                          <div>{address.street}</div>
                          <div>{address.city}</div>
                          <div>{address.phone}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6 mt-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Productos Favoritos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.map((product) => (
                    <div key={product.id} className="border border-border/50 rounded-lg p-4 hover:shadow-card transition-smooth">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full aspect-square object-cover rounded-lg mb-4"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 glass-effect text-destructive"
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        {product.inStock ? (
                          <Button variant="cart" size="sm">
                            Agregar
                          </Button>
                        ) : (
                          <Badge variant="outline" className="bg-destructive/10 text-destructive">
                            Agotado
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Configuración de Cuenta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Notificaciones</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span>Ofertas y promociones</span>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span>Actualizaciones de pedidos</span>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span>Newsletter semanal</span>
                      <input type="checkbox" className="rounded" />
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Privacidad</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span>Perfil público</span>
                      <input type="checkbox" className="rounded" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span>Compartir historial de compras</span>
                      <input type="checkbox" className="rounded" />
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Seguridad</h3>
                  <div className="space-y-3">
                    <Button variant="outline">
                      Cambiar Contraseña
                    </Button>
                    <Button variant="outline">
                      Configurar 2FA
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/30">
                  <Button variant="destructive">
                    Eliminar Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Account;