import { Table } from 'semantic-ui-react'
import React from 'react'
const ComparisonTable = (props) => (
  <Table celled>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Attribute</Table.HeaderCell>
      <Table.HeaderCell>{props.cityA}</Table.HeaderCell>
      <Table.HeaderCell>{props.cityB}</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell>No Name Specified</Table.Cell>
      <Table.Cell>Unknown</Table.Cell>
      <Table.Cell negative>None</Table.Cell>
    </Table.Row>
    <Table.Row positive>
      <Table.Cell>Jimmy</Table.Cell>
      <Table.Cell>None</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Jamie</Table.Cell>
      <Table.Cell>Unknown</Table.Cell>
    </Table.Row>
    <Table.Row negative>
      <Table.Cell>Jill</Table.Cell>
      <Table.Cell>Unknown</Table.Cell>
      <Table.Cell>None</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
  )

  export default ComparisonTable