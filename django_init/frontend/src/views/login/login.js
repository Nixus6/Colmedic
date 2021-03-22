import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import './login.css';
import family from './img/logifamily.png'
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../QuotesServices';
import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles((theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
})));

export default function LoginTab() {
    // const { token, setToken } = useState();
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post(`token/`, {
                email: formData.email,
                password: formData.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
                history.push('/home');
                //console.log(res);
                //console.log(res.data);
            });
    };

    const classes = styles();
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
                    <form noValidate>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField name="email" id="email" label="Correo Electronico" onChange={handleChange} type="email" fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField name="password" id="password" label="Contraseña" onChange={handleChange} type="password" fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" justify="flex-end">
                            <Grid item>
                                <Link className="Link" to={"createuser"} variant="body2">¿No tienes una cuenta? Crear cuenta</Link>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={handleSubmit}>Ingresar</Button>
                        </Grid>
                    </form>
                </div>
            </Paper>
        </Grid>
    );

}
