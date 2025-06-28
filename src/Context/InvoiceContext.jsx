import React, { createContext, useEffect, useState } from "react";

export const InvoiceContext = createContext();
const InvoiceProvider = ({ children }) => {
  const [client, setClient] = useState({
    name: "",
    address: "",
    invoiceno: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [item, setItem] = useState({
    description: "",
    quantity: 1,
    rateperunit: "",
    tax: "",
    amount: "",
  });
  const [items, setItems] = useState([]);
  useEffect(() => {}, []);
  const handleSubmit = () => {
    setItems(() => {
      items.push(item);
    });
    setItem({
      description: "",
      quantity: 1,
      rateperunit: "",
      tax: "",
      amount: "",
    });
    console.log(items);
  };
  return (
    <InvoiceContext.Provider
      value={{ client, setClient, items, item, setItem, handleSubmit }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
