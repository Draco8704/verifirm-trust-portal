
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import CompanyCard from "@/components/CompanyCard";
import { Briefcase, Building, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Company {
  id: string;
  name: string;
  logo: string;
  location: string;
  industry: string;
  category: string;
  size: string;
  rating: number;
  reviewCount: number;
  trending?: boolean;
  new?: boolean;
}

const CompanyListing = () => {
  const [searchParams] = useSearchParams();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const query = searchParams.get("q") || "";
  const categoryFilter = searchParams.get("category") || "";
  
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        
        // Simulating API call
        const response = await fetch("/mockCompanyData.json");
        const data = await response.json();
        let filteredCompanies = data.companies;
        
        // Filter by search query
        if (query) {
          filteredCompanies = filteredCompanies.filter((company: Company) => 
            company.name.toLowerCase().includes(query.toLowerCase()) ||
            company.industry.toLowerCase().includes(query.toLowerCase()) ||
            company.category.toLowerCase().includes(query.toLowerCase())
          );
        }
        
        // Filter by category
        if (categoryFilter && categoryFilter !== "All Categories") {
          filteredCompanies = filteredCompanies.filter((company: Company) => 
            company.category === categoryFilter
          );
        }
        
        // Set active filters
        const filters = [];
        if (query) filters.push(`Search: "${query}"`);
        if (categoryFilter && categoryFilter !== "All Categories") filters.push(`Category: ${categoryFilter}`);
        setActiveFilters(filters);
        
        setCompanies(filteredCompanies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setIsLoading(false);
      }
    };
    
    fetchCompanies();
  }, [query, categoryFilter]);
  
  // Get unique categories for filtering
  const categories = Array.from(new Set(companies.map(company => company.category)));
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          {/* Search Section */}
          <section className="mb-10">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2">Find the Right Company</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Search for companies, read reviews, and make informed career decisions
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <SearchBar />
            </div>
          </section>
          
          {/* Results Section */}
          <section>
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-4 text-muted-foreground">Finding companies...</p>
                </div>
              </div>
            ) : companies.length === 0 ? (
              <div className="text-center py-16">
                <Briefcase className="mx-auto h-16 w-16 text-muted-foreground/40 mb-4" />
                <h2 className="text-2xl font-bold mb-2">No companies found</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  We couldn't find any companies matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <Button onClick={() => window.history.back()}>Go Back</Button>
              </div>
            ) : (
              <>
                {/* Filters Display */}
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="font-medium">{companies.length} Companies</span>
                  </div>
                  
                  {activeFilters.length > 0 && (
                    <div className="flex items-center ml-4 flex-wrap gap-2">
                      <span className="text-sm text-muted-foreground">Filters:</span>
                      {activeFilters.map((filter, index) => (
                        <Badge key={index} variant="secondary" className="font-normal">
                          {filter}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Category Filters */}
                <div className="mb-8 flex flex-wrap gap-2">
                  <div className="flex items-center mr-2">
                    <Tag className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm font-medium">Categories:</span>
                  </div>
                  {["All Categories", ...categories].map(category => (
                    <Button
                      key={category}
                      variant={category === categoryFilter ? "default" : "outline"}
                      size="sm"
                      className="rounded-full text-sm"
                      onClick={() => {
                        const params = new URLSearchParams(searchParams);
                        if (category === "All Categories") {
                          params.delete("category");
                        } else {
                          params.set("category", category);
                        }
                        window.location.search = params.toString();
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                
                {/* Company Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companies.map((company, index) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CompanyCard company={company} />
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyListing;
