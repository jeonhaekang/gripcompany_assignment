import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import styles from './GNB.module.scss'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            main
          </NavLink>
        </li>
        <li>
          <NavLink to='/bookmark' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            bookmark
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
