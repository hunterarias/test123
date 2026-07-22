
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => (
  <div id="Back-To-Top-Button" className="fixed bottom-6 right-6">
    <Button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="bg-theme-blue hover:bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  </div>
);

export default BackToTopButton;
