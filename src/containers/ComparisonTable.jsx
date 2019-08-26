import { Table } from "semantic-ui-react";
import React from "react";

const ComparisonTable = props => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Attributes</Table.HeaderCell>
        <Table.HeaderCell>{props.cityA}</Table.HeaderCell>
        <Table.HeaderCell>{props.cityB}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {/* {/* {props.label(props.section, "a")} */}
      {props.label(props.section, "a")}
      {/* <Table.Row>{props.data(props.section, "b")}</Table.Row> */}
      {/* {props.data(props.section, "a")} */}
    </Table.Body>
  </Table>
);

export default ComparisonTable;
