import React, {useState, useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService'

export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts()
                        .then(result => setJobAdverts(result.data.data))
    })
    return (
        <Table color="brown">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Employer</Table.HeaderCell>
                    <Table.HeaderCell>Job Position</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Release Date</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    jobAdverts.map(jobAdvert => (
                        <Table.Row key={jobAdvert.id}>
                            <Table.Cell>{jobAdvert.employerName}</Table.Cell>
                            <Table.Cell>{jobAdvert.jobPostions}</Table.Cell>
                            <Table.Cell>{jobAdvert.quantity}</Table.Cell>
                            <Table.Cell>{jobAdvert.releaseDate}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}
