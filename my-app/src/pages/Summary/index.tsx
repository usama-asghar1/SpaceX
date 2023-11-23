import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './index.css';

interface LaunchDataType {
    name: string;
    date_utc: string;
    rocket: string;
    details: string;
    launchpad: string;
    success: boolean;
    id: string;
  } 

export default function Summary() {
  const { id } = useParams();
  const [launchData, setLaunchData] = useState<LaunchDataType | null>(null);


  useEffect(() => {
    const fetchLaunchDetails = async () => {
      try {
        const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
        const data = await response.json();
        setLaunchData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLaunchDetails();
  }, [id]);

  if (!launchData) {
    return <p>Loading...</p>;
  }

  return (
    
    <div className='App'>
    <Link to="/">
        <Button variant="contained" sx={{ marginTop: '20px' }}>Back to Table</Button>
    </Link>
      <h2>Launch Summary</h2>
      <div className='summary-container'>
      <p>ID: {id}</p>
      <p><strong>Name:</strong> {launchData.name}</p>
      <p><strong>Date:</strong> {launchData.date_utc}</p>
      <p><strong>Rocket ID:</strong> {launchData.rocket}</p>
      <p><strong>Details:</strong> {launchData.details ? launchData.details : 'Classified'}</p>
      <p><strong>Launchpad ID:</strong> {launchData.launchpad}</p>
      <p><strong>Success:</strong> {launchData.success ? 'Yes' : 'No'}</p>
      </div>
    </div>

  );
}