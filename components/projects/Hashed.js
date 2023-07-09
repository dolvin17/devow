import Link from "next/link";

export default function Hashed() {
  return (
    <>
      <div className="relative">
        <video
          className="object-cover md:w-max md:h-max"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="mt-8 text-2xl font-bold text-center text-white sm:text-5xl shadow-color-black font-apple-system "
            style={{ textShadow: "0 0 32px black" }}
          >
            Divow Alerts AI technology for the markets
          </div>
          <div
            className="max-w-lg text-center text-white shadow-color-black font-apple-system sm:text-2xl"
            style={{ textShadow: "0 0 32px black" }}
          >
            Trade alerts, when to buy, when to sell
            <form className="my-16">
              <Link
                href="/comunidad"
                target="_blank"
                className="px-5 py-3 font-medium text-white transition bg-black rounded-full md:text-xl hover:bg-red-600"
              >
                Invest Now
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto my-8">
        <h2 className="font-bold">Highlights</h2>
        <lu>
          Blockchain technology can introduce various mechanisms to protect
          investors interests. For example, smart contracts can enforce
          predefined conditions for fund disbursement, ensuring that funds are
          released to entrepreneurs based on predetermined milestones or project
          achievements. This feature helps mitigate risks for investors and
          provides them with more control over their investments.
        </lu>
      </div>
      <div className="w-1/2 mx-auto my-8">
        <h3 className="w-1/2 mx-auto my-8 font-bold text-slate-600">
          {" "}
          PROBLEM
        </h3>
        <h2 className="font-bold">
          The odds are stacked against individual investors through no fault of
          their own
        </h2>
        <lu>
          Algorithmic trading accounts for around 60-73% of the overall US
          equity markets in 2021 — individuals can not compete Trading alone is
          expensive to learn and hazardous to mitigate portfolio risk Reliable,
          immediate and accurate data is hard to come by
        </lu>
      </div>
    </>
  );
}
