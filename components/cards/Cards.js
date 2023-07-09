import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Cards() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 py-8 pb-10 bg-gradient-to-r from-lime-100 via-slate-100 to-lime-100 md:flex-row">
        <BlogPost
          title="Aptera Motors"
          imageURL="/proyecto1.png"
          href="/"
          description="Grid-independent, solar-charging vehicles | The efficient 1,000 mile EV"
          className="text-right"
        />

        <BlogPost
          title="On-chain systems"
          imageURL="/proyecto2.png"
          href="/"
          description="Grid-independent, solar-charging vehicles | The efficient 1,000 mile EV"
        />

        <BlogPost
          title="Coffee Enterprises"
          imageURL="/proyecto3.jpg"
          href="/metamask"
          description="Grid-independent, solar-charging vehicles | The efficient 1,000 mile EV"
        />
      </div>
    </>
  );
}

function BlogPost({ title, imageURL, href, description }) {
  return (
    <article className="flex pt-4 flex-col w-full max-w-[16rem] mt-8 transition  bg-white/90 border-2 rounded-md border-black hover:shadow-m sm: ">
      <div className="relative w-full h-[10rem] bg-white/50	">
        <Image
          className="object-contain w-full h-full rounded-xl"
          fill
          src={imageURL}
          alt=""
        />
        <div className="flex items-center justify-center gap-32 mt-32 w-14 h-14">
          <img
            src="/nakamoto.png"
            width={30}
            height={30}
            alt="Foto"
            className="object-fill w-full h-full border-2 rounded-full "
          />
        </div>
      </div>

      <div className="flex flex-col justify-center lg:flex-row">
        <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
          <h3 className="pb-4 font-bold text-center text-black uppercase">
            {title}
          </h3>

          {description}
        </div>

        <div className="sm:flex sm:items-end sm:justify-end"> SAasaKSKK</div>
        <p></p>
      </div>
    </article>
  );
}
