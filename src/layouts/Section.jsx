import React from 'react'
import { Message } from 'semantic-ui-react'
import JobAdvertList from '../pages/JobAdvertList'

export default function Section() {
    return (
        <div className="section">
            <Message
                warning
                header='Job Advert'
                content='All job postings are listed.'
            />
            <JobAdvertList/>
        </div>
    )
}
