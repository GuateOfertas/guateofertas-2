import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Laptop, Headphones, Watch } from "lucide-react";
import { useState } from "react";

const CategoryProducts = () => {
  const [activeCategory, setActiveCategory] = useState("electronics");

  const categories = [
    {
      id: "electronics",
      name: "Electrónicos",
      icon: Smartphone,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: "computers",
      name: "Computadoras",
      icon: Laptop,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: "audio",
      name: "Audio",
      icon: Headphones,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: "watches",
      name: "Relojes",
      icon: Watch,
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  const productsByCategory = {
    electronics: [
      {
        id: "e1",
        name: "iPhone 15 Pro Max 256GB",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
        price: 8500,
        originalPrice: 9500,
        rating: 4.8,
        reviews: 124,
        discount: 11,
        isFeatured: true
      },
      {
        id: "e2",
        name: "Samsung Galaxy S24 Ultra",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
        price: 7500,
        originalPrice: 8500,
        rating: 4.6,
        reviews: 178,
        discount: 12
      },
      {
        id: "e3",
        name: "Google Pixel 8 Pro",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        price: 6200,
        originalPrice: 7000,
        rating: 4.7,
        reviews: 89,
        discount: 11,
        isNew: true
      },
      {
        id: "e4",
        name: "Xiaomi 14 Ultra",
        image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
        price: 5500,
        originalPrice: 6200,
        rating: 4.5,
        reviews: 156,
        discount: 11
      }
    ],
    computers: [
      {
        id: "c1",
        name: "MacBook Air M2 13\"",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        price: 7200,
        originalPrice: 8000,
        rating: 4.9,
        reviews: 89,
        discount: 10,
        isNew: true
      },
      {
        id: "c2",
        name: "Dell XPS 15 OLED",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        price: 8500,
        originalPrice: 9500,
        rating: 4.7,
        reviews: 134,
        discount: 11
      },
      {
        id: "c3",
        name: "HP Spectre x360",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
        price: 6800,
        originalPrice: 7600,
        rating: 4.6,
        reviews: 78,
        discount: 11
      },
      {
        id: "c4",
        name: "ASUS ROG Zephyrus",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
        price: 9200,
        originalPrice: 10500,
        rating: 4.8,
        reviews: 192,
        discount: 12,
        isFeatured: true
      }
    ],
    audio: [
      {
        id: "a1",
        name: "AirPods Pro (2da gen)",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
        price: 1800,
        originalPrice: 2200,
        rating: 4.7,
        reviews: 256,
        discount: 18
      },
      {
        id: "a2",
        name: "Sony WH-1000XM5",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
        price: 2200,
        originalPrice: 2600,
        rating: 4.8,
        reviews: 189,
        discount: 15,
        isFeatured: true
      },
      {
        id: "a3",
        name: "Bose QuietComfort 45",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
        price: 1900,
        originalPrice: 2300,
        rating: 4.6,
        reviews: 145,
        discount: 17
      },
      {
        id: "a4",
        name: "Sennheiser Momentum 4",
        image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop",
        price: 2400,
        originalPrice: 2800,
        rating: 4.7,
        reviews: 98,
        discount: 14,
        isNew: true
      }
    ],
    watches: [
      {
        id: "w1",
        name: "Apple Watch Series 9",
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
        price: 2800,
        originalPrice: 3200,
        rating: 4.8,
        reviews: 145,
        discount: 13
      },
      {
        id: "w2",
        name: "Samsung Galaxy Watch 6",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        price: 2200,
        originalPrice: 2600,
        rating: 4.6,
        reviews: 112,
        discount: 15
      },
      {
        id: "w3",
        name: "Garmin Venu 3",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
        price: 3200,
        originalPrice: 3800,
        rating: 4.7,
        reviews: 87,
        discount: 16,
        isFeatured: true
      },
      {
        id: "w4",
        name: "Fitbit Versa 4",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
        price: 1400,
        originalPrice: 1700,
        rating: 4.4,
        reviews: 203,
        discount: 18,
        isNew: true
      }
    ]
  };

  const currentProducts = productsByCategory[activeCategory as keyof typeof productsByCategory] || [];
  const activeTab = categories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Productos por Categoría
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra los mejores productos organizados por categorías
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 h-auto transition-smooth ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "hover:bg-primary/10"
                }`}
              >
                <IconComponent className="h-5 w-5" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Active Category Header */}
        {activeTab && (
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border/50">
              <div className={`w-8 h-8 rounded-full ${activeTab.bgColor} flex items-center justify-center`}>
                <activeTab.icon className={`h-4 w-4 ${activeTab.color}`} />
              </div>
              <span className="font-semibold text-card-foreground">
                {activeTab.name}
              </span>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto hover:bg-primary hover:text-primary-foreground transition-smooth"
            asChild
          >
            <Link to={`/category/${activeCategory}`}>
              Ver Todos en {activeTab?.name}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;