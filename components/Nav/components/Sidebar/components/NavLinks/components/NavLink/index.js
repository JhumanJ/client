import {style,hover,css} from 'glamor'
import Link from 'next/link'

export default ({children, ...props}) => (
    <Link prefetch {...props}>
        <a className={css(styles.link)} children={children}/>
    </Link>
)

const styles = {
    link: style({
        display: 'block',
        padding: '15px 25px',
        color: 'white',
        fontFamily: 'Lato, sans-serif',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '13px',
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
}
