import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getResults } from "../../data/actions";
import ResultsTable from "../../components/ResultsTable";
import ResultDialog from "../../components/ResultDialog";
import { Combobox, Text } from "evergreen-ui";
import { Flex, Box } from "reflexbox";
import { getFormulaOneSeasons, getRaceNames } from "./utils";
import PropTypesValidation from "./validation";

const seasons = getFormulaOneSeasons();

const ResultsPage = ({ fetchResults, results }) => {
  const [year, setYear] = useState(2019);
  const [raceName, setRaceName] = useState();
  const [raceNames, setRaceNames] = useState(getRaceNames(results));
  const [resultDetails, setResultDetails] = useState(null);

  useEffect(() => {
    fetchResults(year);
  }, [fetchResults, year]);

  useEffect(() => {
    const currentRaceNames = getRaceNames(results);
    setRaceNames(currentRaceNames);
    setRaceName(currentRaceNames[0]);
  }, [results]);

  return (
    <>
      <Flex width={1}>
        <Box width={[1, 1 / 2]} p={2}>
          <Text>Choose season</Text>
          <Combobox
            openOnFocus
            items={seasons}
            onChange={setYear}
            placeholder="Year"
            inputProps={{ value: year }}
            width="100%"
          />
        </Box>
        <Box width={[1, 1 / 2]} p={2}>
          <Text>Choose race</Text>
          <Combobox
            openOnFocus
            items={raceNames}
            onChange={setRaceName}
            placeholder="Race"
            inputProps={{ value: raceName }}
            width="100%"
          />
        </Box>
      </Flex>
      <Box p={2} width={1}>
        <ResultsTable
          {...{
            data: results.find((r) => r.raceName === raceName)?.Results || [],
            handleResultSelect: setResultDetails,
          }}
        />
      </Box>
      <ResultDialog
        {...{ resultDetails, handleClose: () => setResultDetails(null) }}
      />
    </>
  );
};

ResultsPage.propTypes = PropTypesValidation;

export default connect((state) => ({ results: state.results }), {
  fetchResults: getResults,
})(ResultsPage);
