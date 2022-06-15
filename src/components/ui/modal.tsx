import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid rgb(25 118 210 / 5%)',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius:'4px',
};


export const UiModal = ({
    open,
    handleClose,
    children
}:
    {
        open: boolean,
        handleClose: () => void,
        children: ReactNode
    }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }} >
                    {children}
                </Box>
            </Modal>
        </div>
    );
}
