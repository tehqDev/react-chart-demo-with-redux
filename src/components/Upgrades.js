import React from "react";
import styled from "styled-components";

const StyledUpgrades = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  min-height: 200px;
  margin: 10px 0px 0px 0px;
  width: 80%;
  border-style: solid;
  overflow: auto;
  padding: 10px;
  align-items: center;
`;

const Upgrades = () => {
  return <StyledUpgrades>..upgrades</StyledUpgrades>;
};

export default Upgrades;
