# Invoice Builder Using React Js

## Overview

Develop a responsive invoice generation application using **React JS** that allows users to create and manage invoices dynamically.

## Tech Stack

- **React JS** for project
- **TailwindCss** for styling
- **VSCode** for development
- **jsPdf** for export Pdf
- **html2canvaspro** to access oklch color funtion
- **flow Bite** to icons
- **Daisy UI** for modal

## Logics

- **step 1 -** create new react application ,complete the file cleaning and install the required packages like tailwind css ,react router dom,jsPdf,html2canvaspro,daisy ui and flowbite .then create components footer, navbar file and pages home file. for context api create invoice context file separately to manage all states and function

- **step 2 -** create use context hook to handle functions and hook state managemnet. create invoiceprovider and pass children prop as a parameter and create usestate name is client this will be store client data.and create item state to collect user inputs as object and create items usestate with empty array to store items details and use Effect state with empty array. in return create invoice context.provider with wraping children and passing all required states and function inside this to access anywhere in the application.now go to main jsx and warp app component inside of userProvider and also inside of browser router

- **step 3 -** In app component inside of return first make one div for navbar component and create a routes inside of this create to route with path and pages for page routing

- **step 4 -** create a form with input field required details of client. on change function will store client details in client state .now make table for collected item deatils shown in table format . for this i import daisyui table head with 6 headers last header will be for edit and delete button for each item.now i add button with function of open modal using daisyui and add form inside of that modal. and then i add rquired input fields for item. in onchangefunction item details will collect and onsumbit function collected the added items.

- **step 5 -** now in table body i map the items array and in return display the each items inside of tr with td each td has respeted itm details.last td has edit and delete button.in edit butto i add handle edit function for onclick.on that function i open the same modal for item form which i used to create a new item . in parameter i pass index . in handleedit function i setItem is index of clicked item to get selected item details and then i use splice function for items and pass selected index and remove 1 element then on setItems pass items and item.

- **step 6 -** Now delete function. on delete button with onclick function of handledelete and passing index as parameter. then using splice functions for items with selected index and setItems with conditional rendering.

- **step 7 -** move to table foot in tr cretae 3 empty td and 4th td with subtotal,tax,grand total and 5th td is sub total amount for all items i use reduce function and tax amount on subtotal and grandtotal amount adding subtotal+tax. now table foot

- **step 8 -** to convert pdf install jspdf and html2canvaspro(to access oklch functions because of tailwind).import both jspdf and html2canvaspro in invoice context . and add status usestate with default true condition this will be used for conditional render for buttons and form input field disapper when generate pdf .for this update all buttons and form inputs on conditional rednering when status true buttons and form inputs will show.
  now create pdfref useref hook in invoicecontext to get div part. and pass pdfref in invoiceprovider. in home page make client form and table in one div and set ref is pdfref for that div. now add one button on top of this name is to pdf preview this will also with conditional renering when status true to pdf preview button will show. in this butto add onclick function and change the setStatus false when we click this all buttons and client form input fields will disapper . when status change false two button will show on top of ref div one is to edit and another one is GeneratePdf . to edit button onclick function will change setstatus true again .generate pdf button has generatepdf function.

- **step 9 -** create this function in invoice provider and pass as prop. in this function if pdfref has cuurent then in trycatch function set canavs with await using html2canvas with pdfref(selected div) and options scale,usecors is true.now set imgdata using canvas.todataurl function. and set pdf using new jspdf function with options.now set pdfeidth and height. width will be getting from getwidth function of inetrnal page size(selected div). and height will be canvas height\*pdfwidth/canvas width (to get slected div as height).now addimagedata in pdf using pdf.addImage and passing(imagedata,format,0,0,pdfwidth,pdfheight). and last save pdf using pdf.save() function with name string. i add name as invoice no .pdf as name.

- **step 10 -** then check all function. and change ui for rsponsive design in all devices.

## How to Use

- **step-1 -** In client info add all the details date will automatically show current date if you want to change change.

- **step-2 -** click add item button and add the item details . amount field will automatically calculate you just click and type something. and click update

- **step-3 -** You can see the added item.you can add more items if you want to edit just click edit button for change that item.you can edit the details and click update. if you want to delete item just click delete of that item

- **step 4 -** to export pdf click to pdf preview and check all re correctly added if any changes click to edit and change details then again click to pdf preview and click generate pdf now pdf will automatically downloaded.

## Features

- Responsive Design
- Clean and Minimalistic Layout

## Demo

-

## Authors

- [@ Vengat p](https://github.com/Vengat-P)
