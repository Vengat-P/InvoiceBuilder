
import { html2pdf } from "html2pdf.js";
import React, { createContext, useEffect, useRef, useState } from "react";
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
    amount: "",
  });
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(true);
  useEffect(() => {}, []);
  const handleSubmit = () => {
    // console.log(items);
    setItems([...items, item]);
  };
  const handleEdit = (index) => {
    document.getElementById("my_modal_5").showModal();
    const editItem = items[index];
    // console.log(editItem)
    setItem(editItem);
    items.splice(index, 1);
    // console.log(items)
    setItems(items, item);
  };
  const handleDelete = (index) => {
    items.splice(index, 1);
    setItems(items.length > 0 ? [...items] : []);
  };

  return (
    <InvoiceContext.Provider
      value={{
        client,
        setClient,
        items,
        item,
        setItem,
        handleSubmit,
        handleEdit,
        handleDelete,
        status,
        setStatus
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
