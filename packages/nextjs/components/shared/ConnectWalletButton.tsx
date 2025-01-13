'use client'

import { useState, useEffect } from "react";
import { connect, disconnect } from "starknetkit";
import { Button } from "~~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~~/components/ui/dropdown-menu";
import { useToast } from "~~/hooks/use-toast"
import { Loader2, Wallet, LogOut, Copy, ExternalLink } from "lucide-react";
import {cn} from '~~/lib/utils';

interface WalletConnection {
  wallet?: any;
  address?: string;
}

export default function WalletConnector() {
  const [walletConnection, setWalletConnection] = useState<WalletConnection | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedAddress = localStorage.getItem("walletAddress");
    if (storedAddress) {
      setWalletConnection({ address: storedAddress });
    }
  }, []);

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      const result = await connect({ modalMode: "alwaysAsk" });
      if (result.wallet) {
        const address = result.wallet.selectedAddress;
        setWalletConnection({
          wallet: result.wallet,
          address: address,
        });
        localStorage.setItem("walletAddress", address || "");
        toast({
          title: "Wallet Connected",
          description: "Your wallet has been successfully connected.",
        });
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = async () => {
    setIsLoading(true);
    try {
      await disconnect();
      setWalletConnection(null);
      localStorage.removeItem("walletAddress");
      localStorage.removeItem("nftSrc");
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected.",
      });
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
      toast({
        title: "Disconnection Failed",
        description: "Failed to disconnect wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyAddress = () => {
    if (walletConnection?.address) {
      navigator.clipboard.writeText(walletConnection.address);
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard.",
      });
    }
  };

  const openExplorer = () => {
    if (walletConnection?.address) {
      window.open(
        `https://starkscan.co/contract/${walletConnection.address}`,
        "_blank"
      );
    }
  };

  if (!walletConnection?.address) {
    return (
      <Button 
        onClick={handleConnect}
        disabled={isLoading}
        className={cn(
          "bg-gradient-to-r from-blue-500 to-cyan-700",
          "hover:from-blue-600 hover:to-cyan-700",
          "text-white font-semibold",
          "shadow-lg hover:shadow-xl",
        )}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </>
        )}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline"
          className="border-[#50a9b7] text-[#008CFF] hover:bg-[#008CFF] hover:text-white transition-colors"
        >
          <Wallet className="mr-2 h-4 w-4" />
          {`${walletConnection.address.slice(0, 6)}...${walletConnection.address.slice(-4)}`}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex flex-col space-y-1">
          <span className="text-sm font-normal text-muted-foreground">Connected Wallet</span>
          <span className="font-mono text-xs">
            {`${walletConnection.address.slice(0, 6)}...${walletConnection.address.slice(-4)}`}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={copyAddress} className="cursor-pointer">
          <Copy className="mr-2 h-4 w-4" />
          Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem onClick={openExplorer} className="cursor-pointer">
          <ExternalLink className="mr-2 h-4 w-4" />
          View on Explorer
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleDisconnect}
          disabled={isLoading}
          className="text-red-600 cursor-pointer focus:text-red-600"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Disconnecting...
            </>
          ) : (
            <>
              <LogOut className="mr-2 h-4 w-4" />
              Disconnect
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}