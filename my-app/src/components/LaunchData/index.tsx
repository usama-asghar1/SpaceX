import { useState, useEffect } from "react";
import LaunchTable from "../LaunchTable"

 
interface LaunchDataType {
  name: string;
  date_utc: string;
  rocket: string;
  details: string;
  launchpad: string;
  success: boolean;
  id: string;
} 

export default function LaunchData() {

  const [launchData, setLaunchData] = useState<LaunchDataType[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        console.log("fetching data");
        const res = await fetch(`https://api.spacexdata.com/v5/launches`);
        const data: LaunchDataType[] = await res.json();
        setLaunchData(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // used this to check the first launch data of the API 
  // // console.log(launchData);
  // console.log(launchData[0]);
  // console.log(launchData[0].name);
  // console.log(launchData[0].date_utc);
  // console.log(launchData[0].rocket);
  // console.log(launchData[0].details);
  // console.log(launchData[0].launchpad);
  // console.log(launchData[0].success);
  // console.log(launchData[0].id);

  return (
    <div data-testid="launch-data" >
      <LaunchTable launchData={launchData} />
     
    </div>
  );
}
