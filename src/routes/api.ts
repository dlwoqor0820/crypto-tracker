const BASE_URL = `https://api.coinpaprika.com/v1`

export async function fetchCoins() {
  const tempCoin = [
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
  return tempCoin
/*   return fetch(`${BASE_URL}/coins`).then((res) =>
    res.json(),
  ); */
}

export async function fetchCoinInfo(coinId: string) {
  const tempInfo = {
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
  return tempInfo
  //return fetch(`${BASE_URL}/coins/${coinId}`).then(res => res.json())
}

export async function fetchCoinTickers(coinId: string) {
  const tempTicker = {
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
  return tempTicker
  //return fetch(`${BASE_URL}/tickers/${coinId}`).then(res => res.json())
}

export function fetchCoinHistory(coinId:string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - (60 * 60 * 24 * 7 * 2); // 60초 60분 24시간 7일(1주) * 2
  return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then(
    res => res.json())
}