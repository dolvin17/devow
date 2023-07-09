import { Inter } from "next/font/google"
import { ConnectButton } from "@rainbow-me/rainbowkit"

import Image from "next/image"
import Link from "next/link"
import About from "./navigation/About"
import Inversores from "./navigation/Investors"
import { Fragment, useState } from "react"
import { ImMenu } from "react-icons/im"
import Capital from "./navigation/Capital"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const LINKS = (
    <Fragment>
      <ConnectButton />
      <Capital />
    </Fragment>
  )

  return (
    <Fragment>
      <nav className="sticky top-0 z-10 flex justify-between w-full p-2 px-10 my-1 bg-white/30 backdrop-blur md:items-center">
        <Link className="flex w-full sm:items-center sm:h-full" href="/">
          <Image
            src="/devowii.png"
            alt=""
            width={120}
            height={120}
            className=""
          />
        </Link>
        <div className="items-center justify-end hidden lg:flex whitespace-nowrap gap-4">
          {LINKS}
        </div>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ImMenu className="text-xl text-black fill-current" />
        </button>
      </nav>
      <section
        className={`flex-col py-4 bg-white shadow-2xl rounded-xl divide-y divide-slate-400 border-2 border-zinc-100  text-black gap-2 lg:hidden ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {LINKS}
      </section>
    </Fragment>
  )
}
