
import { useState, useEffect, useRef } from "react";
import { Search, MapPin, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SearchBarProps {
  className?: string;
  variant?: "default" | "ghost";
  placeholder?: string;
}

interface Company {
  id: string;
  name: string;
  category: string;
}

const CATEGORIES = [
  "All Categories",
  "Finance",
  "Technology",
  "Healthcare",
  "Retail",
  "Entertainment",
  "Energy",
  "Manufacturing",
  "Education",
  "Hospitality"
];

const SearchBar = ({ 
  className, 
  variant = "default", 
  placeholder = "Search for a company..." 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [open, setOpen] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const inputGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const locationVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    }),
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(58, 134, 255, 0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  // Fetch companies data
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("/mockCompanyData.json");
        const data = await response.json();
        setCompanies(data.companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  // Filter companies based on query
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredCompanies([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = companies.filter(company => 
      company.name.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 5); // Limit to 5 suggestions
    
    setFilteredCompanies(filtered);
    
    if (filtered.length > 0 && !open) {
      setOpen(true);
    }
  }, [query, companies, open]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() || category !== "All Categories") {
      const params = new URLSearchParams();
      
      if (query.trim()) {
        params.append("q", query.trim());
      }
      
      if (category !== "All Categories") {
        params.append("category", category);
      }
      
      navigate(`/companies?${params.toString()}`);
      setOpen(false);
    }
  };

  const handleSelectCompany = (companyName: string) => {
    setQuery(companyName);
    setOpen(false);
    
    // Focus the input after selection
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <motion.form 
      onSubmit={handleSearch} 
      className={`
        flex items-center w-full max-w-3xl gap-2
        ${variant === "ghost" ? "bg-transparent" : "verifirm-glassmorphism p-2 rounded-xl"}
        ${className || ""}
      `}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="relative flex-1"
        variants={inputGroupVariants}
      >
        <Popover open={open && filteredCompanies.length > 0} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <motion.div className="relative" variants={inputVariants}>
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
                size={18} 
              />
              <Input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {
                  if (query.trim() && filteredCompanies.length > 0) {
                    setOpen(true);
                  }
                }}
                className="pl-10 border-none bg-transparent focus-visible:ring-0 shadow-none text-base"
                ref={inputRef}
              />
            </motion.div>
          </PopoverTrigger>
          <AnimatePresence>
            {open && filteredCompanies.length > 0 && (
              <PopoverContent className="p-0 w-full" align="start" asChild>
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Command>
                    <CommandList>
                      <CommandEmpty>No results found</CommandEmpty>
                      <CommandGroup heading="Companies">
                        {filteredCompanies.map((company, i) => (
                          <motion.div
                            key={company.id}
                            custom={i}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                          >
                            <CommandItem
                              onSelect={() => handleSelectCompany(company.name)}
                              className="flex items-center cursor-pointer"
                            >
                              <span>{company.name}</span>
                              <span className="ml-auto text-xs text-muted-foreground">{company.category}</span>
                            </CommandItem>
                          </motion.div>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </motion.div>
              </PopoverContent>
            )}
          </AnimatePresence>
        </Popover>
      </motion.div>
      
      <motion.div 
        className="hidden md:block min-w-[180px]"
        variants={categoryVariants}
      >
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="border-none bg-transparent focus:ring-0 shadow-none">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tag size={16} />
              <SelectValue placeholder="All Categories" />
            </div>
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>
      
      <motion.div 
        className="hidden sm:flex items-center gap-2 pr-2 border-l border-border pl-3"
        variants={locationVariants}
      >
        <MapPin size={18} className="text-muted-foreground" />
        <span className="text-sm text-muted-foreground">South Africa</span>
      </motion.div>
      
      <motion.div variants={buttonVariants}>
        <Button type="submit" size="sm" className="shrink-0 px-4 hover:scale-[1.02] transition-transform">
          Search
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default SearchBar;
