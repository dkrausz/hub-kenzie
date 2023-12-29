import { Routes , Route } from "react-router-dom"
import { RegisterPage } from "../pages/registerPage"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { NotFoundPage } from "../pages/NotFoundPage"


export const RoutesMain = ()=>{
    return(
<Routes>
        
<Route path="/" element={<LoginPage/>} />
<Route path="/register" element={<RegisterPage/>} />
<Route path="/dashboard" element={<DashboardPage/>} />
<Route path="*" element={<NotFoundPage/>}/>

</Routes>

    )
}