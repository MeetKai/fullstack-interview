import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full size-full flex-1 items-center justify-center flex">
      <Link 
        href={'/search'} 
        className="cursor-pointer shadow rounded-md bg-slate-600 text-white font-medium px-1.5 py-2 flex"
      >
        {"Search ->"}
      </Link>
    </div>
  );
}
