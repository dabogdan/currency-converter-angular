export interface ExchangeRatesResponse {
  motd: {
    [key: string]: string
  },
  success: boolean,
  base: string,
  date: string,
  rates: {
    [key: string]: number
  },
}
