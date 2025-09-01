import Hero from "@/components/Hero";
import OffersCarousel from "@/components/OffersCarousel";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Collections from "@/components/Collections";
import CategoryProducts from "@/components/CategoryProducts";
import Newsletter from "@/components/Newsletter";
import Features from "@/components/Features";

const Index = () => {
  return (
    <main>
      <OffersCarousel />
      <Hero />
      <Categories />
      <Collections />
      <FeaturedProducts />
      <CategoryProducts />
      <Newsletter />
      <Features />
    </main>
  );
};

export default Index;
