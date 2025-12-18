import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FertilizerCategories from "@/components/FertilizerCategories";
import OrganicSection from "@/components/OrganicSection";
import ChemicalSection from "@/components/ChemicalSection";
import NutrientSection from "@/components/NutrientSection";
import FormSection from "@/components/FormSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RRR Enterprise - Door to Door Fertilizer Delivery for Farmers</title>
        <meta
          name="description"
          content="RRR Enterprise delivers premium organic and chemical fertilizers directly to farmers. Quality agricultural inputs including NPK, Urea, Vermicompost with free door-to-door delivery."
        />
        <meta
          name="keywords"
          content="fertilizers, organic fertilizer, chemical fertilizer, NPK, urea, vermicompost, agriculture, farming, door to door delivery, RRR Enterprise"
        />
        <link rel="canonical" href="https://rrrenterprise.in" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <FertilizerCategories />
        <OrganicSection />
        <ChemicalSection />
        <NutrientSection />
        <FormSection />
        <ProductsSection />
        <FeaturesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;