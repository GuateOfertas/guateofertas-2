import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Grid, List, Loader2 } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 10000],
    brand: "",
    rating: 0
  });

  // Mock search results
  const mockSearchResults = [
    {
      id: "search-1",
      name: "iPhone 15 Pro Max 256GB Space Black",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      price: 8500,
      originalPrice: 9500,
      rating: 4.8,
      reviews: 124,
      discount: 11,
      category: "Smartphones",
      brand: "Apple",
      isFeatured: true
    },
    {
      id: "search-2",
      name: "iPhone 14 Pro 128GB",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      price: 6800,
      originalPrice: 7500,
      rating: 4.7,
      reviews: 89,
      discount: 9,
      category: "Smartphones",
      brand: "Apple"
    },
    {
      id: "search-3",
      name: "MacBook Pro 14 M3",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      price: 12500,
      originalPrice: 14000,
      rating: 4.9,
      reviews: 67,
      discount: 11,
      category: "Computadoras",
      brand: "Apple"
    },
    {
      id: "search-4",
      name: "Samsung Galaxy S24 Ultra",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
      price: 7500,
      originalPrice: 8500,
      rating: 4.6,
      reviews: 156,
      discount: 12,
      category: "Smartphones",
      brand: "Samsung"
    },
    {
      id: "search-5",
      name: "iPad Air 5ta Gen",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      price: 4200,
      originalPrice: 4800,
      rating: 4.7,
      reviews: 98,
      discount: 13,
      category: "Tablets",
      brand: "Apple"
    }
  ];

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (searchTerm: string) => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Filter mock results based on search term
    const filtered = mockSearchResults.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setProducts(filtered);
    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const resultCount = products.length;
  const hasResults = resultCount > 0;

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Resultados de búsqueda
          </h1>
          {query && (
            <p className="text-muted-foreground mb-6">
              {loading ? "Buscando..." : `${resultCount} resultados para "${query}"`}
            </p>
          )}
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="¿Qué estás buscando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Buscar"}
            </Button>
          </form>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Buscando productos...</span>
            </div>
          </div>
        ) : !hasResults && query ? (
          /* No Results */
          <div className="text-center py-16">
            <Search className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">No encontramos resultados</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              No pudimos encontrar productos que coincidan con tu búsqueda "{query}". 
              Intenta con palabras clave diferentes.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold">Sugerencias:</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["iPhone", "Samsung", "MacBook", "iPad", "Auriculares"].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      performSearch(suggestion);
                    }}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ) : hasResults ? (
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
                  {/* Quick Filters */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Filtros rápidos</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                      >
                        En oferta
                      </Badge>
                      <Badge 
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                      >
                        Envío gratis
                      </Badge>
                      <Badge 
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                      >
                        4+ estrellas
                      </Badge>
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Categoría</label>
                    <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas las categorías" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas las categorías</SelectItem>
                        <SelectItem value="smartphones">Smartphones</SelectItem>
                        <SelectItem value="computadoras">Computadoras</SelectItem>
                        <SelectItem value="tablets">Tablets</SelectItem>
                        <SelectItem value="accesorios">Accesorios</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Marca</label>
                    <div className="space-y-2">
                      {["Apple", "Samsung", "Google", "Sony", "LG"].map((brand) => (
                        <label key={brand} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Results Section */}
            <main className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    Mostrando {resultCount} resultados
                  </p>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Más Relevante</SelectItem>
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

              {/* Related Searches */}
              <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                <h3 className="font-semibold mb-4">Búsquedas relacionadas</h3>
                <div className="flex flex-wrap gap-2">
                  {["iPhone 15", "Samsung Galaxy", "MacBook Air", "iPad Pro", "AirPods"].map((related) => (
                    <Button
                      key={related}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchQuery(related);
                        performSearch(related);
                      }}
                    >
                      {related}
                    </Button>
                  ))}
                </div>
              </div>
            </main>
          </div>
        ) : (
          /* Initial state - no search performed */
          <div className="text-center py-16">
            <Search className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">¿Qué estás buscando?</h2>
            <p className="text-muted-foreground mb-8">
              Usa el buscador para encontrar productos increíbles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;