import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Search, Grid, List, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "@/components/ProductCard";

const mockProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    image: "/placeholder.svg",
    price: 8999,
    originalPrice: 10999,
    rating: 4.8,
    reviews: 127,
    discount: 18,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    image: "/placeholder.svg",
    price: 7499,
    originalPrice: 8999,
    rating: 4.7,
    reviews: 89,
    discount: 17,
    isNew: true,
    isFeatured: false,
  },
  {
    id: "3",
    name: "MacBook Pro M3",
    image: "/placeholder.svg",
    price: 15999,
    originalPrice: 18999,
    rating: 4.9,
    reviews: 234,
    discount: 16,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "4",
    name: "AirPods Pro 2",
    image: "/placeholder.svg",
    price: 1899,
    originalPrice: 2399,
    rating: 4.6,
    reviews: 156,
    discount: 21,
    isNew: false,
    isFeatured: false,
  },
  {
    id: "5",
    name: "Sony WH-1000XM5",
    image: "/placeholder.svg",
    price: 2299,
    originalPrice: 2899,
    rating: 4.8,
    reviews: 198,
    discount: 21,
    isNew: true,
    isFeatured: false,
  },
  {
    id: "6",
    name: "Nintendo Switch OLED",
    image: "/placeholder.svg",
    price: 2999,
    originalPrice: 3499,
    rating: 4.7,
    reviews: 267,
    discount: 14,
    isNew: false,
    isFeatured: true,
  },
];

const Offers = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [products, setProducts] = useState<typeof mockProducts>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  const loadProducts = useCallback(async (pageNum: number, reset = false) => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const startIdx = (pageNum - 1) * 12;
    const endIdx = startIdx + 12;
    
    // Create more products by cycling through mock data
    const newProducts = Array.from({ length: 12 }, (_, i) => {
      const baseProduct = mockProducts[i % mockProducts.length];
      return {
        ...baseProduct,
        id: String(startIdx + i + 1),
        name: `${baseProduct.name} ${Math.floor((startIdx + i) / mockProducts.length) + 1}`,
      };
    });

    if (reset) {
      setProducts(newProducts);
    } else {
      setProducts(prev => [...prev, ...newProducts]);
    }

    setHasMore(pageNum < 10); // Limit to 10 pages for demo
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProducts(1, true);
  }, [loadProducts]);

  useEffect(() => {
    if (inView && !loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadProducts(nextPage);
    }
  }, [inView, loading, hasMore, page, loadProducts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset and reload with search term
    setPage(1);
    loadProducts(1, true);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "discount":
        return (b.discount || 0) - (a.discount || 0);
      case "rating":
        return b.rating - a.rating;
      default:
        return b.isFeatured ? 1 : -1;
    }
  });

  return (
    <div className="container px-4 py-6 md:py-8">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Todas las Ofertas
        </h1>
        <p className="text-muted-foreground mb-4">
          Descubre las mejores ofertas en tecnología y electrónicos
        </p>
        <Badge variant="secondary" className="text-sm">
          {filteredProducts.length} productos encontrados
        </Badge>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <form onSubmit={handleSearch} className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit" size="icon" variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </form>

        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Destacados</SelectItem>
              <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="discount">Mayor Descuento</SelectItem>
              <SelectItem value="rating">Mejor Valorados</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-1 border rounded-md p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="px-2"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="px-2"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Products Grid */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            : "space-y-4"
        }
      >
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            viewMode={viewMode}
          />
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6"
              : "space-y-4 mt-6"
          }
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Infinite scroll trigger */}
      {hasMore && !loading && <div ref={ref} className="h-20" />}

      {/* End message */}
      {!hasMore && !loading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            ¡Has visto todas las ofertas disponibles!
          </p>
        </div>
      )}
    </div>
  );
};

export default Offers;