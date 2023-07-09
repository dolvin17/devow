import Link from "next/link"
import Image from "next/image"
import { FaTelegram } from "react-icons/fa"
import { Inter } from "next/font/google"

export default function Capital() {
  return (
    <>
      <div className="mt-8">
        <Link
          href="/projects"
          target="_blank"
          className="flex items-center justify-center px-4 py-2 text-white -translate-y-3 rounded-full whitespace-nowrap bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 hover:bg-red-600"
        >
          Raise Capital
        </Link>
      </div>
    </>
  )
}
