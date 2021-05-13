import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppsIcon from '@material-ui/icons/Apps';
import { InputAdornment } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export interface LookupComponentProps {
}

export interface LookupSelectionResult {
    selectedItem: string
}

export interface LookupProps<T extends LookupComponentProps> {
    lookupDialogOpen: boolean;
    lookupComponentProps?: T;
    onLookupCancel: () => void;
    onLookupSelect: (result: LookupSelectionResult) => void;
}

export interface LookupFieldProps {
    /** Caption for this field element */
    label: string;
    /** The initial value for this field */
    value: string;
    /** The lookup component */
    lookupComponent: <T extends LookupComponentProps> (props: LookupProps<T>) => React.ReactNode;
    /** The props for lookup and the underlying component*/
    lookupProps: LookupProps<LookupComponentProps>;
}


// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * The first section within FormA
 */
export const LookupField: FC<LookupFieldProps> = ({ label, value, lookupComponent, lookupProps }) => {
    const classes = useStyles();
    //const lookupComponentProps: LookupComponentProps = useLookupComponentProps(lookupComponent);
    const lookupDialogOpen: boolean = lookupProps.lookupDialogOpen;
    const lookupComponentProps = lookupProps.lookupComponentProps;
    const [openLookupDialog, setOpenLookupDialog ] = useState(lookupDialogOpen);
    const [fieldValue, setFieldValue ] = useState(value);
    const doOnLookupCancel = () => {
        setOpenLookupDialog(false);
    }
    const doOnLookupSelect = (result: LookupSelectionResult) => {
        setFieldValue(result.selectedItem);
        setOpenLookupDialog(false);
    }
    return (
        <div className={classes.root}>
            <TextField label={label} variant="outlined" value={fieldValue} InputProps={{
            readOnly: true,
            endAdornment: (
                <InputAdornment position="end">
                    <AppsIcon onClick={() => setOpenLookupDialog(true)} />
                </InputAdornment>
            ),
        }} />

        {lookupComponent({lookupDialogOpen: openLookupDialog, lookupComponentProps, onLookupCancel: doOnLookupCancel, onLookupSelect: doOnLookupSelect })}
        </div>
    );
};


