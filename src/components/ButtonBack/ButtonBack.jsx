const { Link } = require("react-router-dom")

const ButtonBack = ({ location }) => { 
    const backLinkHref = location.state?.from??'/'
    return <Link to={backLinkHref}>back</Link>
}
 export default ButtonBack