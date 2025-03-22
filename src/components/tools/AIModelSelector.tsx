
import { useState } from "react";
import { Check, ChevronDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AIModelSelectorProps {
  onSelect: (model: string) => void;
  selectedModel: string;
}

const models = [
  {
    id: "deepseek-r1-zero",
    name: "DeepSeek R1 Zero",
    description: "Specialized in natural language processing with high accuracy",
    details: "Best for general text analysis and content generation. Optimized for professional document formatting."
  },
  {
    id: "mistral-small-3.1-24b",
    name: "Mistral Small 3.1 24B",
    description: "Powerful large language model with strong reasoning capabilities",
    details: "Excellent at technical content and industry-specific terminology. Recommended for technical fields."
  },
  {
    id: "qwen-qwq",
    name: "Qwen QwQ",
    description: "Versatile AI model optimized for diverse tasks",
    details: "Well-balanced for creative and analytical tasks. Good choice for marketing and creative positions."
  },
  {
    id: "gemma-3-4b",
    name: "Google Gemma 3 4B",
    description: "Google's lightweight yet powerful open foundation model",
    details: "Efficient and fast processing with good results across various document types. Best for quick optimization."
  },
];

const AIModelSelector = ({ onSelect, selectedModel }: AIModelSelectorProps) => {
  const [open, setOpen] = useState(false);
  
  const currentModel = models.find(model => model.id === selectedModel) || models[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <div className="flex flex-col items-start">
            <span>{currentModel.name}</span>
            <span className="text-xs text-muted-foreground">{currentModel.description}</span>
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search AI models..." />
          <CommandEmpty>No AI model found.</CommandEmpty>
          <CommandGroup>
            {models.map((model) => (
              <CommandItem
                key={model.id}
                onSelect={() => {
                  onSelect(model.id);
                  setOpen(false);
                }}
                className="flex flex-col items-start py-3"
              >
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>{model.name}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{model.details}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  {model.id === selectedModel && (
                    <Check className="h-4 w-4 text-verifirm-blue" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{model.description}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <div className="p-2 text-xs text-muted-foreground border-t">
            Each AI model has different strengths. Select the one that best fits your resume and target job.
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default AIModelSelector;
