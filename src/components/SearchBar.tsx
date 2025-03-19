
import { useState } from "react";
import { Search, MapPin, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchBarProps {
  className?: string;
  variant?: "default" | "ghost";
  placeholder?: string;
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
  const navigate = useNavigate();

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
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={`
        flex items-center w-full max-w-3xl gap-2
        ${variant === "ghost" ? "bg-transparent" : "verifirm-glassmorphism p-2 rounded-xl"}
        ${className || ""}
      `}
    >
      <div className="relative flex-1">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          size={18} 
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 border-none bg-transparent focus-visible:ring-0 shadow-none text-base"
        />
      </div>
      
      <div className="hidden md:block min-w-[180px]">
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
      </div>
      
      <div className="hidden sm:flex items-center gap-2 pr-2 border-l border-border pl-3">
        <MapPin size={18} className="text-muted-foreground" />
        <span className="text-sm text-muted-foreground">South Africa</span>
      </div>
      
      <Button type="submit" size="sm" className="shrink-0 px-4">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
