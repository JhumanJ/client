import Select from 'react-select'
import Head from 'next/head'
import axios from 'axios'

export default (props) => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
            </Head>
            <Select.Async
                loadOptions={(input) => {
                    console.log('input', input)
                    return axios.get('https://api.github.com/users/benjaminhadfield/repos')
                        .then(res => res.json())
                        .then(json => {
                            console.log('json', json)
                            return {options: json.map(repo => ({value: repo.id, label: repo.name}))}
                        })
                        .catch(err => console.err('react-select couldn\'t fetch data!', err))
                }}
                isLoading={true}
                onChange={(e) => console.log(e)}
                name="select-patient"/>
        </div>
    )
}