import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDrivers } from "../../data/actions";
import PieChartComponent from "../../components/PieChart";
import DriversTable from "../../components/DriversTable";
import { parseDriversByNationalities } from "./utils";
import { Heading } from "evergreen-ui";
import { Flex, Box } from "reflexbox";
import { func, arrayOf, shape, string } from "prop-types";

const DriversPage = ({ fetchDrivers, drivers }) => {
  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);
  const driversNationalitiesData = parseDriversByNationalities(drivers);
  return (
    <Flex width={1} flexWrap="wrap">
      <Box p={2} width={[1, 1 / 2]}>
        <Heading size={700} padding={32}>
          F1 drivers
        </Heading>
        <DriversTable {...{ data: drivers }} />
      </Box>
      <Box p={2} width={[1, 1 / 2]}>
        <Flex alignItems="center" flexDirection="column">
          <Heading size={700} padding={32}>
            Top 10 most common drivers nationalities
          </Heading>
          <PieChartComponent {...{ data: driversNationalitiesData }} />
        </Flex>
      </Box>
    </Flex>
  );
};

DriversPage.propTypes = {
  fetchDrivers: func.isRequired,
  drivers: arrayOf(
    shape({
      driverId: string.isRequired,
      givenName: string.isRequired,
      familyName: string.isRequired,
      dateOfBirth: string.isRequired,
      nationality: string.isRequired,
    })
  ).isRequired,
};

export default connect((state) => ({ drivers: state.drivers }), {
  fetchDrivers: getDrivers,
})(DriversPage);
