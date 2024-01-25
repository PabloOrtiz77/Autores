"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import FormAuthor from "@/components/FormAuthor/FormAuthor";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const EditarAutor = ({ params }) => {
  const { id } = params;
  const [names, setName] = useState({});
  const router = useRouter();
  const [errors,setErrors]=useState({})

  const handleAccept = () => {
    alert("Lo sentimos, pero no pudimos encontrar el autor que estás buscando. ¿Deseas agregar este autor a nuestra base de datos?")
    router.push('../../CrearAutor');
  };

  const findUsuariosById = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/autores/${id}`);
      const result = await response.data;
      console.log(result);
      setName(result);
    } catch (error) {
      setErrors(error)
      // handleAccept();  
    }
  };

  useEffect(() => {
    findUsuariosById();
  }, []);

  return (
    <>
    
    <Link href={"/"}>Home</Link>
    {Object.keys(errors).length > 0 ? 
     <Typography variant="h6" >
      Lo sentimos, pero no pudimos encontrar el autor que estás buscando. 
     <Link href={"/CrearAutor"}> ¿Deseas agregar este autor a nuestra base de datos?</Link> 
     </Typography>
      :(
      <>
      <Typography variant="h6" sx={{ color: "#570A8E" }}>
          Edit this author
        </Typography>
        {Object.keys(names).length > 0 && (
      <FormAuthor namerec={names.name} crear={false} id={names._id}/>
      )
      
      }</>)
    }
    </>
  );
};

export default EditarAutor;
