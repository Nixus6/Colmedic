import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import './login.css';
import family from './img/logifamily.png'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginTab extends React.Component {
    // const { token, setToken } = useState();
render() {
    const { classes } = this.props;
    return (
        <Grid container justify="center">
            <Paper className={classes.padding} id="paper">
                <div className={classes.margin}>
                    <Grid container spacing={8} justify="center">
                        <h1 className="title">Bienvenido A Colmedic</h1>
                        <h2 className="subtitle">Sucursal Virtual</h2>

                    </Grid>
                    <Grid container spacing={8} justify="center">
                        <img
                            className="family"
                            src={family}
                            width="200"
                        />
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Numero de Documento" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Contraseña" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Recordarme" />
                        </Grid>
                        <Grid item>
                            <p>¿No tienes una cuenta?</p>
                            <Link className="Link" to={"createuser"} variant="body2">Crear cuenta</Link>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Ingresar</Button>
                    </Grid>
                </div>
            </Paper>
        </Grid>
    );
}
}

export default withStyles(styles)(LoginTab);