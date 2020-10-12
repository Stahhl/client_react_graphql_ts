import React, { ReactNode } from "react";
import "./App.css";
import { useQuery, gql } from '@apollo/client';

interface IProps {
  currency: string;
  rate: string;
  // any other props that come into the component
}

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function App() {
  return (
    ExchangeRates()
  );
}

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }: IProps) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default App;
