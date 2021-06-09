import React, {useState,useEffect} from 'react'
import {Table} from 'semantic-ui-react'
import CandidateService from '../services/candidateService'

export default function CandidateList() {

    const[candidates,setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()

        candidateService.getCandidates()
                        .then(result => setCandidates(result.data.data))
    })


    return (
        <Table color="brown">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Surname</Table.HeaderCell>
                    <Table.HeaderCell>National ID</Table.HeaderCell>
                    <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    candidates.map(candidate => (
                        <Table.Row key={candidate.id}>
                            <Table.Cell>{candidate.name}</Table.Cell>
                            <Table.Cell>{candidate.surname}</Table.Cell>
                            <Table.Cell>{candidate.nationalId}</Table.Cell>
                            <Table.Cell>{candidate.dateofBirth}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}
