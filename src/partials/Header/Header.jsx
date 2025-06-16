import { Link, Outlet, useNavigate } from "react-router"

const Header = () => {
    const navigate = useNavigate()
    const disconnect = ()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <button onClick={disconnect}>Déconnexion</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Header