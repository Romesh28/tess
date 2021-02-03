import Link from 'next/link'
import cls from '../styles/error.module.scss'
const ErrorPage=()=>{
    return <>
      <h1 className={cls.error}>Error 404</h1>
        <p>Please <Link href="/"><a>go back</a></Link></p>
    </>
}
export default ErrorPage
