import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">

      <div>
        <h1 className="text-4xl font-bold mb-4">To Dooo Application..</h1>

        <Link href = "/signin" className=" m-4 p-2  border border-amber-50 rounded-2xl bg-gray-500 hover:bg-gray-700 text-white ">
          Sign In
        </Link>
        <Link href = "/signup" className=" m-4 p-2  border border-amber-50 rounded-2xl bg-gray-500 hover:bg-gray-700 text-white ">
          Sign Up
        </Link>
        
      </div>
    </div>
  )
}
