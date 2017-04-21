import {style} from 'glamor'

export default ({title, detail, onDelete, ...props}) => (
    <div className={styles.container}>
        <h4>{title}</h4>
        <p className={styles.detail}>{detail}</p>
        <button
            className={styles.button}
            onClick={onDelete}
            children="Delete"/>
    </div>
)

const styles = {
    container: style({
        padding: '10px',
        background: 'white',
        border: '1px solid #ddd',
        transition: '150ms',
        borderRadius: '3px',
        marginBottom: '5px',

        ':hover': {
            boxShadow: '0 1px 2px rgba(0, 0, 0, .2)',
            background: 'dodgerblue',
            color: 'white',
        },
    }),

    detail: style({
        margin: 0,
    }),

    button: style({
        background: 'red',
        color: 'white',
        border: 0,

        ':hover': {
            background: 'darkred',
        },
    }),
}
