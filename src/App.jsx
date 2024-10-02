import { useState } from 'react'
import Navbar from './assets/Components/Navbar'
import LoginPage from './assets/Components/LoginPage'
import CreateAccount from './assets/Components/CreateAccount'
import ForgotPassword from './assets/Components/ForgotPassword'
import Checkout from './assets/Components/Checkout'
import Payment from './assets/Components/Payment'
import Hero from './assets/Components/Hero'
import Categories from './assets/Components/Categories'
import SittingRoom from './assets/Components/SittingRoom'
import ViewProduct from './assets/Components/ViewProduct'
import ArticleHero from './assets/Components/ArticleHero'
import Footer from './assets/Components/Footer'
import Cart from './assets/Components/Cart'
import OderPlaced from './assets/Components/OderPlaced'
import FAQ from './assets/Components/FAQ'
// import Design from './assets/Components/Design'


function App() {
  const [count, setCount] = useState(0)

  const topProductsData = [
    {
      img : './top-01.png',
      name : "Faux Leat...",
      price : "$129"
    },
    {
      img : './top-02.png',
      name : "Faux Leat...",
      price : "$129"
    },
    {
      img : './top-03.png',
      name : "Faux Leat...",
      price : "$129"
    },
    {
      img : './top-04.png',
      name : "Faux Leat...",
      price : "$129"
    },
    {
      img : './top-05.png',
      name : "Faux Leat...",
      price : "$129"
    },
    {
      img : './top-06.png',
      name : "Faux Leat...",
      price : "$129"
    },
    {
      img : './top-07.png',
      name : "Faux Leat...",
      price : "$129"
    },
    {
      img : './top-08.png',
      name : "Faux Leat...",
      price : "$129"
    },
  ]


  const articleData = [
    {
      img : './article-01.jpeg',
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-02.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-03.png",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-04.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-05.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-06.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
    {
      img: "./article-07.jpeg",
      header : "The Art of Minimalism How <br/> to Achieve a Sleek Look",
      detail: "Discover tips and tricks for adopting a <br/> minimalist approach to interior design and creating"

    },
  ]

  const cartData = [
    {
      img: "./article-07.jpeg",
      name : "Luxe Armchair - Left Arm Chute",
      price : 899,
    },
    {
      img: "./article-07.jpeg",
      name : "Luxe Armchair - Left Arm Chute",
      price : 899,
    },
    
  
    
  ]

  return (
    <div className=' overflow-x-clip'>
    
    {/* <LoginPage/> */}
    {/* <CreateAccount/> */}
    {/* <ForgotPassword/> */}
     {/* <Checkout/> */}
   {/* <Payment/> */}

   {/* <OderPlaced/> */}

   {/* <FAQ/> */}

   {/* <Design/> */}

    <Hero/>
    <Categories/>
    <SittingRoom topProductsData={topProductsData}/>
    
    <ViewProduct/>

    <ArticleHero articleData={articleData}/>



    <Cart cartData={cartData}/>      
    <Footer/>

    </div>
  )
}

export default App
