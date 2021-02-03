import {useState,useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from "next/router";
const Posts=({post:serverPost})=>{
const [post,setPost] = useState(serverPost)
  const router = useRouter()
    useEffect(()=>{
        async function load(){
            const resr = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await resr.json()
            setPost(data)
        }
        if (!serverPost){
            load()
        }
    },[])
    if (!post){
        return <p>loading...</p>
    }
    return <>
        <h1>{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
        <Link href="/posts"><a>go to back</a></Link>
    </>
}
export default Posts;


Posts.getInitialProps=async ({query,req})=>{
    if (!req){
        return  {post:null}
    }
    const resr = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await resr.json()
    return {
        post
    }
}

