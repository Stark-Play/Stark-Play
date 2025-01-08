interface AuthLayoutProps {
    children: React.ReactNode;
    backgroundImage?: string;
  }
  
  export const AuthLayout = ({ children, backgroundImage }: AuthLayoutProps) => {
    return (
      <div className="min-h-screen flex">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">{children}</div>
        </div>
        
        {/* Right side - Image/Branding */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${backgroundImage || '/auth-background.jpg'})` 
            }}
          >
            <div className="absolute inset-0">
              <div className="flex flex-col justify-center items-center h-full text-white p-8">
                <h2 className="text-3xl font-bold mb-4">
                Make an Impact While Playing
                </h2>
                <p className="text-lg text-center max-w-md">
                Join the first web3 ever-gaming hub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };