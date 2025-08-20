import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Share2, 
  ShoppingCart, 
  Star, 
  Plus, 
  Minus, 
  Truck, 
  Shield, 
  RotateCcw,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock product data
  const product = {
    id: "1",
    name: "iPhone 15 Pro Max 256GB Space Black",
    brand: "Apple",
    price: 8500,
    originalPrice: 9500,
    discount: 11,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    stockCount: 15,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop"
    ],
    description: "El iPhone 15 Pro Max redefine lo que significa un smartphone premium. Con el chip A17 Pro, cámara profesional de 48MP y pantalla Super Retina XDR de 6.7 pulgadas.",
    features: [
      "Chip A17 Pro con GPU de 6 núcleos",
      "Sistema de cámara Pro de 48MP",
      "Pantalla Super Retina XDR de 6.7\"",
      "Diseño en titanio ultraligero",
      "USB-C con velocidades USB 3",
      "Batería de hasta 29 horas de video"
    ],
    specifications: {
      "Pantalla": "6.7\" Super Retina XDR OLED",
      "Procesador": "Chip A17 Pro",
      "Almacenamiento": "256GB",
      "Cámara": "48MP Principal + 12MP Ultra Angular",
      "Batería": "4441 mAh",
      "Sistema": "iOS 17",
      "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.3"
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ'
    }).format(price);
  };

  const relatedProducts = [
    {
      id: "2",
      name: "iPhone 15 Pro 128GB",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",
      price: 7200,
      originalPrice: 8000,
      rating: 4.7,
      reviews: 89
    },
    {
      id: "3",
      name: "AirPods Pro (2da gen)",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&h=200&fit=crop",
      price: 1800,
      originalPrice: 2200,
      rating: 4.8,
      reviews: 156
    },
    {
      id: "4",
      name: "MagSafe Charger",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=200&fit=crop",
      price: 280,
      originalPrice: 350,
      rating: 4.5,
      reviews: 67
    }
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <span>Inicio</span>
          <ChevronRight className="h-4 w-4" />
          <span>Electrónicos</span>
          <ChevronRight className="h-4 w-4" />
          <span>Smartphones</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-accent/20 max-w-full">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.discount && (
                <Badge className="absolute top-2 left-2 lg:top-4 lg:left-4 bg-destructive text-destructive-foreground text-xs lg:text-sm">
                  -{product.discount}%
                </Badge>
              )}
              
              {/* Image Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-1 lg:left-2 top-1/2 transform -translate-y-1/2 glass-effect h-8 w-8 lg:h-10 lg:w-10"
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
              >
                <ChevronLeft className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 lg:right-2 top-1/2 transform -translate-y-1/2 glass-effect h-8 w-8 lg:h-10 lg:w-10"
                onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
              >
                <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex sm:grid sm:grid-cols-4 gap-2 lg:gap-4 overflow-x-auto pb-2 -mx-1 sm:mx-0">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-smooth ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  } min-w-[5rem] sm:min-w-0`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            {/* Header */}
            <div>
              <Badge variant="outline" className="mb-2 text-xs lg:text-sm">{product.brand}</Badge>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reseñas)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.discount && (
                <p className="text-success font-medium">
                  ¡Ahorras {formatPrice(product.originalPrice! - product.price)}!
                </p>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-success' : 'bg-destructive'}`}></div>
              <span className={product.inStock ? 'text-success' : 'text-destructive'}>
                {product.inStock ? `En stock (${product.stockCount} disponibles)` : 'Agotado'}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-medium">Cantidad:</span>
                <div className="flex items-center border rounded-lg w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="h-8 w-8 lg:h-10 lg:w-10"
                  >
                    <Minus className="h-3 w-3 lg:h-4 lg:w-4" />
                  </Button>
                  <span className="px-3 lg:px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    disabled={quantity >= product.stockCount}
                    className="h-8 w-8 lg:h-10 lg:w-10"
                  >
                    <Plus className="h-3 w-3 lg:h-4 lg:w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Button variant="default" size="lg" className="w-full">
                  <ShoppingCart className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                  Agregar al Carrito
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={isFavorite ? "default" : "outline"}
                    size="lg"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-4 w-4 lg:h-5 lg:w-5 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                    <span className="hidden sm:inline">{isFavorite ? 'Guardado' : 'Guardar'}</span>
                    <span className="sm:hidden">♡</span>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                    <span className="hidden sm:inline">Compartir</span>
                    <span className="sm:hidden">↗</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Features */}
            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Características principales</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <div className="grid grid-cols-1 gap-3 lg:gap-4">
              <div className="flex items-center gap-3 p-3 lg:p-4 bg-accent/20 rounded-lg">
                <Truck className="h-5 w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Envío Gratis</div>
                  <div className="text-xs text-muted-foreground">En 24-48 horas</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 lg:p-4 bg-accent/20 rounded-lg">
                <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Garantía</div>
                  <div className="text-xs text-muted-foreground">12 meses</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 lg:p-4 bg-accent/20 rounded-lg">
                <RotateCcw className="h-5 w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Devoluciones</div>
                  <div className="text-xs text-muted-foreground">30 días</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="card-gradient mb-16">
          <CardContent className="p-6">
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="w-full overflow-x-auto flex gap-2 sm:grid sm:grid-cols-3">
                <TabsTrigger value="specs">Especificaciones</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas ({product.reviews})</TabsTrigger>
                <TabsTrigger value="shipping">Envío y Devoluciones</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specs" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border/30">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{product.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{product.reviews} reseñas</div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5,4,3,2,1].map((stars) => (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="text-sm w-12">{stars} ⭐</span>
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div className="bg-yellow-400 h-2 rounded-full" style={{width: '80%'}}></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12">80%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Información de Envío</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Envío gratuito en compras mayores a Q250</li>
                      <li>• Entrega en 24-48 horas en Ciudad de Guatemala</li>
                      <li>• Entrega en 2-5 días en el interior del país</li>
                      <li>• Seguimiento en tiempo real</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Política de Devoluciones</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 30 días para devoluciones</li>
                      <li>• Producto en condiciones originales</li>
                      <li>• Reembolso completo garantizado</li>
                      <li>• Proceso de devolución gratuito</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold text-gradient-primary mb-8">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/producto/${relatedProduct.id}`}>
                <Card className="card-gradient hover:shadow-primary transition-smooth hover-lift">
                  <CardContent className="p-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full aspect-square object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(relatedProduct.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({relatedProduct.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(relatedProduct.price)}
                      </span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(relatedProduct.originalPrice)}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;