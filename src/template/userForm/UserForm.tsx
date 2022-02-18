import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import Axios from 'Axios'
import { 
FormControl,
InputLabel,
Input,
Container,
Typography,
TextField,
Card,
Button
} from '@mui/material';

const options1 = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ]

const UserForm = () => {
    const [formData, setFormData] = useState({})

    useEffect(() => {
        Axios('https://vb-react-exam.netlify.app/api/form')
        .then((resp) => {
            console.log(resp)
        })
    }, [])

    const formSubmit = (e: any) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const number = e.target.number.value
        const message = e.target.message.value
        
    }

    return (
        <Container maxWidth='md' sx={{p: '20px'}}>
            <Card variant="outlined" sx={{p: '10px'}}>
                <Typography variant='h3' align='center' sx={{mb: '15px'}}>User Form</Typography>
                <form method="post" onSubmit={formSubmit}>
                    <FormControl sx={{mb: '15px'}} fullWidth>
                        <InputLabel htmlFor="name">Name:</InputLabel>
                        <Input id='name' name='name' aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl sx={{mb: '15px'}} fullWidth>
                        <InputLabel htmlFor="email">Email:</InputLabel>
                        <Input id='email' name='email' aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl sx={{mb: '15px'}} fullWidth>
                        <InputLabel htmlFor="number">Number:</InputLabel>
                        <Input id='number' name='number' type='text' aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl sx={{mb: '15px', mr: '10px'}} fullWidth>
                        <Select defaultValue={options1[0]} options={options1} />
                        <Input id='age' name='number' type='number' aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl sx={{mb: '15px'}} fullWidth>
                        <InputLabel htmlFor="my-input">Message:</InputLabel>
                        <TextField name='message' type="text" multiline minRows={10} />
                    </FormControl>
                    <Button type='submit' variant="contained">Submit</Button>
                </form>
            </Card>
            
        </Container>
    );

}

export {UserForm}