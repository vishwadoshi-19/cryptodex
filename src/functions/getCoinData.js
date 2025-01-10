import axios from "axios";

export const getCoinData = (id, setError) => {
  const coin = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-jS1XUGJp5zhY4GaqPBcYTfgA`
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return coin;
};
