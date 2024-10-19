import { Footer,Header } from "./index"
import { Outlet } from "react-router-dom"
export const Layout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}