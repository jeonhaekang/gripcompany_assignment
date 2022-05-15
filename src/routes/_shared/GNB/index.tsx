import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import styles from './GNB.module.scss'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            메인페이지
          </NavLink>
        </li>
        <li>
          <NavLink to='/bookmark' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            북마크
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
