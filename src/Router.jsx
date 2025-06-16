import { Route, Routes } from "react-router"
import { Movies } from "./pages/Film/Movies.jsx"
import Login from "./pages/Login/Login.jsx"
import PrivateRoutes from "./PrivateRoutes.jsx"
import Header from "./partials/Header/Header.jsx"

const Router = () => {
  
  return (
    <>
        <Routes>
            <Route path="/" >
              <Route element={<Header />}>
                <Route element={<PrivateRoutes />}>
                  <Route index element={<Movies />} />
                </Route>
                <Route path="login" element={<Login />} />
              </Route>
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    </>
  )
}

export default Router