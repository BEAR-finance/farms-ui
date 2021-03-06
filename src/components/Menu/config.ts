import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Teddy\'s Home',
    icon: 'HomeIcon',
    href: 'https://teddy.bears.finance/',
  },

  {
    label: 'Polar\'s Home',
    icon: 'HomeIcon',
    href: 'https://polar.bears.finance/',
  },



  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.bears.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.bears.finance/#/pool',
      },
    ],
  },
  {
    label: 'Wild Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Wild Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Casino (coming in 24h)',
  //   icon: 'PoolIcon',
  //   href: '/casino',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x580f500cc7da45b7b058de7df325f6d8f83065e1',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/BEAR-finance',
      },
      {
        label: 'Blog',
        href: 'https://bearsfinance.medium.com/',
      },
      {
        label: 'Whitepaper',
        href: '/whitepaper.pdf',
      }
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.pancakeswap.finance',
  //     // },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/goosedefi/',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://goosedefi.gitbook.io/goose-finance/',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://goosefinance.medium.com/',
  //     },
  //   ],
  // },
]

export default config
