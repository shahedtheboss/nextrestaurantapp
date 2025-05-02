import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Products from '../components/Products'
import axios from 'axios'

export default function Home({products}) {
  // console.log(products);
  return (
    <div >
      <Header />
      <Slider />
      <Products products={products}/>
    </div>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get(`https://nextpro-shahedtheboss.vercel.app/api/products`)

  return{
    props:{
      products: res.data
    },
  }
}
