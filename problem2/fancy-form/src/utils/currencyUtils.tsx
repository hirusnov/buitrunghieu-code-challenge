import ampLUNA from '../assets/svgs/ampLUNA.svg'
import ATOM from '../assets/svgs/ATOM.svg'
import axlUSDC from '../assets/svgs/axlUSDC.svg'
import BLUR from '../assets/svgs/BLUR.svg'
import bNEO from '../assets/svgs/bNEO.svg'
import BUSD from '../assets/svgs/BUSD.svg'
import ETH from '../assets/svgs/ETH.svg'
import EVMOS from '../assets/svgs/EVMOS.svg'
import GMX from '../assets/svgs/GMX.svg'
import IBCX from '../assets/svgs/IBCX.svg'
import IRIS from '../assets/svgs/IRIS.svg'
import KUJI from '../assets/svgs/KUJI.svg'
import LSI from '../assets/svgs/LSI.svg'
import LUNA from '../assets/svgs/LUNA.svg'
import OKB from '../assets/svgs/OKB.svg'
import OKT from '../assets/svgs/OKT.svg'
import OSMO from '../assets/svgs/OSMO.svg'
import rATOM from '../assets/svgs/rATOM.svg'
import rSWTH from '../assets/svgs/rSWTH.svg'
import stATOM from '../assets/svgs/stATOM.svg'
import stEVMOS from '../assets/svgs/stEVMOS.svg'
import stLUNA from '../assets/svgs/stLUNA.svg'
import stOSMO from '../assets/svgs/stOSMO.svg'
import STRD from '../assets/svgs/STRD.svg'
import SWTH from '../assets/svgs/SWTH.svg'
import USC from '../assets/svgs/USC.svg'
import USDC from '../assets/svgs/USDC.svg'
import WBTC from '../assets/svgs/WBTC.svg'
import wstETH from '../assets/svgs/wstETH.svg'
import YieldUSD from '../assets/svgs/YieldUSD.svg'
import ZIL from '../assets/svgs/ZIL.svg'
import USD from '../assets/svgs/USD.svg'
import { TCurrencies } from '../interfaces'

const currencies = [
  {
    currency: 'BLUR',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.20811525423728813,
    img: BLUR,
  },
  {
    currency: 'bNEO',
    date: '2023-08-29T07:10:50.000Z',
    price: 7.1282679,
    img: bNEO,
  },
  {
    currency: 'BUSD',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.999183113,
    img: BUSD,
  },
  {
    currency: 'BUSD',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.9998782611186441,
    img: BUSD,
  },
  { currency: 'USD', date: '2023-08-29T07:10:30.000Z', price: 1, img: USD },
  {
    currency: 'ETH',
    date: '2023-08-29T07:10:52.000Z',
    price: 1645.9337373737374,
    img: ETH,
  },
  {
    currency: 'GMX',
    date: '2023-08-29T07:10:40.000Z',
    price: 36.345114372881355,
    img: GMX,
  },
  {
    currency: 'STEVMOS',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.07276706779661017,
    img: stEVMOS,
  },
  {
    currency: 'LUNA',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.40955638983050846,
    img: LUNA,
  },
  {
    currency: 'RATOM',
    date: '2023-08-29T07:10:40.000Z',
    price: 10.250918915254237,
    img: rATOM,
  },
  {
    currency: 'STRD',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.7386553389830508,
    img: STRD,
  },
  {
    currency: 'EVMOS',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.06246181355932203,
    img: EVMOS,
  },
  {
    currency: 'IBCX',
    date: '2023-08-29T07:10:40.000Z',
    price: 41.26811355932203,
    img: IBCX,
  },
  {
    currency: 'IRIS',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.0177095593220339,
    img: IRIS,
  },
  {
    currency: 'ampLUNA',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.49548589830508477,
    img: ampLUNA,
  },
  {
    currency: 'KUJI',
    date: '2023-08-29T07:10:45.000Z',
    price: 0.675,
    img: KUJI,
  },
  {
    currency: 'STOSMO',
    date: '2023-08-29T07:10:45.000Z',
    price: 0.431318,
    img: stOSMO,
  },
  {
    currency: 'USDC',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.989832,
    img: USDC,
  },
  {
    currency: 'axlUSDC',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.989832,
    img: axlUSDC,
  },
  {
    currency: 'ATOM',
    date: '2023-08-29T07:10:50.000Z',
    price: 7.186657333333334,
    img: ATOM,
  },
  {
    currency: 'STATOM',
    date: '2023-08-29T07:10:45.000Z',
    price: 8.512162050847458,
    img: stATOM,
  },
  {
    currency: 'OSMO',
    date: '2023-08-29T07:10:50.000Z',
    price: 0.3772974333333333,
    img: OSMO,
  },
  {
    currency: 'rSWTH',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.00408771,
    img: rSWTH,
  },
  {
    currency: 'STLUNA',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.44232210169491526,
    img: stLUNA,
  },
  {
    currency: 'LSI',
    date: '2023-08-29T07:10:50.000Z',
    price: 67.69661525423729,
    img: LSI,
  },
  {
    currency: 'OKB',
    date: '2023-08-29T07:10:40.000Z',
    price: 42.97562059322034,
    img: OKB,
  },
  {
    currency: 'OKT',
    date: '2023-08-29T07:10:40.000Z',
    price: 13.561577966101694,
    img: OKT,
  },
  {
    currency: 'SWTH',
    date: '2023-08-29T07:10:45.000Z',
    price: 0.004039850455012084,
    img: SWTH,
  },
  {
    currency: 'USC',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.994,
    img: USC,
  },
  { currency: 'USDC', date: '2023-08-29T07:10:30.000Z', price: 1, img: USDC },
  { currency: 'USDC', date: '2023-08-29T07:10:30.000Z', price: 1, img: USDC },
  {
    currency: 'USDC',
    date: '2023-08-29T07:10:40.000Z',
    price: 0.9998782611186441,
    img: USDC,
  },
  {
    currency: 'WBTC',
    date: '2023-08-29T07:10:52.000Z',
    price: 26002.82202020202,
    img: WBTC,
  },
  {
    currency: 'wstETH',
    date: '2023-08-29T07:10:40.000Z',
    price: 1872.2579742372882,
    img: wstETH,
  },
  {
    currency: 'YieldUSD',
    date: '2023-08-29T07:10:40.000Z',
    price: 1.0290847966101695,
    img: YieldUSD,
  },
  {
    currency: 'ZIL',
    date: '2023-08-29T07:10:50.000Z',
    price: 0.01651813559322034,
    img: ZIL,
  },
]

export const USD_INIT = {
  currency: 'USD',
  price: 1,
}

export const WBTC_INIT = {
  currency: 'WBTC',
  price: 26002.82202020202,
}

//Some currencies are duplicated so I will filter to get the latest price
export const filteredCurrencies = Object.values(
  currencies.reduce((prev: Record<string, TCurrencies>, curr: TCurrencies) => {
    const { currency, date } = curr
    if (!prev[currency] || date > prev[currency].date) {
      prev[currency] = curr
    }
    return prev
  }, {})
)
