import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart items count
  const navigate = useNavigate();

  const categories = [
    "Electrónicos", "Moda", "Hogar", "Deportes", "Belleza", "Libros"
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/" className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gradient-primary">
                GuateOfertas.com
              </h1>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Busca productos, marcas y más..."
                className="pl-10 bg-background/80 border-border/50 focus:ring-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/cuenta">
              <Button variant="ghost" size="icon" className="hidden lg:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/carrito">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs primary-gradient">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 py-3 border-t border-border/30">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/categoria/${category.toLowerCase()}`}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {category}
            </Link>
          ))}
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden py-3 border-t border-border/30">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar productos..."
              className="pl-10 bg-background/80"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/categoria/${category.toLowerCase()}`}
                  className="block py-2 text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              <hr className="border-border/30" />
              <Link
                to="/cuenta"
                className="flex items-center py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-4 w-4 mr-2" />
                Mi Cuenta
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;