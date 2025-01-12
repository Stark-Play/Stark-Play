import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardHeader } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Info, Heart } from "lucide-react";

interface ActionCardProps {
  remainingAmount: number;
  currentAmount: number;
  targetAmount: number;
  minInvestment: number;
  futureShares: number;
  valuationCap: number;
  onInvestmentSubmit: (amount: number) => void;
  onWatchClick: () => void;
}

export function ActionCard({
  remainingAmount,
  currentAmount,
  targetAmount,
  minInvestment,
  futureShares,
  valuationCap,
  onInvestmentSubmit,
  onWatchClick,
}: ActionCardProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const amount = Number(formData.get("investmentAmount"));
    onInvestmentSubmit(amount);
  }

  return (
    <Card className="h-fit">
      <CardHeader className="space-y-2 pb-4">
        <div className="flex items-start gap-2 text-sm text-red-500">
          <span>
            CONDICIONES PARA INVERSORES EN FASES TEMPRANAS:{" "}
            {remainingAmount.toLocaleString()} $ RESTAN
          </span>
          <Info className="h-4 w-4" />
        </div>
        <div className="space-y-1">
          <div className="text-4xl font-bold">
            {currentAmount.toLocaleString()} $
          </div>
          <div className="text-sm text-muted-foreground">
            de un objetivo de {targetAmount.toLocaleString()} $
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm">INVERTIR</div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                min. {minInvestment} $
              </span>
              <Input
                name="investmentAmount"
                type="number"
                placeholder="0"
                className="text-right"
                min={minInvestment}
                required
              />
              <span className="text-lg">$</span>
            </div>
          </div>
          <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
            INVERTIR
          </Button>
        </form>

        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={onWatchClick}
        >
          <Heart className="h-4 w-4" />
          ESTATE ATENTO A LAS ACTUALIZACIONES
        </Button>

        <div className="space-y-4 pt-4">
          <div className="text-sm font-medium">TÉRMINOS DE INVERSIÓN</div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Participaciones futuras</span>
              <div>
                <span className="font-medium">
                  {futureShares.toLocaleString()} $
                </span>
                <span className="text-muted-foreground">
                  {" "}
                  - {valuationCap.toLocaleString()} $ tope de valoración
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
