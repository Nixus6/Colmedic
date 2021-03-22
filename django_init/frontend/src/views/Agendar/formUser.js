import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, makeStyles, Paper } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';

const FormUser = (props) => {
    const handleNext = (e) => {
        e.preventDefault();
        props.handleNext();
        // setActivateStep(prevActivateStep => prevActivateStep + 1)
    }
    const handleBack = (e) => {
        e.preventDefault();
        props.handleBack();
    }
    return (
        <>
            <Grid container justify="center">
                <Paper  id="paper">
                    <Grid container spacing={8} alignItems="flex-end">

                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} justify="space-between" direction="row">
                <Button onClick={handleBack}>
                    Atras
                </Button>
                <Button onClick={handleNext}>
                    {/* {props.state === props.steps ? "Agendar" : "Siguiente"} */}
                    Siguiente
                </Button>
            </Grid>
        </>
    )
}
export default FormUser;