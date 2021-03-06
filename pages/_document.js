import Document, {Head, Main, NextScript} from 'next/document'
import {renderStatic} from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return {...page, ...styles}
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='https://unpkg.com/react-select/dist/react-select.css' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' />
          <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' crossorigin='anonymous' />
          <link href='https://fonts.googleapis.com/css?family=Lato|Lato:300|Open+Sans' rel='stylesheet' />
          <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'crossorigin='anonymous' />
          <link rel='stylesheet' href='static/css/styles.css' />
          <link rel='stylesheet' href='static/css/react-dates/datepicker.css' />
          <title>PEACH Cancer</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />

          <link rel='icon' type='image/png' href='static/img/favicon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
