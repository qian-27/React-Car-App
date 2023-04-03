import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';

import Snackbar from '@mui/material/Snackbar';

function Carlist () {
   const [cars, setCars] = useState([]);
   const [open, setOpen] = useState(false);

   const [columnDefs] = useState([
      { field: 'brand', sortable: true, filter: true },
      { field: 'model', sortable: true, filter: true },
      { field: 'color', sortable: true, filter: true },
      { field: 'fuel', sortable: true, filter: true },
      { field: 'year', sortable: true, filter: true, width: 100},
      { field: 'price', sortable: true, filter: true, width: 100},
      {cellRenderer: params => 
      <Button 
         size='small' 
         color='error'
         onClick={() => deleteCar(params)}
      >
         Delete
      </Button>, 
      width: 120}
  ])

   const getCars = () => {
      fetch('http://carrestapi.herokuapp.com/cars')
      .then(response => {
         if (response.ok) {
            return response.json();
         } else {
            alert('Something went wrong in GET request');
         }
         
      })
      .then(data => setCars(data._embedded.cars))
      .catch(err => console.error(err))
   }

   useEffect (() => {
      getCars();
   }, []);


   const deleteCar=(params) => {
      if (window.confirm('Are you sure?')){
         fetch(params.data._links.car.href, { method: 'DELETE'})
         .then(response => {
            if (response.ok) {
               setOpen(true);
               getCars();
            } else {
               alert('Something went wrong in deletion.')
            }
         })
         .catch(err => console.error(err))
      }
   }

   return (
      <>
      <div 
         className='ag-theme-material' 
         style={{ width: '90%', height: 600, margin: 'auto'}}
      >
         <AgGridReact 
            rowData={cars}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
         />

      </div>
      <Snackbar
        open={open}
        message="It is successful deleted!"
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      />
   </>
   )
}

export default Carlist;