import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { ContactsItemInterface } from '../../types/types';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Tooltip from '@mui/material/Tooltip';
import { prettyNumbers } from '../../actions/prettier'
export const ContactsItem = ({
    contact,
    deleteContact,
    setContact,
    handleOpen,
}: {
    contact: ContactsItemInterface,
    deleteContact: (id: number | string) => void,
    setContact: (s: ContactsItemInterface) => void,
    handleOpen: () => void
}) => {

    const { id, name, number, avatar } = contact

    const changeContact = () => {
        setContact(contact)
        handleOpen()
    }

    return (
        <ListItem key={id} sx={{backgroundColor:'rgba(25, 118, 210, 0.05)', margin: '10px', borderRadius:'4px'}}>
            <ListItemAvatar>
                <Avatar src={avatar}>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name.length > 30 ? `${name.substring(0, 29)}...` : name}
                secondary={prettyNumbers(number)}
            />
            <Tooltip title="Update">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={changeContact}
                    sx={{ marginRight: '20px' }}
                >
                    <UpgradeIcon color="primary" />
                </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={() => deleteContact(id)}
                >
                    <DeleteIcon color='error' />
                </IconButton>
            </Tooltip>
        </ListItem>

    );
}
