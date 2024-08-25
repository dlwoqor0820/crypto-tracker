import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "./api";
import ApexCharts from "react-apexcharts";
import { useEffect, useState } from "react";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface IChatPoprs {
  coinId: string;
}

interface IcandlePosition {
  x: Date;
  y: string[];
}

function CandleChart({ coinId }: IChatPoprs) {
  const { isLoading, data: queryData } = useQuery<
    IHistorical[]
  >({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });
  const [posistionState, setPositionState] = useState<
    IcandlePosition[] | []
  >([]);



  useEffect(() => {
    if (queryData) {
      const mappedData = queryData?.map((item) => ({
        x: new Date(item.time_open),
        y: [item.open, item.high, item.low, item.close],
      }));
      if (mappedData !== undefined) {
        setPositionState(mappedData);
      } else {
        setPositionState([]);
      }
    }
  }, [queryData]);

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              name: "chart_1",
              data: posistionState,
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 1000,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            xaxis: {
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              labels: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
            colors: ["#0fbcf9"],
            tooltip: {
              x: {
                formatter: (value) => new Date(value).toLocaleDateString(),
              },
              y: {
                formatter: (value) =>
                  `${value.toFixed(2)} USD`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default CandleChart;
