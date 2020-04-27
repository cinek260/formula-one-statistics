import React from "react";
import { Flex } from "reflexbox";
import { Pane, Heading } from "evergreen-ui";
import { node } from "prop-types";

const MainLayout = ({ children }) => (
  <Flex width={1} p={2} alignItems="center" flexDirection="column">
    <Pane>
      <Heading size={900} padding={32}>
        Formula One Statistics
      </Heading>
    </Pane>
    {children}
  </Flex>
);

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
