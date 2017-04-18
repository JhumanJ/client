import {style} from 'glamor'

export default (props) => <h1 className={styles.h1} {...props}/>

const styles = {
    h1: style({
        fontSize: '3em',
        fontFamily: 'Lato, sans-serif',
        color: 'black',
        fontWeight: '400',
        marginBottom: '20px',
    })
}
