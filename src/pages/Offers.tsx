import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Search, Grid, List } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Skeleton } from "../components/ui/skeleton";
import ProductCard from "../components/ProductCard";

const Offers = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const isFetching = useRef(false);

  const { ref, inView } = useInView({ threshold: 0, rootMargin: "200px" });

const loadProducts = useCallback(async (pageNum: number, reset = false) => {
  if (isFetching.current) return;

  setLoading(true);
  isFetching.current = true;

  try {
    const resp = await fetch(
      `https://www.guateofertas.com/Api/ofertas/api.php?action=more&page=${pageNum}`
    );
    const data = await resp.json();

    if (!Array.isArray(data) || data.length < 2 || !Array.isArray(data[1])) {
      throw new Error("Respuesta inválida");
    }

    const apiProducts = data[1];

    // Evitar duplicados: usar ID único
    const mapped = apiProducts.map((item: any) => ({
      id: String(item.Id), // clave única
      name: item.Nombre,
      image: `https://www.media.guateofertas.com/ofertas/${item.image}`,
      price: item.P_real,
      originalPrice: item.P_precio || item.P_real,
      rating: Math.random() * (5 - 3.5) + 3.5,
      reviews: Math.floor(Math.random() * 200),
      discount: Math.abs(Number(item.Descuento)) || 0,
      isNew: false,
      isFeatured: false,
    }));

    if (reset) {
      setProducts(mapped);
      setPage(1);
    } else {
      setProducts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const filteredNew = mapped.filter((p) => !existingIds.has(p.id));
        return [...prev, ...filteredNew]; // añadir al final sin duplicar
      });
      setPage((prev) => prev + 1);
    }

    setHasMore(apiProducts.length > 0);
  } catch (err) {
    console.error("Error al cargar productos:", err);
    setHasMore(false);
  } finally {
    setLoading(false);
    isFetching.current = false;
  }
}, []);


  // Carga inicial
  useEffect(() => {
    loadProducts(1, true);
  }, [loadProducts]);

  // Scroll infinito
  useEffect(() => {
    if (inView && !loading && hasMore && !isFetching.current) {
      console.log("Trigger scroll infinito. Página actual:", page);
      loadProducts(page + 1);
    }
  }, [inView, loading, hasMore, page, loadProducts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    loadProducts(1, true);
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
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
        return b.isFeatured ? -1 : 1;
    }
  });

  return (
    <div className="container min-h-screen px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Todas las Ofertas</h1>
        <p className="text-muted-foreground mb-4">
          {filtered.length} ofertas encontradas
        </p>
        <Badge variant="secondary">{filtered.length} productos</Badge>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <form onSubmit={handleSearch} className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit" size="icon" variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </form>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Destacados</SelectItem>
            <SelectItem value="price-low">Precio: menor a mayor</SelectItem>
            <SelectItem value="price-high">Precio: mayor a menor</SelectItem>
            <SelectItem value="discount">Mayor descuento</SelectItem>
            <SelectItem value="rating">Mejor valorados</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1 border rounded-md p-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator />

      {/* Productos */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              : "space-y-4"
          }
        >

        {sorted.map((p) => (
          <ProductCard key={p.id} {...p} viewMode={viewMode} />
        ))}
      </div>

      {/* Skeleton */}
      {loading && (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
              : "space-y-4 mt-6"
          }
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Trigger scroll */}
      {hasMore && !loading && <div ref={ref} className="h-20" />}

      {!hasMore && !loading && (
        <div className="py-12 text-center">
          <p>¡Has visto todas las ofertas!</p>
        </div>
      )}
    </div>
  );
};

export default Offers;
