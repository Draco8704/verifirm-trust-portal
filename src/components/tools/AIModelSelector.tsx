
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
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

interface AIModelSelectorProps {
  onSelect: (model: string) => void;
  selectedModel: string;
}

const models = [
  {
    id: "deepseek-r1-zero",
    name: "DeepSeek R1 Zero",
    description: "Specialized in natural language processing with high accuracy"
  },
  {
    id: "mistral-small-3.1-24b",
    name: "Mistral Small 3.1 24B",
    description: "Powerful large language model with strong reasoning capabilities"
  },
  {
    id: "qwen-qwq",
    name: "Qwen QwQ",
    description: "Versatile AI model optimized for diverse tasks"
  },
  {
    id: "gemma-3-4b",
    name: "Google Gemma 3 4B",
    description: "Google's lightweight yet powerful open foundation model"
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
      <PopoverContent className="w-[350px] p-0">
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
                className="flex flex-col items-start py-2"
              >
                <div className="flex w-full justify-between items-center">
                  <span>{model.name}</span>
                  {model.id === selectedModel && (
                    <Check className="h-4 w-4 text-verifirm-blue" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{model.description}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default AIModelSelector;
