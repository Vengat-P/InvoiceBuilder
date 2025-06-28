import React, { useContext } from "react";
import { InvoiceContext } from "../Context/InvoiceContext";

const Home = () => {
  const { client, setClient, items, item, setItem, handleSubmit } =
    useContext(InvoiceContext);

  return (
    <>
      <div className="grid mx-auto ">
        <div className="w-full flex justify-start bg-primary-content">
          <form className="flex justify-between p-3 w-full">
            <div className="p-3 grid gap-3">
              <label className="flex w-auto justify-center items-center gap-3">
                <span className="w-32">Client Name</span>
                <input
                  type="text"
                  placeholder="Enter Client Name"
                  required
                  className=" w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label className="flex w-auto justify-center items-center gap-3">
                <span className="w-32">Address</span>
                <input
                  type="text"
                  placeholder="Enter Address"
                  required
                  className="w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className=" w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>
          </form>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>S.no</th>
                <th>Description</th>
                <th>quantity</th>
                <th>Price/unit</th>
                <th>Tax</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_5").showModal()}
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
                    <span className="w-32">Tax</span>
                    <input
                      type="tel"
                      value={item.tax}
                      placeholder="Enter Tax Percentage "
                      required
                      onChange={(e) =>
                        setItem({ ...item, tax: e.target.value })
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
                        setItem({ ...item, amount: e.target.value })
                      }
                      className=" w-full p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn bg-primary  text-primary-content rounded-lg "
                  >
                    Update
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").close()
                    }
                    className="btn bg-red-500  text-primary-content rounded-lg "
                  >
                    close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Home;
