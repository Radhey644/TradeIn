import Footer from '@/components/Footer/Footer'
import Home from '@/components/UI-asset/Home'
import TradeInNavbar from '@/components/Navbar/Navbar'
import Image from 'next/image'

export default function Page() {
  return (
    <main>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous"  />
    <TradeInNavbar />
    <Home/>    
    <Footer/>
    </main>
  )
}
