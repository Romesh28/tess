import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useState} from "react";
import MainLayout from "../components/MainLayout";
const Home=() =>{
    const [id,setId]=useState('')
  return (
      <MainLayout>
    <div className={styles.container}>
        <Head>
            <title>Home pages</title>
        </Head>
      <h1>home</h1>
        <input type="text" onChange={e=>setId(e.target.value)}/><br/>
        <Link href="./posts">Posts</Link><br/>
        <Link href="./posts/TEN">Posts je</Link><br/>
        <Link href={`./posts/${id}`}><a>id - {id}</a></Link><br/>
        <Link href="./about">about</Link><br/>
      <Link href="./posts/je">je</Link>
    </div>
      </MainLayout>
  )
}
export default Home;
