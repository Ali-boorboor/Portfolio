import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

type DownloadResumeButtonProps = { isFixed?: boolean };

const DownloadResumeButton = ({ isFixed }: DownloadResumeButtonProps) => {
  return (
    <Button
      asChild
      aria-label="download-resume-btn"
      className={cn(
        "bg-accent text-accent-foreground",
        isFixed && "hidden md:inline-flex fixed bottom-4 left-4"
      )}
    >
      <a href="#">
        <span className="sr-only">Download resume</span>
        <Download />
        دانلود رزومه
      </a>
    </Button>
  );
};

export default DownloadResumeButton;
