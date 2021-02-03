import {useState,useEffect} from 'react'
import {useRouter} from "next/router";
import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import Link  from "next/link";

const Index=({post:serverPosts})=>{
    const [posts,setPosts] = useState(serverPosts)
    const router = useRouter()
    const clickHandler =()=>{
        router.push('/')
    }
    useEffect(()=>{
        async function l(){
            const res = await fetch('http://localhost:4200/posts')
            const posts = await res.json()
            setPosts(posts)
        }
        if (!serverPosts){
            l()
        }

    },[])
          if (!posts){
              return <p>loading.....</p>
          }
    return <><MainLayout>
        <div>
        <Head>
            <title>Posts</title>
        </Head>
         <h1>Posts</h1>
           <ul>
               {posts.map((post,idx)=>{return <li key={idx}>
                   <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                       <a>{post.title}</a>
                   </Link>
               </li>})}
           </ul>
    </div>
    </MainLayout>
        <style jsx>
            {
                `
                ul li {
                list-style: none;
                }
`
            }
        </style>
        </>
}
export default Index;


export async function getServerSideProps(){

    const ress = await fetch('http://localhost:4200/posts')
    const post = await ress.json()

    return {
        props:{post}
    }
}
