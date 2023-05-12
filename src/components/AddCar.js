import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import { color } from '@mui/system';

export default function AddCar({ addCar }) {
   const [open, setOpen] = React.useState(false);
   const [car, setCars] = React.useState({
      brand: '',
      model: '',
      color: '',
      fuel: '',
      year: '',
      price: ''
   });

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleSave = () => {
      addCar(car);
      setOpen(false);
      setCars({
         brand: '',
         model: '',
         color: '',
         fuel: '',
         year: '',
         price: ''
      })

   };

   return (
      <div>
         <Button variant="outlined" onClick={handleClickOpen}>
            Add Car
         </Button>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Car</DialogTitle>
            <DialogContent>  
               <TextField
                  value={car.brand}
                  onChange={e => setCars({...car, brand: e.target.value})}
                  margin="dense"
                  label="Brand"
                  fullWidth
                  variant="standard"
               />
               <TextField
                  value={car.model}
                  onChange={e => setCars({...car, model: e.target.value})}
                  margin="dense"
                  label="Model"
                  fullWidth
                  variant="standard"
               />
               <TextField
                  value={car.color}
                  onChange={e => setCars({...car, color: e.target.value})}
                  margin="dense"
                  label="Color"
                  fullWidth
                  variant="standard"
               />
               <TextField
                  value={car.fuel}
                  onChange={e => setCars({...car, fuel: e.target.value})}
                  margin="dense"
                  label="Fuel"
                  fullWidth
                  variant="standard"
               />
               <TextField
                  value={car.year}
                  onChange={e => setCars({...car, year: e.target.value})}
                  margin="dense"
                  label="Year"
                  fullWidth
                  variant="standard"
               />
               <TextField
                  value={car.price}
                  onChange={e => setCars({...car, price: e.target.value})}
                  margin="dense"
                  label="Price"
                  fullWidth
                  variant="standard"
               />
            </DialogContent>
            
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button onClick={handleSave}>Save</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}