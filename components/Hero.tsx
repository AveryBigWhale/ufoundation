// import DonateButton from './DonateButton'
// import banner from "../public/banner.png"
// import Image from "next/image"
import ImageLoader from './ImageLoader'; 

export default function Hero() {
  return (
    <section style={{
        backgroundImage: `url(${ImageLoader({ src: '/banner.png' })})`
       }} 
       className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Make a Difference Today
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join us in our mission to create positive change in communities worldwide
        </p>
        {/* <DonateButton size="large" /> */}
      </div>
    </section>
  )
}