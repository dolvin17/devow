import Image from "next/image";
import Link from "next/link";
import {
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-center sm:w-full bg-white/30 backdrop-blur ">
        <footer
          aria-label="Site Footer"
          className="flex justify-between w-full px-10 mt-1 "
        >
          <div className="py-8 mx-xl sm:px-6">
            <div className="grid grid-cols-1 gap-1 mt-1 lg:grid-cols-2 lg:gap-32">
              <div className="max-w-sm mx-1 ">
                <div className="justify-between sm:flex sm:text-center">
                  <Link className="w-full pb-4 md:w-1/3 lg:w-1/4" href="/o">
                    <Image src="/devowii.png" alt="" width={75} height={75} />
                  </Link>{" "}
                </div>
                <div className="flex flex-row gap-4 py-2 mt-16 text-sm text-gray-700">
                  <Link href="mailto:hello@devow.xyz">
                    <BsFillEnvelopeFill size={25} />
                  </Link>
                  hello@devow.xyz
                </div>

                <div className="max-w-xl mx-1 mt-8">
                  <form action="#" className="sm:flex sm:gap-4">
                    <div className="sm:flex-1"></div>
                  </form>
                </div>

                <div className="flex gap-4 my-16 text-black lg:items-center">
                  <Link href="/">
                    <FaTelegram size={30} />
                  </Link>
                  <Link href="/">
                    <FaTwitter size={30} />
                  </Link>
                  <Link href="/">
                    <FaLinkedin size={30} />
                  </Link>
                  <Link href="/">
                    <FaDiscord size={30} />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8 pt-8 pb-8 text-center sm:justify-center sm:text-left">
                <div>
                  <strong className="font-medium text-black"> Services </strong>

                  <nav
                    aria-label="Footer Services Nav"
                    className="flex flex-col mt-8 space-y-1"
                  >
                    <Link
                      className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                      href="mailto:hello@devow.xyz"
                    >
                      Founders
                    </Link>
                    <Link
                      className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                      href="mailto:hello@devow.xyz"
                    >
                      Investors
                    </Link>
                  </nav>
                </div>

                <div>
                  <strong className="font-medium text-black"> Support </strong>

                  <nav
                    aria-label="Footer Support Nav"
                    className="flex flex-col mt-8 space-y-1"
                  >
                    <Link
                      className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                      href="mailto:hello@devow.xyz"
                    >
                      Contact
                    </Link>
                    <Link
                      className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                      href="/"
                    >
                      FAQ
                    </Link>
                  </nav>
                </div>
                <div>
                  <strong className="font-medium text-black "> Policy </strong>

                  <nav
                    aria-label="Footer About Nav"
                    className="flex flex-col mt-8 space-y-1"
                  >
                    <Link
                      className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                      href="/"
                    >
                      Privacy
                    </Link>
                    <Link
                      className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                      href="/ "
                    >
                      Legal advise
                    </Link>
                    <Link
                      className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                      href="/ "
                    >
                      T{"&"}C
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-2 ">
              <p className="flex justify-center text-center text-black text-xs/relaxed">
                © DEVOW 2023. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
