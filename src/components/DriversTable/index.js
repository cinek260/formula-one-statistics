import React, { useState, useEffect } from "react";
import { Table } from "evergreen-ui";
import { filterResults } from "./utils";
import { arrayOf, shape, string } from "prop-types";

const DriversTableComponent = ({ data }) => {
  const [visibleData, setVisibleData] = useState(data);
  const [nameFilter, setNameFilter] = useState("");
  const [nationalityFilter, setNationalityFilter] = useState("");

  useEffect(() => {
    setVisibleData(filterResults(data, nameFilter, nationalityFilter));
  }, [data, nameFilter, nationalityFilter]);

  return (
    <Table border width="100%">
      <Table.Head>
        <Table.SearchHeaderCell
          width="33.33%"
          onChange={setNameFilter}
          placeholder="Search by name..."
        />
        <Table.SearchHeaderCell
          width="33.33%"
          onChange={setNationalityFilter}
          placeholder="Search by nationality..."
        />
        <Table.TextHeaderCell>Date of birth</Table.TextHeaderCell>
      </Table.Head>
      <Table.VirtualBody height={500} width="100%">
        {visibleData.map((item) => (
          <Table.Row key={item.driverId}>
            <Table.TextCell>{`${item.givenName} ${item.familyName}`}</Table.TextCell>
            <Table.TextCell>{item.nationality}</Table.TextCell>
            <Table.TextCell isNumber>{item.dateOfBirth}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.VirtualBody>
    </Table>
  );
};

DriversTableComponent.propTypes = {
  data: arrayOf(
    shape({
      driverId: string.isRequired,
      givenName: string.isRequired,
      familyName: string.isRequired,
      dateOfBirth: string.isRequired,
      nationality: string.isRequired,
    })
  ),
};

export default DriversTableComponent;
