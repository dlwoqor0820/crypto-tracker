import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "./api";
import ApexCharts from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface IChatPoprs {
  coinId: string;
}

interface IcandleData {
  data: {
    x: number;
    y: number[];
  };
}

function CandleChart({ coinId }: IChatPoprs) {
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  const mappedData = data?.map((item) => ({
    x: item.time_open,
    y: [item.open, item.high, item.low, item.close],
  }));

  console.log(isLoading);
  console.log(data);

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={
            [{ data: mappedData }]
          }
          options={{
            chart: {
              height: 300,
              width: 1000,
              background: "transparent",
            }
          }}
        />
      )}
    </div>
  );
}

export default CandleChart;
