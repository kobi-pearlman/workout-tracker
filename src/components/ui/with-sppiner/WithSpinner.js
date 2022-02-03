import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyles";

const WithSpinner = (WrappedComponent) => {
  const loading = ({ isLoading, isReady }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      isReady && <WrappedComponent />
    );
  };

  return loading;
};

export default WithSpinner;
