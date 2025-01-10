import axios from "axios";

export const getPrices = (id, days, priceType, setError) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&x_cg_demo_api_key=CG-jS1XUGJp5zhY4GaqPBcYTfgA`
    )
    .then((response) => {
      if (response.data) {
        console.log("Prices>>>", response.data);
        if (priceType == "market_caps") {
          return response.data.market_caps;
        } else if (priceType == "total_volumes") {
          return response.data.total_volumes;
        } else {
          return response.data.prices;
        }
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return prices;
};
