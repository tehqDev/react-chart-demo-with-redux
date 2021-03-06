import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getUserCash } from "../redux/selectors";

const StyledUserStats = styled.div`
  margin: 10px 0px 0px 0px;
  padding: 10px;
  border-style: solid;
  border-width: 2px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const UserStats = ({ userCash }) => {
  return (
    <StyledUserStats>
      <div>Total: ${userCash}</div>
    </StyledUserStats>
  );
};

const mapStateToProps = (store) => {
  const userCash = getUserCash(store);
  return {
    userCash: userCash
  };
};

export default connect(mapStateToProps)(UserStats);
