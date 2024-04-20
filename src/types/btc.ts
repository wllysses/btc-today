export interface IBtcReturn {
  BTCUSD: IBtc;
  BTCBRL: IBtc;
}

export interface IBtc {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  ask: string;
  timestamp: string;
}
