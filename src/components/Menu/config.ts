import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy BALL',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
      {
        label: 'Buy LAC',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x015096C90433D27c36972Fe3DA10231e1a0865bF',
      },
      {
        label: 'Buy LAL',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x65a11d6b2301b49d3a9f28d6367693123aa85a2d',
      },
      {
        label: 'Buy MIL',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xCC6074E5Bf1F8bc8d80acec62Ba75D9Ff2b50e7d',
      },
      {
        label: 'Buy PHO',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xDc0ca7473dF7767907a90B5a8750966f169fe3Cf',
      },
      {
        label: 'Buy PHI',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x37F0Df4395ABa3810317BFcFC2fc2059Ec3ac6ee',
      },
      {
        label: 'Buy UTA',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xbf8cF0478BBDC500EbEF67d03b5364897A62849D',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/SportzFinance/',
      },
      {
        label: 'Docs',
        href: 'https://docs.sportz.finance/',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://goosefinance.medium.com/',
      // },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
