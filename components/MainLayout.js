import Link from 'next/link'
const MainLayout=({children})=>{
    return <>
    <nav>
       <Link href="/"><a>Home</a></Link>
        <Link href="/posts"><a>posts</a></Link>

    </nav>
        <hr/>
         <main>
             {children}
         </main>
        <style jsx>
            {`
                    nav{
                    position: fixed;
                    height: 60px;
                    left:0;
                    right: 0;
                    background: darkblue;
                    top:0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    }
                    nav a {
                    color:#eee;
                    }
                    main {
                    margin-top: 60px   ;
                    }
            `}
        </style>
    </>
}
export default MainLayout;
