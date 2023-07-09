import "../styles/globals.css"
import localFont from "next/font/local"

import { Inter } from "@next/font/google"

import "@/styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"

import { WagmiConfig, createClient, configureChains } from "wagmi"
import { arbitrum, gnosis, scrollTestnet, xdc } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { safeWallet } from "@rainbow-me/rainbowkit/wallets"
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"

const { provider, chains } = configureChains(
  [arbitrum, gnosis, scrollTestnet, xdc],
  [publicProvider()]
)

const projectId = "96c7cd6e4b6d0ba2007299af8b028934"
const { wallets } = getDefaultWallets({
  appName: "devow.token",
  // replace with your appUrl or appName
  chains,
  projectId,
})

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Others",
    wallets: [safeWallet({ chains })],
  },
])

const client = createClient({
  autoConnect: false,
  // No force to connect - wallets
  provider,
  connectors,
})

const nextFont = Inter({ subsets: [] })

// Font files can be colocated inside of `pages`
const chromate = localFont({
  src: "../public/Chromate/Chromate-Regular.ttf",
  variable: "--font-inter",
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={nextFont.className}>
      <style jsx global>
        {`
          :root {
            --font-chromate: ${chromate.style.fontFamily};
          }
        `}
      </style>
      <WagmiConfig client={client}>
        <RainbowKitProvider
          showRecentTransactions
          modalSize="compact"
          chains={chains}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  )
}
