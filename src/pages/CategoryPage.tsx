import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, Grid, List, Loader2 } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("popular");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Mock function to simulate loading products
  const mockProducts = [
    {
      id: "1",
      name: "iPhone 15 Pro Max 256GB Space Black",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      price: 8500,
      originalPrice: 9500,
      rating: 4.8,
      reviews: 124,
      discount: 11,
      isFeatured: true
    },
    {
      id: "2",
      name: "Samsung Galaxy S24 Ultra 512GB",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
      price: 7500,
      originalPrice: 8500,
      rating: 4.6,
      reviews: 178,
      discount: 12,
    },
    {
      id: "3",
      name: "Google Pixel 8 Pro 256GB",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      price: 5200,
      originalPrice: 6000,
      rating: 4.7,
      reviews: 89,
      discount: 13,
      isNew: true
    },
    {
      id: "4",
      name: "MacBook Pro 14 M3",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      price: 12500,
      originalPrice: 14000,
      rating: 4.9,
      reviews: 67,
      discount: 11,
    },
    {
      id: "5",
      name: "iPad Air 5ta Gen",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      price: 4200,
      originalPrice: 4800,
      rating: 4.7,
      reviews: 145,
      discount: 13,
    },
    {
      id: "6",
      name: "Apple Watch Ultra 2",
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
      price: 5500,
      originalPrice: 6200,
      rating: 4.8,
      reviews: 89,
      discount: 11,
    }
  ];

  const loadProducts = useCallback(async (pageNum: number, reset = false) => {
    if (loading) return;
    
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const start = (pageNum - 1) * 6;
    const end = start + 6;
    const newProducts = mockProducts.slice(start, end).map(product => ({
      ...product,
      id: `${product.id}_${pageNum}_${Math.random()}`
    }));
    
    if (reset) {
      setProducts(newProducts);
    } else {
      setProducts(prev => [...prev, ...newProducts]);
    }
    
    setHasMore(end < mockProducts.length * 3); // Simulate more products
    setLoading(false);
  }, [loading]);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px"
  });

  useEffect(() => {
    loadProducts(1, true);
    setPage(1);
  }, []);

  useEffect(() => {
    if (inView && hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadProducts(nextPage);
    }
  }, [inView, hasMore, loading, page, loadProducts]);

  const categoryInfo = {
    electronica: {
      title: "Electrónicos",
      description: "Los últimos dispositivos electrónicos con la mejor tecnología",
      count: "15,234"
    },
    smartphones: {
      title: "Smartphones",
      description: "Los mejores smartphones del mercado con ofertas increíbles",
      count: "8,567"
    },
    computadoras: {
      title: "Computadoras",
      description: "Laptops, PCs y accesorios para trabajo y gaming",
      count: "5,432"
    }
  };

  const currentCategory = categoryInfo[category as keyof typeof categoryInfo] || categoryInfo.electronica;

  return (
    <div className="bg-background">
      {/* Category Header */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              {currentCategory.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {currentCategory.description}
            </p>
            <Badge variant="outline" className="text-lg px-4 py-2">
              {currentCategory.count} productos disponibles
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Buscar en {currentCategory.title}</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar productos..." className="pl-10" />
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Rango de Precio</label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000}
                    min={0}
                    step={100}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Q{priceRange[0]}</span>
                    <span>Q{priceRange[1]}</span>
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Marcas</label>
                  <div className="space-y-2">
                    {["Apple", "Samsung", "Google", "Sony", "LG"].map((brand) => (
                      <label key={brand} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Calificación</label>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <div className="flex">
                          {[...Array(rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                        <span className="text-sm">y más</span>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Section */}
          <main className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Más Popular</SelectItem>
                    <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="newest">Más Recientes</SelectItem>
                    <SelectItem value="rating">Mejor Calificados</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {/* Infinite Scroll Loading Indicator */}
            {hasMore && (
              <div ref={ref} className="flex justify-center py-8">
                {loading && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Cargando más productos...</span>
                  </div>
                )}
              </div>
            )}
            
            {!hasMore && products.length > 0 && (
              <div className="text-center py-8 text-muted-foreground">
                ¡Has visto todos los productos disponibles!
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;