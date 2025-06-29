import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
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
    const pdfRef = useRef();
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

  const generatePdf = async () => {
    setStatus(false);
    console.log(pdfRef);

    if (pdfRef.current) {
      try {
        const canvas = await html2canvas(pdfRef.current, {
          scale: 4,
          useCORS: true,
        });
        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfheight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfheight);
        pdf.save(`${client.invoiceno}.pdf`);
      } catch (error) {
        console.log(error);
      }
    }
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
        setStatus,
        pdfRef,
        generatePdf
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
