import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTheme } from "evergreen-ui";
import { arrayOf, shape, number, string } from "prop-types";

const PieChartComponent = ({ data }) => {
  const { palette } = useTheme();
  const paletteColors = Object.values(palette);
  const chartColors = [
    ...paletteColors.map((c) => c.base),
    ...paletteColors.map((c) => c.dark),
  ];

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={250}
        cy={250}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label
        labelLine
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={chartColors[index % chartColors.length]}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
    </PieChart>
  );
};

PieChartComponent.propTypes = {
  data: arrayOf(
    shape({
      value: number.isRequired,
      name: string.isRequired,
    })
  ),
};

export default PieChartComponent;
