"use client";
import FormAuthor from "@/components/FormAuthor/FormAuthor";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Home() {
  const [name, setName] = useState([]);
  const findUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/autores");
      const result = await response.data;
      console.log(result);
      // const sortedNames = result.sort((a, b) => a.name.localeCompare(b.name)); //para ordenar alfabeticamente
      setName(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    findUsuarios();
  }, []);

  const deleteAutor = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/autores/${id}`
      );
      // const result = await response.data;
      findUsuarios();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link href={"./CrearAutor"}>Add an author</Link>
      <Typography variant="h6" sx={{ color: "#570A8E" }}>
        We have quotes by
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Operaciones</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {name.map((valor, idx) => (
              <StyledTableRow key={idx}>
                <StyledTableCell component="th" scope="row" align="center">
                  {valor.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    <Link href={`./edit/${valor._id}`}> Editar</Link>
                  </Button>
                  <Button
                    onClick={() => deleteAutor(valor._id)}
                    variant="contained"
                    color="error"
                  >
                    Eliminar
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
