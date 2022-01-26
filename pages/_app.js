import '../styles/globals.css'
import Link from 'next/link'
import image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold text-green-600">World Bonus NFT Market</p>
        <div className="flex mt-4"></div>
        <Link href="/">
          <a className="mr-4 font-semibold hover:font-bold text-blue-900">Home</a>
        </Link>
        <Link href="/create-item">
          <a className="mr-6 font-semibold hover:font-bold text-blue-900">Sell NFT</a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-6 font-semibold hover:font-bold text-blue-900">My NFT</a>
        </Link>
        <Link href="/creator-dashboard">
          <a className="mr-6 font-semibold hover:font-bold text-blue-900">Dashboard</a>
        </Link>
      </nav> 
      <Component {...pageProps} />
    </div>
  
  )
}

export default MyApp