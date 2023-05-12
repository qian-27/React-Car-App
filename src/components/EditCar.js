import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import { color } from '@mui/system';

export default function EditCar(props) {
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
      // console.log(props.params);
      setCars({
         brand: props.params.brand,
         model: props.params.model,
         color: props.params.color,
         fuel: props.params.fuel,
         year: props.params.year,
         price: props.params.price,
      })
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleSave = () => {
      props.updateCar(car, props.params._links.car.href)
      setOpen(false);
   };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
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