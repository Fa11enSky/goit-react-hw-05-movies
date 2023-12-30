import icon from '../../assets/mobie_db.svg'
import css from './Footer.module.css'
const Footer = () => {
  return (
    <footer>
      <div className={css.footer_container}>
        <a href="https://www.themoviedb.org/" target="blank">
          <img src={icon} alt="" width={50} height={50} />
        </a>
        <p>Developed using "TheMovieDB" API</p>
      </div>
    </footer>
  );
}

export default Footer
