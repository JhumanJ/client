import {style} from 'glamor'
import Link from 'next/link'

export default ({children, href, active, ...props}) => {
  return (
    <Link href={href} prefetch {...props}>
      <a
        className={`${styles.link} ${active ? styles.active : ''}`}
        children={children} />
    </Link>
  )
}

const styles = {
  link: style({
    '&, :focus': {
      display: 'block',
      padding: '15px 25px',
      color: 'white',
      fontFamily: 'Lato, sans-serif',
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '13px'
    },

    ':hover': {
      background: 'rgba(0, 0, 0, .1)',
      color: '#FECA45',
      textDecoration: 'none'
    },

    ':active': {
      background: 'rgba(0, 0, 0, .1)',
      color: '#FECA45',
      textDecoration: 'none'
    }
  }),

  active: style({
    color: '#FECA45',
    background: 'rgba(0, 0, 0, .1)'
  })
}
