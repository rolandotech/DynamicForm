import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { 
FormControl,
InputLabel,
Input,
Container,
Typography,
TextField,
Card,
Button,
MenuItem,
Select
} from '@mui/material';

const UserForm = () => {
    const [form, setForm] = useState<any>({})
    const [formData, setFormData] = useState<any>({})
    const [gender, setGender] = useState('male')

    useEffect(() => {
        Axios.get('https://vb-react-exam.netlify.app/api/form')
        .then((resp) => {
            const reqData = resp.data.data
            console.log(reqData)
            if(reqData != null){
                setForm(reqData)  
            }
        })
    }, [])

    const formSubmit = (e: any) => {
        const form_data: any = new FormData(e.target);
        e.preventDefault()
        const data: any = {}
        for(var pair of form_data.entries()) {
            data[pair[0]] = pair[1]
         }
         console.log(form)
        
        Axios.post('https://vb-react-exam.netlify.app/api/form',data)
        .then((resp) => {
            const reqData = resp.data.data
            console.log(reqData)
            if(reqData != null){
                setFormData(reqData)  
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleChange = (e: any, key: number) => {
        let new_form = form
        let FData = new_form[key]
        FData['value'] = e.target.value
        setForm({
            ...form,
            FData
        })
    }

    const formInputs = () => {
        const data_form: any = {}
        if(Object.keys(form).length !== 0){
            return (
            <>
                {Object.keys(form).map((keyName, i) => {
                    const fieldData: any = form[keyName]
                    data_form[fieldData['fieldName']] = fieldData['value']
                    switch (fieldData['type']) {
                        case 'select':
                            const options = fieldData['options']
                            return (
                                <FormControl sx={{mb: '15px'}} fullWidth key={i}>
                                    <label className="inputLabel" htmlFor={fieldData['fieldName']}>{fieldData['fieldName']}</label>
                                    <Select id={fieldData['fieldName']} className='formInput' name={fieldData['fieldName']} value={fieldData['value']} onChange={(e) => handleChange(e, i)} >
                                        {options.map((items: any, x: number) => (
                                            <MenuItem value={items} key={x}>{items}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl> 
                            )
                        case 'multiline':
                            return (
                                <FormControl sx={{mb: '15px'}} fullWidth key={i}>
                                    <label className="inputLabel" htmlFor={fieldData['fieldName']}>{fieldData['fieldName']}</label>
                                    <TextField id={fieldData['fieldName']} className='formInput' name={fieldData['fieldName']} value={fieldData['value']} multiline onChange={(e) => handleChange(e, i)} />
                                </FormControl> 
                            )
                        default:
                            return (
                                <FormControl sx={{mb: '15px'}} fullWidth key={i}>
                                    <label className="inputLabel" htmlFor={fieldData['fieldName']}>{fieldData['fieldName']}</label>
                                    <TextField id={fieldData['fieldName']} className='formInput' name={fieldData['fieldName']} value={fieldData['value']} onChange={(e) => handleChange(e, i)} />
                                </FormControl> 
                            )
                    }
                    
                })}
                <Button type='submit' variant="contained">Submit</Button>
            </>
            )
            console.log(data_form)
        }
    }

    return (
        <Container maxWidth='sm' sx={{p: '20px'}}>
            <Card variant="outlined" sx={{p: '10px'}}>
                <Typography variant='h3' align='center' sx={{mb: '15px'}}>User Form</Typography>
                <form method="post" onSubmit={formSubmit}>
                    {formInputs()}
                </form>
            </Card>
            
        </Container>
    );

}

export {UserForm}