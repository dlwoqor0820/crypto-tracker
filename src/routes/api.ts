const BASE_URL = `https://api.coinpaprika.com/v1`

export async function fetchCoins() {
/*   const tempCoin = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "usdt-tether",
      name: "Tether",
      symbol: "USDT",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
    {
      id: "bnb-binance-coin",
      name: "Binance Coin",
      symbol: "BNB",
      rank: 4,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "sol-solana",
      name: "Solana",
      symbol: "SOL",
      rank: 5,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "usdc-usd-coin",
      name: "USDC",
      symbol: "USDC",
      rank: 6,
      is_new: false,
      is_active: true,
      type: "token",
    },
    {
      id: "xrp-xrp",
      name: "XRP",
      symbol: "XRP",
      rank: 7,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "steth-lido-staked-ether",
      name: "Lido Staked Ether",
      symbol: "STETH",
      rank: 8,
      is_new: false,
      is_active: true,
      type: "token",
    },
    {
      id: "toncoin-the-open-network",
      name: "Toncoin",
      symbol: "TON",
      rank: 9,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "doge-dogecoin",
      name: "Dogecoin",
      symbol: "DOGE",
      rank: 10,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "ada-cardano",
      name: "Cardano",
      symbol: "ADA",
      rank: 11,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "trx-tron",
      name: "TRON",
      symbol: "TRX",
      rank: 12,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "weth-weth",
      name: "WETH",
      symbol: "WETH",
      rank: 13,
      is_new: false,
      is_active: true,
      type: "token",
    },
    {
      id: "wbtc-wrapped-bitcoin",
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      rank: 14,
      is_new: false,
      is_active: true,
      type: "token",
    },
    {
      id: "avax-avalanche",
      name: "Avalanche",
      symbol: "AVAX",
      rank: 15,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "shib-shiba-inu",
      name: "Shiba Inu",
      symbol: "SHIB",
      rank: 16,
      is_new: false,
      is_active: true,
      type: "token",
    },
    {
      id: "bch-bitcoin-cash",
      name: "Bitcoin Cash",
      symbol: "BCH",
      rank: 17,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "link-chainlink",
      name: "Chainlink",
      symbol: "LINK",
      rank: 18,
      is_new: false,
      is_active: true,
      type: "token",
    },
    {
      id: "dot-polkadot",
      name: "Polkadot",
      symbol: "DOT",
      rank: 19,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "leo-leo-token",
      name: "LEO Token",
      symbol: "LEO",
      rank: 20,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];
  await new Promise (resolve => setTimeout(resolve, 1000)) //가짜 fetch 실행 시간
  return tempCoin */
  return fetch(`${BASE_URL}/coins`).then((res) =>
    res.json(),
  );
}

export async function fetchCoinInfo(coinId: string) {
/*   const tempInfo = {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "is_new": false,
    "is_active": true,
    "type": "coin",
    "logo": "https://static.coinpaprika.com/coin/btc-bitcoin/logo.png",
    "tags": [
      {
        "id": "segwit",
        "name": "Segwit",
        "coin_counter": 12,
        "ico_counter": 0
      },
      {
        "id": "cryptocurrency",
        "name": "Cryptocurrency",
        "coin_counter": 1146,
        "ico_counter": 40
      },
      {
        "id": "proof-of-work",
        "name": "Proof Of Work",
        "coin_counter": 996,
        "ico_counter": 0
      },
      {
        "id": "payments",
        "name": "Payments",
        "coin_counter": 185,
        "ico_counter": 39
      },
      {
        "id": "sha256",
        "name": "Sha256",
        "coin_counter": 93,
        "ico_counter": 0
      },
      {
        "id": "mining",
        "name": "Mining",
        "coin_counter": 576,
        "ico_counter": 3
      },
      {
        "id": "lightning-network",
        "name": "Lightning Network",
        "coin_counter": 8,
        "ico_counter": 0
      },
      {
        "id": "layer-1-l1",
        "name": "Layer 1 (L1)",
        "coin_counter": 113,
        "ico_counter": 0
      },
      {
        "id": "ftx-holdings",
        "name": "FTX Holdings",
        "coin_counter": 15,
        "ico_counter": 0
      }
    ],
    "team": [
      {
        "id": "satoshi-nakamoto",
        "name": "Satoshi Nakamoto",
        "position": "Founder"
      },
      {
        "id": "wladimir-j-van-der-laan",
        "name": "Wladimir J. van der Laan",
        "position": "Blockchain Developer"
      },
      {
        "id": "jonas-schnelli",
        "name": "Jonas Schnelli",
        "position": "Blockchain Developer"
      },
      {
        "id": "marco-falke",
        "name": "Marco Falke",
        "position": "Blockchain Developer"
      }
    ],
    "description": "Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",
    "message": "",
    "open_source": true,
    "started_at": "2009-01-03T00:00:00Z",
    "development_status": "Working product",
    "hardware_wallet": true,
    "proof_type": "Proof of Work",
    "org_structure": "Decentralized",
    "hash_algorithm": "SHA256",
    "links": {
      "explorer": [
        "https://blockchair.com/bitcoin/?from=coinpaprika",
        "https://blockchain.com/explorer",
        "https://blockstream.info/",
        "https://live.blockcypher.com/btc/",
        "https://btc.cryptoid.info/btc/"
      ],
      "facebook": [
        "https://www.facebook.com/bitcoins/"
      ],
      "reddit": [
        "https://www.reddit.com/r/bitcoin"
      ],
      "source_code": [
        "https://github.com/bitcoin/bitcoin"
      ],
      "website": [
        "https://bitcoin.org/"
      ],
      "youtube": [
        "https://www.youtube.com/watch?v=Gc2en3nHxA4&"
      ]
    },
    "links_extended": [
      {
        "url": "https://bitcoin.org/en/blog",
        "type": "blog"
      },
      {
        "url": "https://blockchair.com/bitcoin/?from=coinpaprika",
        "type": "explorer"
      },
      {
        "url": "https://blockchain.com/explorer",
        "type": "explorer"
      },
      {
        "url": "https://blockstream.info/",
        "type": "explorer"
      },
      {
        "url": "https://live.blockcypher.com/btc/",
        "type": "explorer"
      },
      {
        "url": "https://btc.cryptoid.info/btc/",
        "type": "explorer"
      },
      {
        "url": "https://www.facebook.com/bitcoins/",
        "type": "facebook"
      },
      {
        "url": "https://bitcointalk.org",
        "type": "message_board"
      },
      {
        "url": "https://www.reddit.com/r/bitcoin",
        "type": "reddit",
        "stats": {
          "subscribers": 5958815
        }
      },
      {
        "url": "https://github.com/bitcoin/bitcoin",
        "type": "source_code",
        "stats": {
          "contributors": 1201,
          "stars": 77692
        }
      },
      {
        "url": "https://twitter.com/bitcoincoreorg",
        "type": "twitter",
        "stats": {
          "followers": 161310
        }
      },
      {
        "url": "https://electrum.org/#download",
        "type": "wallet"
      },
      {
        "url": "https://bitcoin.org/",
        "type": "website"
      },
      {
        "url": "https://www.youtube.com/watch?v=Gc2en3nHxA4&",
        "type": "youtube"
      }
    ],
    "whitepaper": {
      "link": "https://static.coinpaprika.com/storage/cdn/whitepapers/215.pdf",
      "thumbnail": "https://static.coinpaprika.com/storage/cdn/whitepapers/217.jpg"
    },
    "first_data_at": "2010-07-17T00:00:00Z",
    "last_data_at": "2024-08-24T16:41:00Z"
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tempInfo */
  return fetch(`${BASE_URL}/coins/${coinId}`).then(res => res.json())
}

export async function fetchCoinTickers(coinId: string) {
/*   const tempTicker = {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "total_supply": 19718978,
    "max_supply": 21000000,
    "beta_value": 0.978203,
    "first_data_at": "2010-07-17T00:00:00Z",
    "last_updated": "2024-08-24T16:33:35Z",
    "quotes": {
      "USD": {
        "price": 64295.07385111046,
        "volume_24h": 33645979019.117302,
        "volume_24h_change_24h": 20,
        "market_cap": 1267833146778,
        "market_cap_change_24h": 3.94,
        "percent_change_15m": 0.25,
        "percent_change_30m": 0.33,
        "percent_change_1h": 0.45,
        "percent_change_6h": -0.01,
        "percent_change_12h": 0.48,
        "percent_change_24h": 3.94,
        "percent_change_7d": 7.82,
        "percent_change_30d": -5.26,
        "percent_change_1y": 145.71,
        "ath_price": 73686.92856165291,
        "ath_date": "2024-03-14T07:07:09Z",
        "percent_from_price_ath": -12.73
      }
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tempTicker */
  return fetch(`${BASE_URL}/tickers/${coinId}`).then(res => res.json())
}

export async function fetchCoinHistory(coinId:string) {
/*   const tempTicker = [
    {
      "time_open": 1722816000,
      "time_close": 1722817440,
      "open": "58103.1",
      "high": "58270.3",
      "low": "49111.0",
      "close": "54006.5",
      "volume": "10612.00555526",
      "market_cap": 0
    },
    {
      "time_open": 1722902400,
      "time_close": 1722903840,
      "open": "54012.4",
      "high": "57056.5",
      "low": "53978.6",
      "close": "56080.0",
      "volume": "3145.82396579",
      "market_cap": 0
    },
    {
      "time_open": 1722988800,
      "time_close": 1722990240,
      "open": "56080.0",
      "high": "57720.8",
      "low": "54556.5",
      "close": "55091.0",
      "volume": "2780.75950654",
      "market_cap": 0
    },
    {
      "time_open": 1723075200,
      "time_close": 1723076640,
      "open": "55138.1",
      "high": "62700.0",
      "low": "54760.3",
      "close": "61704.7",
      "volume": "3570.74854621",
      "market_cap": 0
    },
    {
      "time_open": 1723161600,
      "time_close": 1723163040,
      "open": "61701.9",
      "high": "61732.2",
      "low": "59572.9",
      "close": "60859.9",
      "volume": "3535.85878338",
      "market_cap": 0
    },
    {
      "time_open": 1723248000,
      "time_close": 1723249440,
      "open": "60859.9",
      "high": "61444.6",
      "low": "60284.3",
      "close": "60951.7",
      "volume": "745.15375745",
      "market_cap": 0
    },
    {
      "time_open": 1723334400,
      "time_close": 1723335840,
      "open": "60951.8",
      "high": "61800.0",
      "low": "58329.9",
      "close": "58717.7",
      "volume": "1657.29620150",
      "market_cap": 0
    },
    {
      "time_open": 1723420800,
      "time_close": 1723422240,
      "open": "58717.7",
      "high": "60658.4",
      "low": "57690.0",
      "close": "59359.9",
      "volume": "1772.47497441",
      "market_cap": 0
    },
    {
      "time_open": 1723507200,
      "time_close": 1723508640,
      "open": "59359.5",
      "high": "61555.0",
      "low": "58441.2",
      "close": "60600.0",
      "volume": "2442.99193825",
      "market_cap": 0
    },
    {
      "time_open": 1723593600,
      "time_close": 1723595040,
      "open": "60600.1",
      "high": "61773.4",
      "low": "58500.0",
      "close": "58693.6",
      "volume": "2297.26406239",
      "market_cap": 0
    },
    {
      "time_open": 1723680000,
      "time_close": 1723681440,
      "open": "58693.7",
      "high": "59885.4",
      "low": "56117.7",
      "close": "57554.9",
      "volume": "2578.85459852",
      "market_cap": 0
    },
    {
      "time_open": 1723766400,
      "time_close": 1723767840,
      "open": "57555.0",
      "high": "59800.0",
      "low": "57100.9",
      "close": "58898.4",
      "volume": "1659.79839491",
      "market_cap": 0
    },
    {
      "time_open": 1723852800,
      "time_close": 1723854240,
      "open": "58895.6",
      "high": "59682.2",
      "low": "58812.4",
      "close": "59473.3",
      "volume": "456.34171482",
      "market_cap": 0
    },
    {
      "time_open": 1723939200,
      "time_close": 1723940640,
      "open": "59473.4",
      "high": "60234.4",
      "low": "58451.6",
      "close": "58466.5",
      "volume": "812.95931566",
      "market_cap": 0
    },
    {
      "time_open": 1724025600,
      "time_close": 1724027040,
      "open": "58466.5",
      "high": "59593.0",
      "low": "57860.8",
      "close": "59493.7",
      "volume": "1313.02080450",
      "market_cap": 0
    },
    {
      "time_open": 1724112000,
      "time_close": 1724113440,
      "open": "59493.7",
      "high": "61391.9",
      "low": "58572.7",
      "close": "59023.3",
      "volume": "2101.76376736",
      "market_cap": 0
    },
    {
      "time_open": 1724198400,
      "time_close": 1724199840,
      "open": "59023.3",
      "high": "61800.0",
      "low": "58844.0",
      "close": "61179.7",
      "volume": "2153.31118019",
      "market_cap": 0
    },
    {
      "time_open": 1724284800,
      "time_close": 1724286240,
      "open": "61179.8",
      "high": "61416.7",
      "low": "59805.7",
      "close": "60391.1",
      "volume": "1586.14888616",
      "market_cap": 0
    },
    {
      "time_open": 1724371200,
      "time_close": 1724372640,
      "open": "60391.1",
      "high": "64950.9",
      "low": "60390.0",
      "close": "64087.4",
      "volume": "3155.25945614",
      "market_cap": 0
    },
    {
      "time_open": 1724457600,
      "time_close": 1724459040,
      "open": "64087.5",
      "high": "64481.2",
      "low": "63641.0",
      "close": "64176.0",
      "volume": "953.24449315",
      "market_cap": 0
    },
    {
      "time_open": 1724544000,
      "time_close": 1724545440,
      "open": "64176.1",
      "high": "64503.9",
      "low": "63834.5",
      "close": "64110.0",
      "volume": "383.32734097",
      "market_cap": 0
    }
  ]
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tempTicker */
  return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then(
    res => res.json())
}