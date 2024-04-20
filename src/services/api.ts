import { IBtc, IBtcReturn } from "@/types/btc";

async function getCurrentBitcoinValues(): Promise<IBtcReturn> {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/json/last/BTC-USD,BTC-BRL`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

async function getBitcoinValuesAtLast5Days(currency: string): Promise<IBtc[]> {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/json/daily/BTC-${currency}/5`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

export const api = {
  getCurrentBitcoinValues,
  getBitcoinValuesAtLast5Days,
};
