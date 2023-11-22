import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


interface Column {
  id: 'name' | 'date' | 'rocketID' | 'details'; // Update the column IDs
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'rocketID', label: 'Rocket ID', minWidth: 170 },
  { id: 'details', label: 'Details', minWidth: 170 },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


interface LaunchDataType {
    name: string;
    date_utc: string;
    rocket: string;
    details: string;
  } 
  
interface DataProps {
    launchData: LaunchDataType[];
  }

export default function LaunchTable({launchData}: DataProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

      // check / wait if the data is available, its not available on the first render
  if (!launchData || launchData.length === 0) {
    return (
      <div>
        <p>No launch data available</p>
      </div>
    );
  }
  
    // used this to check the first launch data of the API 
  // const name = launchData[0].name
  // const date = launchData[0].date_utc
  // const rocketID = launchData[0].rocket
  // const details = launchData[0].details
   
  const rows = launchData.map((launch) => ({
    name: launch.name,
    date: launch.date_utc,
    rocketID: launch.rocket,
    details: launch.details,
  }));

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', margin: 'auto', marginBottom: '20px' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                <Typography variant="subtitle1" fontWeight="bold">
                  {column.label}
                </Typography>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
            <StyledTableCell key={column.id} align={column.align}>
              {column.id === 'details' && !value ? (
                <span>No details available.</span>
              ) : (
                column.format && typeof value === 'number'
                  ? column.format(value)
                  : value
              )}
            </StyledTableCell>
          );
        })}
      </TableRow>
    ))}

          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
