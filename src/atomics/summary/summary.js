import React from "react";
import { numberWithCommas } from "../../helper/helper";
import useJakmallStore from "../../store/store";

import { Container, Details, Title, Text } from "./style";

const Summary = () => {
  const context = useJakmallStore((state) => state);

  const grandTotal = context.totalItemPurchased * context.costOfGood;

  return (
    <Container>
      <Details>
        <Title>Cost of goods</Title>
        <Text>
          {numberWithCommas(context.totalItemPurchased * context.costOfGood)}
        </Text>
      </Details>
      <Details>
        <Title>Dropshipping fee</Title>
        <Text>
          {context.isDropshipper
            ? numberWithCommas(context.dropshippingFee)
            : 0}
        </Text>
      </Details>
      <Details total>
        <Title total>Total</Title>

        <Text total>
          {context.isDropshipper
            ? numberWithCommas(grandTotal + context.dropshippingFee)
            : numberWithCommas(grandTotal)}
        </Text>
      </Details>
    </Container>
  );
};

export default Summary;
