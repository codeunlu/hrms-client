import React, {useState,useEffect} from 'react'
import {Table} from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const[employers,setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers()
                        .then(result => setEmployers(result.data.data))
    })

    return (
        <Table color="brown">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                    <Table.HeaderCell>Web Site</Table.HeaderCell>
                    <Table.HeaderCell>Telephone</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    employers.map(employer => (
                        <Table.Row key={employer.id}>
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.webURI}</Table.Cell>
                            <Table.Cell>{employer.telephone}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}
