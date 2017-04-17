import {style} from 'glamor'

export default ({name, ...props}) => (
    <div className={styles.container}>
        <span className={styles.name}>{name}</span>
    </div>
)

const styles = {
    container: style({
        padding: '25px',
        background: 'rgba(0, 0, 0, .1)'
    }),
    name: style({
        fontFamily: 'Helvetica Neue, sans-serif',
        fontSize: '13px',
        color: 'white',
        fontWeight: 'bold'
    })
}