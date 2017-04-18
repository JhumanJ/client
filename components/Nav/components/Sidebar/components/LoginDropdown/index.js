import {style} from 'glamor'

export default ({name, ...props}) => (
    <div className={styles.container}>
        <span className={styles.name}>{name}  <i className="fa fa-caret-down" aria-hidden="true"></i></span>
    </div>
)

const styles = {
    container: style({
        padding: '15px 25px'
    }),
    name: style({
        fontFamily: 'Lato, sans-serif',
        fontSize: '13px',
        color: 'white',
    })
}
