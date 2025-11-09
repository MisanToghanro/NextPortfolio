import Link from "next/link";



const ThankYou = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-3xl font-bold text-blue-600 mb-4">Thank You!</h1>
    <p className="text-lg text-gray-700">
      Your message has been sent successfully. I’ll get back to you soon!
    </p>
    <Link href="/">retun to HomePage</Link>
  </div>
);

export default ThankYou;
