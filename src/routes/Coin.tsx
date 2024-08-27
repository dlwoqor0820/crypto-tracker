import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { fetchCoinInfo, fetchCoinTickers } from "./api";
import Price from "./Price";
import CandleChart from "./CandleChart";
import LineChart from "./LineChart";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const BackBtn = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  border: 2px solid ${(props) => props.theme.accentColor};;
  border-radius: 50px;
`;

const Tab = styled.span<{ $isActive: boolean }>`
  // $ 접두사를 사용하면 해당 prop이 "transient" prop임을 나타냄
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.$isActive
      ? props.theme.accentColor
      : props.theme.textColor};
  a {
    display: block;
  }
`;

interface ILocation {
  state: { name: string };
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: object;
  team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams() as { coinId: string }; // react-router-dom V6 부터 useParamas 사용 시 타입이 string or undefined로 지정
  const { state } = useLocation() as ILocation; // react-router-dom V6 부터 Generic 미지원
  const priceMatch = useMatch("/:coinId/price");
  const lineChartMatch = useMatch("/:coinId/lineChart");
  const candleChartMatch = useMatch("/:coinId/candleChart");
  const { isLoading: infoLoading, data: infoData } =
    useQuery<IInfoData>({
      queryKey: ["info", coinId],
      queryFn: () => fetchCoinInfo(coinId),
    });
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<IPriceData>({
      queryKey: ["tickers", coinId],
      queryFn: () => fetchCoinTickers(coinId),
      //refetchInterval: 5000,
    });
  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name
            ? state.name
            : loading
            ? "Loading..."
            : infoData?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name
            ? state.name
            : loading
            ? "Loading..."
            : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Now Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price</span>
              <span>{`$${tickersData?.quotes.USD.price.toFixed(
                3,
              )}`}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab $isActive={candleChartMatch !== null}>
              <Link to={`/${coinId}/candleChart`}>
                Candle Chart
              </Link>
            </Tab>
            <Tab $isActive={lineChartMatch !== null}>
              <Link to={`/${coinId}/lineChart`}>
                Line Chart
              </Link>
            </Tab>
            <Tab $isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Routes>
            <Route
              path="candleChart"
              element={<CandleChart coinId={coinId} />}
            />
            <Route
              path="lineChart"
              element={<LineChart coinId={coinId} />}
            />
            <Route
              path="price"
              element={<Price coinId={coinId} />}
            />
          </Routes>

          <BackBtn>
            <Link to="/">Back</Link>
          </BackBtn>
        </>
      )}
    </Container>
  );
}

export default Coin;
