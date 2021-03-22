import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import image1 from './img/cita-medica.svg';
import image2 from './img/calendario.svg';
import Grid from '@material-ui/core/Grid';
//Card
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Cardshome(props) {
    return (
        <Card className="align-flex" variant="outlined" style={{ alignItems: "center" }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.name}
                </Typography>
                <img
                    className=""
                    src={props.image}
                    width="100"
                />
            </CardContent>
            <CardActions className="align-fex-bottoms">
                <Link className="Link" to={props.redirect}><Button size="small">{props.textbutton}</Button></Link>
            </CardActions>
        </Card>
    )
}

export const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Grid className="space" container spacing={1} direction="row" justify="center">

                <h1>Portal Salud</h1>
                <Cardshome name="Agendar Cita" image={image1} redirect="agendar" textbutton="Agendar" />
                <Cardshome name="Mis Citas" image={image2} textbutton="Visualizar" />

            </Grid>
        </>
    );
}