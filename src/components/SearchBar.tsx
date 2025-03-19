
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  className?: string;
  variant?: "default" | "ghost";
  placeholder?: string;
}

const SearchBar = ({ 
  className, 
  variant = "default", 
  placeholder = "Search for a company..." 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/companies?q=${encodeURIComponent(query.trim())}`);
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
