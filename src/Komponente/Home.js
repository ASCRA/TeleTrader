import { TableRow } from "./TableRow";
import {useState} from "react"
import styled from "styled-components";

const Table = styled.table`
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0 10px; 
    background-color: #165575;
    color: white;
    width: auto;
    th, td{
        border-bottom: 1px solid white;
        width: auto;
        padding: 10px 20px 10px 10px;
    }
    thead > tr{
        font-weight: bold;
    }
    tr:hover{
        background-color: #258ac1;
        cursor: pointer;
    }
`;
export const Home = () =>{
    const [tableValues, setTableValues] = useState(
        ["BTCUSD", 
         "BTCEUR", 
         "ETHUSD",
         "ETHEUR", 
         "EOSUSD"]);

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <td>
                            Num
                        </td>
                        <td>
                            Symbol
                        </td>
                        <td>
                            Daily change
                        </td>
                        <td>
                            Volume
                        </td>
                        <td>
                            Last price
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {tableValues.map((value, index) => (
                        <TableRow key={value} symbol={value} index = {index + 1}/>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}