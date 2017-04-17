import {style} from 'glamor'
import Link from 'next/link'

export default ({children, ...props}) => (
    <Link prefetch {...props}>
        <a className={styles.link} children={children}/>
    </Link>
)

const styles = {
    link: style({
        display: 'block',
        padding: '15px 25px',
        color: 'white',
        fontFamily: 'Helvetica Neue, sans-serif',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '13px',

        ':hover': {
            background: 'rgba(0, 0, 0, .1)'
        }
    })
}
