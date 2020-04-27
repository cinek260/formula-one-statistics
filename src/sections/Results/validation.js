import { func, arrayOf, shape, string } from "prop-types";

export default {
  fetchResults: func.isRequired,
  results: arrayOf(
    shape({
      raceName: string.isRequired,
      Results: arrayOf(
        shape({
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
        })
      ).isRequired,
    })
  ).isRequired,
};
