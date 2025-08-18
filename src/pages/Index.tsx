import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OffersCarousel from "@/components/OffersCarousel";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OffersCarousel />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
