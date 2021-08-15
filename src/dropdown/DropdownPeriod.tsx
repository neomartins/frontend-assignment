import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    container: {
        flexWrap: 'wrap',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, auto))',
        gridGap: '15px',
      },
  }));

  interface DropdownPeriodProps {
    handlePeriodSelect: (periood: string) => void;
    handleSelectorSelect: (periood: string) => void;
  }

const DropdownPeriod = (props: DropdownPeriodProps) => {
    const {
        handlePeriodSelect, handleSelectorSelect,
      } = props;
    const classes = useStyles();
    const [period, setPeriod] = React.useState('monthly');
    const [selector, setSelector ] = React.useState('revenues');

    const handlePeriod = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const element = event.target as HTMLSelectElement;
        setPeriod(element.value);
        handlePeriodSelect(element.value);
    };

    const handleSelector = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const element = event.target as HTMLSelectElement;
        setSelector(element.value);
        handleSelectorSelect(element.value);
;    };

    return (
    <div className={classes.container}>
        <Typography variant="h5">{"Period selector:"}</Typography>
        <TextField
            select
            variant="outlined"
            value={period}
            id="language"
            onChange={handlePeriod}
        >
            <MenuItem value="weekly">
                {'weekly'}
            </MenuItem>
            <MenuItem value="monthly">
                {'monthly'}
            </MenuItem>
        </TextField>

        <Typography variant="h5">{"Value type selector:"}</Typography>
        <TextField
            select
            variant="outlined"
            value={selector}
            id="language"
            onChange={handleSelector}
        >
             <MenuItem value="revenues">
                {'revenues'}
            </MenuItem>
            <MenuItem value="margin">
                {'margin..'}
            </MenuItem>
        </TextField>
    </div> 
    );
};

export default DropdownPeriod;