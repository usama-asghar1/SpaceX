import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface PopupProps {
  data: {
    name: string;
    date_utc: string;
    rocket: string;
    details: string;  
    launchpad: string;
    success: boolean;
    id: string;
  };
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ data, onClose }) => {
  console.log(data.id);
  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Details</DialogTitle>
      <DialogContent>
        <div>
          <p>Name: {data.name}</p>
          <p>Date: {data.date_utc}</p>
          <p>Rocket ID: {data.rocket}</p>
          <p>Details: {data.details ? data.details : 'Classified'}</p>
          <p>Launchpad ID: {data.launchpad}</p>
          <p>Success: {data.success ? 'Yes' : 'No'}</p>
          <Link to={`/launches/${data.id}`}>
            <Button variant="contained" sx={{marginBottom:'20px'}} >View This Summary</Button>
          </Link>
        </div>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  
  );
};

export default Popup;
