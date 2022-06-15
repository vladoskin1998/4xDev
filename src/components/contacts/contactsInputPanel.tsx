import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ContactsItemInterface } from '../../types/types';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { validIsNumber, validIsEmpty } from '../../actions/validate'

export const ContactsInputPanel = ({
    contact,
    setContact,
    handlerContact,
    handleClose,
}: {
    contact: ContactsItemInterface,
    setContact: (s: ContactsItemInterface) => void,
    handlerContact: () => void,
    handleClose: () => void,
}) => {

    const [isName, setIsName] = useState(false)
    const [isNumber, setIsNumber] = useState(false)

    const handlerForm = () => {

        const isValidName = validIsEmpty(contact.name)
        const isValidNumber = validIsNumber(contact.number)

        console.log(isName, isNumber);


        if (isValidName) {
            setIsName(true)
        }
        if (isValidNumber) {
            setIsNumber(true)
        }

        if (isValidName || isValidNumber) {
            return
        }

        handlerContact()
        handleClose()
    }


    const handlerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            setContact(({ ...contact, avatar: e.target.result as string }))
        };

        reader.readAsDataURL(file);

    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
            <ListItemAvatar >
                <Avatar src={contact.avatar} sx={{ width: '100px', height: '100px', margin: '0 auto' }}>
                </Avatar>
            </ListItemAvatar>
            <Box component='div' color='primary' sx={{ textAlign: 'center' }}>
                <Box component={'label'} htmlFor="myfile" sx={{ cursor: 'pointer', textAlign: 'center' }}>
                    <Typography
                        variant="body1"
                        noWrap
                        component="span"
                        color='primary'
                    >
                        Download jpeg, png
                    </Typography>
                </Box>
                <Box component={'input'} type="file" id="myfile" name="myfile" sx={{ display: 'none' }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlerImage(e)}
                    accept="image/jpeg, image/png"
                />
            </Box>
            <TextField id="standard-basic" label="Name" variant="standard"
                value={contact.name} onChange={(e) => setContact(({ ...contact, name: e.target.value }))}
                error={isName}
            />
            <TextField id="standard-basic" label="Number" variant="standard"
                value={contact.number} onChange={(e) => setContact(({ ...contact, number: e.target.value }))}
                error={isNumber}
                placeholder='380000000000'
            />
            <Button onClick={handlerForm}>{contact.id !== null ? "Update" : "Add"}</Button>
        </Box>
    )
}

