import css from './style.module.css'
import { IoArrowBack } from 'react-icons/io5';


const { Link } = require("react-router-dom")

const ButtonBack = ({ location }) => { 
    const backLinkHref = location.state?.from??'/'
    return <Link className={css.btnBack} to={backLinkHref}><IoArrowBack></IoArrowBack>back</Link>
}
 export default ButtonBack