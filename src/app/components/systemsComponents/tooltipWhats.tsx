import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WhatsButton from "./whatsButton";

export function TooltipWhats() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <WhatsButton />
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="text-sm text-semibold">Fale com a nossa</p>
            <p className="text-sm text-semibold">atendente agora!</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
