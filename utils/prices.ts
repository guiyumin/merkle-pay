// {
//     "id": "7fb769c6-f723-44d4-ba09-bd3b117742b3",
//     "success": true,
//     "data": {
//       "So11111111111111111111111111111111111111112": "239.02618235836016"
//     }
// }
// "https://api-v3.raydium.io/mint/price?mints=So11111111111111111111111111111111111111112"

// sol price in USDT
export const solRealTimePrice = async (): Promise<number | null> => {
  const response = await fetch(
    "https://api-v3.raydium.io/mint/price?mints=So11111111111111111111111111111111111111112"
  );
  const json = await response.json();
  return json.success
    ? json.data["So11111111111111111111111111111111111111112"]
    : null;
};

// ! this also works, but rumor has it that coingecko is deprecating its free keyless api
// ! however, coingecko provices prices for many fiat currencies, not just USD
// ! when time is right, i will get a premium key and switch over
// "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana&vs_currencies=usd,cny"