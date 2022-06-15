import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import { ContactsItem } from './contactsItem';
import { FAKEUSER } from './fakeUser'
import Button from '@mui/material/Button';
import { UiModal } from '../ui/modal';
import { ContactsInputPanel } from './contactsInputPanel';
import { ContactsItemInterface } from '../../types/types';

const initState: ContactsItemInterface = {
    id: null,
    name: '',
    number: '',
    avatar: '',
}

export const Contacts = ({
    searchApp
}: {
    searchApp: string
}) => {

    const [list, setList] = useState<ContactsItemInterface[]>([])

    const [open, setOpen] = React.useState(false);
    const [contact, setContact] = useState<ContactsItemInterface>(initState)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setTimeout(() => {
            setList(FAKEUSER.map((it, ind) => ({ ...it, id: ind })))
        }, 100)
    }, [])

    const addContact = () => {
        const addNewContactId = list.map((it, ind) => ({ ...it, id: ind }))
        setList(s => ([...addNewContactId, { ...contact, id: s.length }]))
        setContact(initState)
    }

    const deleteContact = (id: number | string) => {
        setList(s => s.filter(cont => cont.id !== id))
    }

    const updateContact = () => {
        setList(s => s.map(cont => contact.id === cont.id ? contact : cont))
        setContact(initState)
    }

    return (
        <>
            <Button sx={{ marginLeft: '16px' }} onClick={handleOpen} variant="contained">Add</Button>
            <UiModal open={open} handleClose={handleClose}>
                <ContactsInputPanel
                    contact={contact}
                    setContact={(s: ContactsItemInterface) => setContact(s)}
                    handlerContact={contact.id !== null ? updateContact : addContact}
                    handleClose={handleClose}
                />
            </UiModal>
            <List sx={{ width: '100%', maxWidth: 820, bgcolor: 'background.paper', margin: '0 auto' }}>
                {
                    list
                        .filter((contact) => {
                            let reg = new RegExp(searchApp.toLowerCase())
                            return reg.test(contact.name.toLowerCase()) || reg.test(contact.number)
                        })
                        .map((contact) =>
                            <ContactsItem contact={contact}
                                handleOpen={handleOpen}
                                setContact={(s: ContactsItemInterface) => setContact(s)}
                                deleteContact={(id: number | string) => deleteContact(id)}
                            />
                        )
                }
            </List>
        </>
    );
}
