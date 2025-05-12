import Avatar from "./Avatar"
import Experiences from "./Experiences"


const Identity = (props) => {    
    const alertName = () => {
        alert("Bonjour je m'appelle " + props.data.firstName)
    }

    return (
        <article>
            {
                props.isFromRi7 ? <p>Yes, tu es de Ri7 !</p> : <p>Tu n'es pas de Ri7</p>
            }
            <h2>{props.data.firstName} {props.data.lastName}</h2>
            <Avatar path={props.data.avatar}/>
            <p>Campus : {props.data.campus}</p>
            <p>Langage préféré : {props.data.favLanguage}</p>
            {/* <Experiences */}
            <button onClick={alertName}>Yolo</button>
        </article>
    )
}

export default Identity