import { Route, Routes } from "react-router-dom"
import NavbarUser from "../navbar/navbar"
import HomePagesHero from "../componen/hompages-1"
import StoptWarch from "../componen/stoptwarch"

const RouterIndex = () => {
    return (
        <div>
            <NavbarUser />
            <Routes>
                <Route path="/" element={<HomePagesHero />} />
                <Route path="/stoptwarch" element={<StoptWarch />} />
            </Routes>
        </div>
    )
}

export default RouterIndex