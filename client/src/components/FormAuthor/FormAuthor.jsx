import CrearAutor from "@/app/CrearAutor/page"
import { Box, Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material"
import { useState } from "react"
import axios from "axios";
import { useRouter } from 'next/navigation';


const FormAuthor=({namerec,crear,id})=>{
    const router = useRouter();
    const [errors,setError]=useState({})

    const createdFail=(errorMSG)=>{
        console.log(errorMSG.response.data.errors)
        setError(errorMSG.response.data.errors);
    }

    const [name,setName]=useState(namerec)
    const data={
        name
    }

    const CrearAutor= async()=>{
       
        try {
            const response= await axios.post('http://localhost:8000/api/autores',data)
            const result = await response.data;
            console.log(result); //si todo salio bien hay que setear los estados
            router.push('/');
            
        } catch (error) {
            createdFail(error)

        }
    }
    const Volver=()=>{
        router.push('/');
    }
    const UpdateAutor=async()=>{
        try {
            const response= await axios.put(`http://localhost:8000/api/autores/edit/${id}`,data)
            const result= await response.data
            console.log(result)
            router.push('/');
        } catch (error) {
            createdFail(error)
        }
    }

    return(
        <Box sx={{border: 2,borderColor:"black", width:"20em"}}>
           <FormControl sx={{display:"flex",flexDirection:"column",p:2,m:2, justifyContent:"space-around"}}>
                <InputLabel htmlFor="my-input">Name: </InputLabel>
                <TextField
                    id="my-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={errors.name ? true : false}
                    helperText={errors.name ? errors.name.message : ''}
                />
                <Box sx={{mt:3}}>
                    <Button sx={{mr:2}} variant="contained" color="error" onClick={()=>Volver()}>Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={()=>{crear?CrearAutor():UpdateAutor()}} >Submit</Button>
                </Box>
                
            </FormControl>

        </Box>
    )
}

export default FormAuthor