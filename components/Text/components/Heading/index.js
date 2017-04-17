import {style} from 'glamor'

export default (props) => <h1 className={styles.h1} {...props}/>

const styles = {
    h1: style({
        fontSize: '24px',
        fontFamily: 'Helvetica Neue, sans-serif',
        color: '#232325',
        fontWeight: 'bold',
        marginBottom: '20px',
    })
}