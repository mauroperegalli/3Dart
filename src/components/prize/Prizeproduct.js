import React from 'react'
import { PrizeForm, PrizeInput, PrizeInputMail, PrizecontainerStyled, PrizetitleStyled } from "./PrizeproductStyles";
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


export const Prizeproduct = () => {
  return (
    <PrizecontainerStyled>
        <PrizetitleStyled>Dejanos tu idea, que te la cotizamos sin cargo!</PrizetitleStyled>
        <PrizeForm>
            <TextField
            id="outlined-multiline-static"
            label="Idea a cotizar"
            multiline
            rows={5}
            fullWidth/>
            <TextField id="filled-basic"   
            label="Mail" 
            variant="filled"
            fullWidth />
            <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => alert ("Cotizacion enviada! En las proximas 24 horas le llegara la repuesta al mail")}
          >
            Cotizar
          </Button>
        </PrizeForm>
    </PrizecontainerStyled>
  )
}

export default Prizeproduct;