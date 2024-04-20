import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarSignIcon,
  TimerIcon,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { IBtc } from "@/types/btc";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

interface Props {
  data: IBtc;
  currency?: string;
}

export function CurrencyCard({ data, currency }: Props) {
  return (
    <Card className="max-sm:w-full">
      <CardHeader>
        <CardTitle>
          BTC/{data.codein ? data.codein : currency === "USD" ? "USD" : "BRL"}
        </CardTitle>
        <CardDescription>
          {data.name
            ? data.name
            : currency === "USD"
            ? "Bitcoin/Dólar Americano"
            : "Bitcoin/Real Brasileiro"}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="w-full grid grid-cols-2 gap-4 max-[475px]:grid-cols-1">
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-500 flex items-center gap-2 dark:text-gray-400">
              Preço atual <DollarSignIcon size={18} />
            </span>
            <span className="text-[22px] font-bold">
              {formatPrice(data.ask, currency!)}
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-500 flex items-center gap-2 dark:text-gray-400">
              Preço máximo (24h){" "}
              <ArrowUpIcon className="text-green-500" size={18} />
            </span>
            <span className="text-[22px] font-bold">
              {formatPrice(data.high, currency!)}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 max-[475px]:grid-cols-1">
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-500 flex items-center gap-2 dark:text-gray-400">
              Preço mínimo (24h){" "}
              <ArrowDownIcon className="text-red-500" size={18} />
            </span>
            <span className="text-[22px] font-bold">
              {formatPrice(data.low, currency!)}
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-500 flex items-center gap-2 dark:text-gray-400">
              Atualizado em <TimerIcon size={18} />
            </span>
            <span className="text-[22px] font-bold">
              {new Date(Number(data.timestamp) * 1000).toLocaleDateString(
                "pt-BR"
              )}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
