import React, { useState,useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {db,getDocs,collection } from "../../src/firebase/Firebase";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    
        let [myreq, setMyreq] = useState([])
        useEffect(async () => {
            console.log("working getdata");
          let getreq = collection(db, 'UserRequest');
          let allreq = await getDocs(getreq);
          let myreqclone = myreq.slice(0);
          allreq.forEach((doc) => {
            myreqclone.push(doc.data());
          });
          setMyreq(myreqclone);
          console.log('my', myreqclone)
        }, [])
  
    const btnstyle = {
        color: 'white',
        backgroundColor:"black",
        fontSize: 10,
      };
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Request NAME</TableCell>
            <TableCell align="right">FATHER NAME</TableCell>
            <TableCell align="right">CNIC</TableCell>
            <TableCell align="right">FAMIY MEMBER</TableCell>
            <TableCell align="right">CATOGERAY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                  <Button  variant="contained">edit</Button >
              </TableCell>
              <TableCell align="right">
                  <Button variant="contained">delete</Button >
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
