import React, { useContext, useRef, useState } from "react";
import { InvoiceContext } from "../Context/InvoiceContext";
import  html2pdf  from "html2pdf.js";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const Home = () => {
  const {
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
  } = useContext(InvoiceContext);
  const pdfRef = useRef();
  const generatePdf = async() => {
    setStatus(false);
    console.log(pdfRef)

    if(pdfRef.current){
      try {
        const canvas = await html2canvas(pdfRef.current,{
          scale: 2,
          useCORS: true,
        })
        const imgData = canvas.toDataURL('image/jpeg',1.0)
        const pdf = new jsPDF('p','mm','a4')
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfheight = (canvas.height * pdfWidth)/ canvas.width;
        pdf.addImage(imgData,'JPEG',0,0,pdfWidth,pdfheight);
        pdf.save(`${client.invoiceno}invoice.pdf`)
      } catch (error) {
        console.log(error)
      }
    };
    

  };
  return (
    <>
      <div className=" grid mx-auto ">
        <div ref={pdfRef} className="grid element ">
          <div className="element w-full flex justify-start bg-primary-content">
            <form className="flex justify-between p-3 w-full">
              <div className="p-3 grid gap-3">
                <label className="flex w-auto justify-center items-center gap-3">
                  <span className="w-32">Client Name</span>
                  {status ? (
                    <input
                    type="text"
                    placeholder="Enter Client Name"
                    required
                    className="element w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  ):(
                    <h1>{client.name}</h1>
                  )}
                </label>
                <label className="flex w-auto justify-center items-center gap-3">
                  <span className="w-32">Address</span>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    required
                    className="element w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>
              <div className="p-3 grid gap-3">
                <label className="flex w-auto justify-center items-center gap-3">
                  <span className="w-32">Invoice No</span>
                  <input
                    type="text"
                    placeholder="Enter your Invoice number"
                    required
                    className="element w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
                <label className="flex w-auto justify-center items-center gap-3">
                  <span className="w-32">Date</span>
                  <input
                    type="date"
                    value={client.date}
                    placeholder="Enter Address"
                    required
                    onChange={(e) =>
                      setClient({ ...client, date: e.target.value })
                    }
                    className=" element w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>
            </form>
          </div>
          <div className="element overflow-x-auto">
            <table className="element table">
              {/* head */}
              <thead className="element">
                <tr>
                  <th>S.no</th>
                  <th>Description</th>
                  <th>quantity</th>
                  <th>Price/unit</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody >
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.description}</td>
                      <td>{item.quantity}</td>
                      <td>{item.rateperunit}</td>
                      <td>{item.amount}</td>
                      <td>
                        {status ? (
                          <div>
                            <button
                              type="button"
                              onClick={() => {
                                handleEdit(index);
                              }}
                              className="btn"
                            >
                              <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                handleDelete(index);
                              }}
                              className="btn"
                            >
                              <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <button type="button" className="btn hidden"></button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="mt-24" >
                <tr>
                  <td>
                    {status ? (
                      <button
                        type="button"
                        onClick={() => {
                          document.getElementById("my_modal_5").showModal(),
                            setItem({
                              description: "",
                              quantity: 1,
                              rateperunit: "",
                              amount: "",
                            });
                        }}
                        className="bg-primary cursor-pointer"
                      >
                        <svg
                          className="w-6 h-6 text-primary-content dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14m-7 7V5"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="bg-primary hidden cursor-pointer"
                      ></button>
                    )}
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <h1>Sub Total Amount </h1>
                    <h1>Tax Amount(5%)</h1>
                    <h1 className="text-xl font-bold">Grand Total</h1>
                  </td>
                  <td>
                    <h1>
                      {items.reduce((sum, item) => {
                        return (
                          parseInt(item.quantity) * parseInt(item.rateperunit) +
                          sum
                        );
                      }, 0)}
                    </h1>
                    <h1>
                      {items.reduce((sum, item) => {
                        return (
                          parseInt(item.quantity) * parseInt(item.rateperunit) +
                          sum
                        );
                      }, 0) *
                        (5 / 100)}
                    </h1>
                    <h1 className="text-xl font-bold">
                      {items.reduce((sum, item) => {
                        return (
                          parseInt(item.quantity) * parseInt(item.rateperunit) +
                          sum
                        );
                      }, 0) +
                        items.reduce((sum, item) => {
                          return (
                            parseInt(item.quantity) *
                              parseInt(item.rateperunit) +
                            sum
                          );
                        }, 0) *
                          (5 / 100)}
                    </h1>
                  </td>
                </tr>
              </tfoot>
            </table>

          </div>
        </div>
        
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className="modal-action">
                  <form
                    method="dialog"
                    onSubmit={handleSubmit}
                    className="grid gap-2 p-4"
                  >
                    {/* if there is a button in form, it will close the modal */}
                    <label className="flex w-auto justify-center items-center gap-3">
                      <span className="w-32">Description</span>
                      <input
                        type="text"
                        value={item.description}
                        placeholder="Enter item detail"
                        required
                        onChange={(e) =>
                          setItem({ ...item, description: e.target.value })
                        }
                        className=" w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                    <label className="flex w-auto justify-center items-center gap-3">
                      <span className="w-32">Quantity</span>
                      <input
                        type="tel"
                        value={item.quantity}
                        placeholder="Enter item Quantity"
                        required
                        className=" w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) =>
                          setItem({ ...item, quantity: e.target.value })
                        }
                      />
                    </label>
                    <label className="flex w-auto justify-center items-center gap-3">
                      <span className="w-32">Rate/unit</span>
                      <input
                        type="tel"
                        value={item.rateperunit}
                        placeholder="Enter per item rate "
                        required
                        onChange={(e) =>
                          setItem({ ...item, rateperunit: e.target.value })
                        }
                        className=" w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                    <label className="flex w-auto justify-center items-center gap-3">
                      <span className="w-32">Amount</span>
                      <input
                        type="tel"
                        value={item.amount}
                        placeholder="Enter per item rate "
                        required
                        onChange={(e) =>
                          setItem({
                            ...item,
                            amount:
                              parseInt(item.quantity) *
                              parseInt(item.rateperunit),
                          })
                        }
                        className=" w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                    <div className="flex justify-between">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_5").close()
                        }
                        className="btn bg-red-500  text-primary-content rounded-lg "
                      >
                        close
                      </button>
                      <button
                        type="submit"
                        className="btn bg-primary  text-primary-content rounded-lg "
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
        <button type="button" onClick={generatePdf}>
          Generate Pdf
        </button>
      </div>
    </>
  );
};

export default Home;
