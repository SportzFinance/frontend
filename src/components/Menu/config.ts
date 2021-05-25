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
        label: 'Buy ATL',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x95432e20657a346c9ED26CF64BFc9A022aE17C84',
      },
      {
        label: 'Buy BKN',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0xA215c5FBCB6dDEF97d4AC7FeEea08e6f069fD767',
      },
      {
        label: 'Buy BOS',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x2F5201F3545998Bf07Db7eC292116848E727aE94',
      },
      {
        label: 'Buy DAL',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x7a2c9448C33eeAD1e76872cCf56b4E701A9A7B2F',
      },
      {
        label: 'Buy DEN',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0xA58B0C55ad2B4472598B936c055c08A54d86B4F8',
      },
      {
        label: 'Buy LAC',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x015096C90433D27c36972Fe3DA10231e1a0865bF',
      },
      {
        label: 'Buy LAL',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x64121a6eCe0083FB8Aadbead932673899683B36C',
      },
      {
        label: 'Buy MEM',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0xF022C3C6104c462be098Be750F09f2b822612B8e',
      },
      {
        label: 'Buy MIA',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x892fdc14BBfd0444Ef43a4745477800F3d73C0E8',
      },
      {
        label: 'Buy MIL',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0xCC6074E5Bf1F8bc8d80acec62Ba75D9Ff2b50e7d',
      },
      {
        label: 'Buy NYK',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x45d222FdE5d6D4beaad0e14334fE63865e62D6aa',
      },
      {
        label: 'Buy PHI',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x37F0Df4395ABa3810317BFcFC2fc2059Ec3ac6ee',
      },
      {
        label: 'Buy PHO',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0xDc0ca7473dF7767907a90B5a8750966f169fe3Cf',
      },
      {
        label: 'Buy POR',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x2b7DF1A1FC59dD661B83Aa24C6E035689287AE77',
      },
      {
        label: 'Buy UTA',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0xbf8cF0478BBDC500EbEF67d03b5364897A62849D',
      },
      {
        label: 'Buy WAS',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xDb44A32d10d793795C691F1aE4067C626d903852&outputCurrency=0x5C54190fAca45771548AB909C9804C0b8af303e6',
      },
    ],
  },
  {
    label: 'Betting',
    icon: 'FarmIcon',
    href: '/betting',
  },
  // {
  //   label: 'Nests',
  //   icon: 'PoolIcon',
  //   href: '/nests',
  // },
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
