import './App.css'
import lanakNic, {infoNic} from "lanka-nic-2019";
import {Box} from "@mui/material";
import Output from './components/output/Output.jsx'
import SubmitNIC from './components/Submit/SubmitNIC.jsx'
import {useState} from "react";


function App() {
    const [Data, setData] = useState('');
    console.log(Data);
    console.log(typeof(Data));
    const NICDetails = infoNic(Data);
    console.log(NICDetails);

    function getNICNumber(data){
        console.log(data);
        return setData(...Data, data);
    }


  return (
    <>
        <Box  >
            <SubmitNIC SubmitData={getNICNumber}/>
            <Output Details={NICDetails}/>

        </Box>



    </>
  )
}

export default App
