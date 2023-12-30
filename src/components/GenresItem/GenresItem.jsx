import css from './styles.module.css'
const GenresItem = ({name}) => {
  return (
      <li className={css.item}>{name}</li>
  )
}

export default GenresItem
