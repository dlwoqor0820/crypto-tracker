import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "./api";

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

const PriceList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  border-color: #ffffff;
  margin-bottom: 10px;
`;

function Price({ coinId }: IChatPoprs) {
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["priceData", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  console.log(isLoading);
  console.log(data);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <PriceList>
          {data?.map((item) => (
            <Items>
              <div>장 시작 : {new Date(item.time_open).toISOString()}</div>
              <div>최고가 : {item.high} USD</div>
              <div>최저가 : {item.low} USD</div>
              <div>장 마감 : {new Date(item.time_close).toISOString()}</div>
            </Items>
          ))}
        </PriceList>
      )}
    </>
  );
}

export default Price;
