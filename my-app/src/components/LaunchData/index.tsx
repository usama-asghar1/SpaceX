import { useState, useEffect } from "react";
import Table from "../LaunchTable"

// interface type for the data to be recived 
interface LaunchDataType {
  name: string;
  date_utc: string;
  rocket: string;
  details: string;
} 

export default function LaunchData() {

  // state for data to be stored in
  const [launchData, setLaunchData] = useState<LaunchDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");
      const res = await fetch(`https://api.spacexdata.com/v5/launches`);
      const data: LaunchDataType[] = await res.json();
      setLaunchData(data);
    };

    fetchData();
  }, []);

  // // check data is being recived
  // console.log(launchData);
  // console.log(launchData[0]);
  // console.log(launchData[0].name);
  // console.log(launchData[0].date_utc);
  // console.log(launchData[0].rocket);
  // console.log(launchData[0].details);

  return (
    <div>
      <Table launchData={launchData} />
     
    </div>
  );
}
