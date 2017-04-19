import {style} from 'glamor'

export default ({title, detail, ...props}) => (
    <div className={styles.container}>
        <h4>{title}</h4>
        <p className={styles.detail}>{detail}</p>
    </div>
)

const styles = {
    container: style({
        padding: '10px',
        background: 'none',
        border: '1px solid #bbb',
        transition: '150ms',
        borderRadius: '3px',
        marginBottom: '5px',

        ':hover': {
            boxShadow: '0 1px 2px rgba(0, 0, 0, .16)',
            background: '#e8e8e8',
        },
    }),
    detail: style({
        margin: 0,
    })
}