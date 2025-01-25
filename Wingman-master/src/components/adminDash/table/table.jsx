import * as React from 'react'; 
import Table from '@mui/material/Table'; 
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css'
function createData(name, Crop, Amount, Transaction, Status) {
  return { name, Crop, Amount, Transaction, Status };
}

const rows = [
  createData('Narendra', "Wheat", 10, 'Seller', 'Approved'),
  createData('Olsen', "Corn", 50, 'Retailer', 'Approved'),
  createData('Mark', "Rice", 90, 'Retailer', 'Pending'),
  createData('Jay', "Spinach", 69, 'Seller', 'Pending'),
  createData('Ram', "Tomato", 40, 'Seller', 'Delivered'),
];

const getStatusStyles = (status) => {
  if (status === 'Approved') {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else if (status === 'Delivered') {
    return {
      background: '#03fca9',
      color: 'green',
    };
  }
  return {};
};

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customers</TableCell>
            <TableCell align="left">Crop</TableCell>
            <TableCell align="left">Amount (kg)</TableCell>
            <TableCell align="left">Transaction (Type)</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.Crop}</TableCell>
              <TableCell align="left">{row.Amount}</TableCell>
              <TableCell align="left">{row.Transaction}</TableCell>
              <TableCell align="left">
                <span className="status" style={getStatusStyles(row.Status)}>
                  {row.Status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
