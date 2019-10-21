import React from "react";
import { Container } from "../about-components/Container";
import Logos from "../about-components/Logos";

const ECommerce = () => {
  const data = [
    { url: "../static/logo-shopify.svg", alt: "Shopify Logo" },
    { url: "../static/logo-stripe.svg", alt: "Stripe Logo" }
  ];
  return (
    <Container>
      <h2>E-Commerce Stores</h2>
      <Logos data={data} />
      <h3>Server Rendered Static Sites with Shopify or Stripe Integrations</h3>
      <p>
        Custom shopping carts and e-commerce solutions with using Shopify and
        Stripe to handle payment and fulfillments
      </p>
    </Container>
  );
};

export default ECommerce;
