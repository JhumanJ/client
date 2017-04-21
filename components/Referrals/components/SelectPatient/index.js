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
                    return axios.get('https://api.github.com/users/benjaminhadfield/repos')
                        .then(res => res.json())
                        .then(json => {
                            console.log('json', json)
                            json.map(repo => ({value: repo.id, label: repo.name}))
                        })
                }}
                isLoading={true}
                onChange={(e) => console.log(e)}
                name="select-patient"/>
        </div>
    )
}