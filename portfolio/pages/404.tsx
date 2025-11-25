import Link from "next/link";

export default function Custom404 () {

    return(
     <div className="min-h-screen flex flex-col items-center justify-center">
     <h1 className="text-6xl font-bold mb-4">404</h1>
     <p className="mb-6"> Oops! The page you’re looking for doesn’t exist.</p>
     <Link href="/"  className="px-6 py-3 bg-[#36a89c] text-white rounded-md font-medium  transition">Go back to Home Page</Link>
     </div>
    )
}

