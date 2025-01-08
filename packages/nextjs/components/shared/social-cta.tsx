import { Button } from "~~/components/ui/button";

interface SocialButtonProps {
  icon: React.ReactNode;
  provider: string;
  className: string;
  onClick: () => void;
}

export const SocialButton = ({ icon, provider, onClick }: SocialButtonProps) => (
  <Button 
    variant="outline" 
    className="w-full flex items-center gap-2 mb-3"
    onClick={onClick}
  >
    {icon}
    <span>Continue with {provider}</span>
  </Button>
);
