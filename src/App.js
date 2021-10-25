import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import useJakmallStore from "./store/store";
import Delivery from "./views/delivery/delivery";
import Payment from "./views/payment/payment";
import Finish from "./views/finish/finish";

import { ArrowRight } from "./assets/IconPack";

import { Container, Nav, StyledLink, P, Number } from "./style";
import "./App.css";

function App() {
  const context = useJakmallStore((state) => state);

  useEffect(() => {
    context.setCheckoutProcess({
      delivery: true,
    });

    return () => {};
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Nav>
            <StyledLink
              to={context.checkoutProcess.delivery ? "/delivery" : "/"}
            >
              <Number>1</Number>
              <P active={context.checkoutProcess.delivery}>Delivery</P>
              <ArrowRight fill="#FF8A00" />
            </StyledLink>

            <StyledLink to={context.checkoutProcess.payment ? "/payment" : "/"}>
              <Number>2</Number>
              <P active={context.checkoutProcess.payment}>Payment</P>
              <ArrowRight fill="#FF8A00" />
            </StyledLink>

            <StyledLink to={context.checkoutProcess.payment ? "/finish" : "/"}>
              <Number>3</Number>
              <P active={context.checkoutProcess.payment}>Finish</P>
            </StyledLink>
          </Nav>

          <Switch>
            <Route exact path="/" component={Delivery} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/payment" component={Payment} />
            <Route path="/finish" component={Finish} />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
