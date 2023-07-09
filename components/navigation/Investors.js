import Link from "next/link";
import { useRouter } from "next/router";

export default function Investors() {
  const router = useRouter();
  const ROUTE = "/";
  const isActive = router.asPath == ROUTE;

  return (
    <Link
      href={ROUTE}
      className={`mx-auto text-apple-system ${isActive && "text-black"}`}
    >
      <button
        type="button"
        className="mx-8 font-mono font-bold transition transform text-ml hover:text-green-500/75"
      >
        Invest
      </button>
    </Link>
  );
}
