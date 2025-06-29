import React, { useContext, useRef, useState } from "react";
import { InvoiceContext } from "../Context/InvoiceContext";

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
    pdfRef,
    generatePdf,
  } = useContext(InvoiceContext);

  return (
    <>
      <div className=" grid mx-auto ">
        <div className="flex justify-center">
          {status ? (
            <button
              type="button"
              className="btn bg-primary my-3 text-primary-content"
              onClick={() => setStatus(false)}
            >
              To Pdf Preview
            </button>
          ) : (
            <button
              type="button"
              className="btn bg-red-600 text-primary-content"
              onClick={generatePdf}
            >
              Generate Pdf
            </button>
          )}
        </div>
        <div ref={pdfRef} className="grid element ">
          <div className="element w-full flex justify-start bg-primary-content">
            <form className="flex justify-between p-3 w-full lg:text-2xl">
              <div className="p-3 grid gap-3">
                <label className="flex w-full justify-center items-center gap-3">
                  <span className=" lg:w-64">Client Name</span>
                  {status ? (
                    <input
                      type="text"
                      placeholder="Enter Client Name"
                      required
                      onChange={(e) =>
                        setClient({ ...client, name: e.target.value })
                      }
                      className=" w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <h1 className=" w-full p-3">{client.name}</h1>
                  )}
                </label>
                <label className="flex w-auto justify-center items-center gap-3">
                  <span className="w-32 lg:w-64">Address</span>
                  {status ? (
                    <input
                      type="text"
                      placeholder="Enter Address"
                      required
                      onChange={(e) =>
                        setClient({ ...client, address: e.target.value })
                      }
                      className="element w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <h1 className=" w-full p-3">{client.address}</h1>
                  )}
                </label>
              </div>
              <div className="p-3 grid gap-3">
                <label className="flex w-auto justify-center items-center gap-3">
                  <span className="lg:w-64">Invoice No</span>
                  {status ? (
                    <input
                      type="text"
                      placeholder="Enter your Invoice number"
                      required
                      onChange={(e) =>
                        setClient({ ...client, invoiceno: e.target.value })
                      }
                      className="element w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <h1 className=" w-full p-3">{client.invoiceno}</h1>
                  )}
                </label>
                <label className="flex w-auto justify-center items-center gap-3">
                  <span className="w-32 lg:w-64">Date</span>
                  {status ? (
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
                  ) : (
                    <h1 className=" w-full p-3">{client.date}</h1>
                  )}
                </label>
              </div>
            </form>
          </div>
          <div className="overflow-x-auto ">
            <div className="flex justify-center items-center mt-4">
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
                  className=" flex text-primary-content p-4 bg-primary cursor-pointer"
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
                  <p>Add Item</p>
                </button>
              ) : (
                <button
                  type="button"
                  className="bg-primary hidden cursor-pointer"
                ></button>
              )}
            </div>

            <table className=" table text-black mt-20 ">
              {/* head */}
              <thead className=" text-black border-b-black border-b-2 sm:text-xs md:text-xl lg:text-3xl">
                <tr>
                  <th>S.no</th>
                  <th>Description</th>
                  <th>quantity</th>
                  <th>Price/unit</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className="text-black sm:text-xs md:text-xl lg:text-3xl">
                {items.map((item, index) => {
                  return (
                    <tr key={index} className="border-0">
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
                <tr>
                  <td>
                    {status === false && (
                      <hr className="sm:mt-24 sm:h-24 md:mt-48 md:h-48 lg:mt-96 lg:h-96 border-0" />
                    )}
                  </td>
                </tr>
              </tbody>

              <tfoot className="text-black sm:text-xs md:text-xl lg:text-2xl border-black border-t-2">
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <h1>SubTotal </h1>
                    <h1>Tax(5%)</h1>
                    <h1 className="sm:text-xs md:text-xl lg:text-3xl font-bold">
                      Grand Total
                    </h1>
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
                    <h1 className="lg:text-3xl font-bold">
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

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
                          parseInt(item.quantity) * parseInt(item.rateperunit),
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
      </div>
    </>
  );
};

export default Home;
