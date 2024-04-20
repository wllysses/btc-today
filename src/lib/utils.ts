import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string, currency: string) {
  return Number(price).toLocaleString("pt-BR", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  });
}