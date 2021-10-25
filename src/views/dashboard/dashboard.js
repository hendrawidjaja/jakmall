import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "../../assets/IconPack";

import { Container, BackToCart, Navigation } from "./style";

const Dashboard = ({ children, backButtonLink, backButtonText }) => {
  return (
    <Container>
      <Navigation>
        <ArrowLeft />
        {backButtonLink ? (
          <Link to={backButtonLink}>
            <BackToCart>{backButtonText}</BackToCart>
          </Link>
        ) : (
          <BackToCart>{backButtonText}</BackToCart>
        )}
      </Navigation>
      {children}
    </Container>
  );
};

export default Dashboard;
