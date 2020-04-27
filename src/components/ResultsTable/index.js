import React from "react";
import { Table } from "evergreen-ui";
import { arrayOf, shape, func, string } from "prop-types";

const ResultsTableComponent = ({ data, handleResultSelect }) => (
  <Table border width="100%">
    <Table.Head>
      <Table.TextHeaderCell>Position</Table.TextHeaderCell>
      <Table.TextHeaderCell>Driver name</Table.TextHeaderCell>
      <Table.TextHeaderCell>Constructor name</Table.TextHeaderCell>
    </Table.Head>
    <Table.VirtualBody height={500} width="100%">
      {data.map((item) => (
        <Table.Row
          key={item.number}
          isSelectable
          onSelect={() => handleResultSelect(item)}
        >
          <Table.TextCell>{item.position}</Table.TextCell>
          <Table.TextCell>{`${item.Driver.givenName} ${item.Driver.familyName}`}</Table.TextCell>
          <Table.TextCell>{item.Constructor.name}</Table.TextCell>
        </Table.Row>
      ))}
    </Table.VirtualBody>
  </Table>
);

ResultsTableComponent.propTypes = {
  data: arrayOf(
    shape({
      number: string.isRequired,
      position: string.isRequired,
      Driver: shape({
        givenName: string.isRequired,
        familyName: string.isRequired,
      }),
      Constructor: shape({
        name: string.isRequired,
      }),
    })
  ),
  handleResultSelect: func.isRequired,
};

export default ResultsTableComponent;
