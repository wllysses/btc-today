import Link from "next/link";
import { BitcoinIcon } from "lucide-react";
import { api } from "@/services/api";
import { Card } from "@/components/ui/card";
import { CurrencyCard } from "@/components/ui/currency-card";
import { ThemeToggle } from "@/components/ui/theme.toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Home() {
  const fetchCurrentValue = await api.getCurrentBitcoinValues();
  const fetchLastValuesAtUsd = await api.getBitcoinValuesAtLast5Days("USD");
  const fetchLastValuesAtBrl = await api.getBitcoinValuesAtLast5Days("BRL");

  return (
    <>
      <Card className="p-4 border-b rounded-none fixed w-full top-0 z-50 bg-black/90">
        <header className="w-full container mx-auto flex items-center justify-between animate-fade-down">
          <div className="flex items-center justify-center gap-2">
            <div className="size-9 bg-primary rounded flex items-center justify-center">
              <BitcoinIcon color="white" size={28} />
            </div>
            <h3 className="font-bold text-2xl">
              BTC<span className="text-primary">Today</span>
            </h3>
          </div>
          <ThemeToggle />
        </header>
      </Card>

      <main className="w-full pt-24 pb-8 container mx-auto border-x">
        <div className="w-full p-2 animate-fade-up">
          <h2 className="font-semibold">
            Cotação atual em tempo real{" "}
            <span className="text-xs text-muted-foreground">
              (Real-time quote)
            </span>
          </h2>
          <div className="mt-4 w-full flex items-center gap-4 flex-wrap">
            <CurrencyCard data={fetchCurrentValue.BTCUSD} currency="USD" />
            <CurrencyCard data={fetchCurrentValue.BTCBRL} currency="BRL" />
          </div>
        </div>

        <div className="w-full mt-8 p-2 animate-fade-up">
          <h2 className="font-semibold">
            Cotação nos últimos 5 dias{" "}
            <span className="text-xs text-muted-foreground">
              (Quote in the last 5 days)
            </span>
          </h2>
          <Tabs defaultValue="btcUsd" className="mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="btcUsd" className="font-semibold">
                BTC/USD
              </TabsTrigger>
              <TabsTrigger value="btcBrl" className="font-semibold">
                BTC/BRL
              </TabsTrigger>
            </TabsList>
            <TabsContent value="btcUsd">
              <div className="mt-4 w-full flex items-center gap-4 flex-wrap">
                {fetchLastValuesAtUsd &&
                  fetchLastValuesAtUsd.map((btc, index) => (
                    <CurrencyCard key={index} data={btc} currency="USD" />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="btcBrl">
              <div className="mt-4 w-full flex items-center gap-4 flex-wrap">
                {fetchLastValuesAtBrl &&
                  fetchLastValuesAtBrl.map((btc, index) => (
                    <CurrencyCard key={index} data={btc} currency="BRL" />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-primary p-2 text-center text-white font-semibold text-sm">
        <p>
          Desenvolvido por{" "}
          <Link
            href="https://linkedin.com/in/wllysses"
            target="_blank"
            className="hover:underline"
          >
            Wllysses Tavares
          </Link>
        </p>
      </footer>
    </>
  );
}
