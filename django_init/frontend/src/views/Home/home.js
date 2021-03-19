import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import image1 from './img/cita-medica.svg'
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
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

function Cardhome() {
    return (
        <>
        </>
    );
}

export const Home = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <>
            <Grid className="space" container spacing={1} direction="row" justify="center">

                <h1>Portal Salud</h1>
                <Card className={classes.root} variant="outlined">
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            Agendar Cita
        </Typography>
                        <img
                            className=""
                            src={image1}
                            width="100"
                        />
                    </CardContent>
                    <CardActions>
                        <Link className="Link" to={"agendar"}><Button size="small">Agendar</Button></Link>
                    </CardActions>
                </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Mis Citas
        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

            </Grid>
        </>
    );
}