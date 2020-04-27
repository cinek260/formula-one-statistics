import React from "react";
import { Dialog, Strong, Text, UnorderedList, ListItem } from "evergreen-ui";
import { func, shape, string } from "prop-types";

const ResultDialogComponent = ({ handleClose, resultDetails }) => {
  return (
    <Dialog
      isShown={!!resultDetails}
      title={
        resultDetails &&
        `${resultDetails.Driver.givenName} ${resultDetails.Driver.familyName} (${resultDetails.Constructor.name})`
      }
      hasFooter={false}
      onCloseComplete={handleClose}
    >
      {resultDetails ? (
        <UnorderedList>
          <ListItem>
            <Text>Number: </Text>
            <Strong>{resultDetails.number}</Strong>
          </ListItem>
          <ListItem>
            <Text>Position: </Text>
            <Strong>{resultDetails.position}</Strong>
          </ListItem>
          <ListItem>
            <Text>Points: </Text>
            <Strong>{resultDetails.points}</Strong>
          </ListItem>
          <ListItem>
            <Text>Grid: </Text>
            <Strong>{resultDetails.grid}</Strong>
          </ListItem>
          <ListItem>
            <Text>Laps: </Text>
            <Strong>{resultDetails.laps}</Strong>
          </ListItem>
          <ListItem>
            <Text>Status: </Text>
            <Strong>{resultDetails.status}</Strong>
          </ListItem>
          <ListItem>
            <Text>Time: </Text>
            <Strong>{resultDetails.Time?.time}</Strong>
          </ListItem>
          <ListItem>
            <Text>Fastest lap: </Text>
            <Strong>{resultDetails.FastestLap?.lap}</Strong>
          </ListItem>
          <ListItem>
            <Text>Fastest lap time: </Text>
            <Strong>{resultDetails.FastestLap?.Time?.time}</Strong>
          </ListItem>
          <ListItem>
            <Text>Fastest lap average speed: </Text>
            <Strong>{`${resultDetails.FastestLap?.AverageSpeed?.speed} ${resultDetails.FastestLap?.AverageSpeed?.units}`}</Strong>
          </ListItem>
        </UnorderedList>
      ) : (
        ""
      )}
    </Dialog>
  );
};

ResultDialogComponent.propTypes = {
  handleClose: func.isRequired,
  resultDetails: shape({
    number: string.isRequired,
    position: string.isRequired,
    points: string.isRequired,
    Driver: shape({
      driverId: string.isRequired,
      givenName: string.isRequired,
      familyName: string.isRequired,
      dateOfBirth: string.isRequired,
      nationality: string.isRequired,
    }).isRequired,
    Constructor: shape({
      name: string.isRequired,
    }).isRequired,
    grid: string.isRequired,
    laps: string.isRequired,
    status: string.isRequired,
    Time: shape({
      time: string.isRequired,
    }),
    FastestLap: shape({
      lap: string.isRequired,
      Time: shape({
        time: string.isRequired,
      }),
      AverageSpeed: shape({
        units: string.isRequired,
        speed: string.isRequired,
      }),
    }),
  }),
};

export default ResultDialogComponent;
