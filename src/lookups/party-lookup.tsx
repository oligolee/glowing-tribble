import React, { FC } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LookupComponentProps, LookupProps, LookupSelectionResult } from '../fields/lookup-field';

export interface PartyLookupProps extends LookupComponentProps {
    title: string
}

export const PartyLookup: FC<LookupProps<PartyLookupProps>> = ({ onLookupCancel, lookupDialogOpen, lookupComponentProps, onLookupSelect }) => {

    let title = "";
    if (typeof lookupComponentProps !== 'undefined') {
        title = lookupComponentProps.title
    }
    const onSubmit = () => {
        const result: LookupSelectionResult = { selectedItem: "Maruti Suzuki" }
        onLookupSelect(result);
    };

    return (
        <Dialog open={lookupDialogOpen}>
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>Search and Select a Party</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Maruti Suzuki"
                    type="email"
                    fullWidth
                    disabled={true}
                />
                <Button onClick={onSubmit} color="primary">Select</Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={onLookupCancel} color="primary">Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}