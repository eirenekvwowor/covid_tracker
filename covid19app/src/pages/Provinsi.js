import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import NumberFormat from 'react-number-format';

const Provinsi = ({provinsi, posotif, sembuh, meninggal}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((response) => setData(response.data.data));
    }, []);

    console.log(data);
    
    return (
       <div>
            <center><h2>Data jumlah kasus di Indonesia Per Provinsi</h2> </center>
           
        <center>  
            
            
             <tr >
                <th className="table">Provinsi</th>
                <th className="table">Jumlah Kasus</th>
                <th className="table">Sembuh</th>
                <th className="table">Meninggal</th>
            </tr> </center>

        <center>
            {data.map((item) => {
                  return(
                     <tr> 
                          <th className="box1">
                              {item.provinsi}</th>
                          <th className="box2">
                              <NumberFormat value={item.kasusPosi} displayType={'text'} thousandSeparator={true} /></th>
                          <th className="box3">
                              <NumberFormat value={item.kasusSemb} displayType={'text'} thousandSeparator={true}/></th>
                          <th className="box4">
                              <NumberFormat value={item.kasusMeni} displayType={'text'} thousandSeparator={true}/></th>
                       </tr>
                  )
        })}</center>
        </div>
    )

}; 

export default Provinsi;
