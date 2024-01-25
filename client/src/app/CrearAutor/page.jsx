"use client";
import Link from "next/link"
import FormAuthor from "@/components/FormAuthor/FormAuthor";
import { Typography } from "@mui/material";



const CrearAutor=()=>{


    return(
        <>  
           
            <Link href={"/"}>Home</Link>
            <Typography variant="h6" sx={{ color: "#570A8E" }}>
                 Add a new author
            </Typography>
            <FormAuthor namerec="" crear={true}  />
        </>
    )
}

export default CrearAutor