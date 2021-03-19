import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import image1 from './img/medicina.svg'
import image2 from './img/odontologia.svg'
import image3 from './img/doctor.svg'

import QuotesServices from '../../QuotesServices';


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
    link: {
        display: 'flex',
    },
    icon: {
        // marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
});

function Breadcump() {
    const classes = useStyles();
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/home"
                // onClick={handleClick}
                className={classes.link}>
                <HomeIcon className={classes.icon} />
        inicio
      </Link>
            <GrainIcon className={classes.icon} />

        </Breadcrumbs>
    )
};


export const Agendar = () => {
    const classes = useStyles();


        return (
            <>

                <Grid className="space" container spacing={1} direction="row" justify="center">
                    {/* <Grid container item xs={6}>
                <Breadcump />
            </Grid> */}
                    <h1>Especialidad</h1>
                    {/* <Grid container item xs={12} justify="center"> */}
                    <Card className={classes.root} variant="outlined">
                        <CardContent>

                            <Typography variant="h5" component="h2">
                                Medicina General
        </Typography>
                            <img
                                className=""
                                src={image1}
                                width="100"
                            />
                        </CardContent>
                        <CardActions>
                            <Button value={0} size="small">Agendar</Button>
                        </CardActions>
                    </Card>
                    {/* </Grid> */}

                    {/* <Grid container item xs={12} justify="center"> */}
                    <Card className={classes.root} variant="outlined">
                        <CardContent>

                            <Typography variant="h5" component="h2">
                                Odontologia General
        </Typography>
                            <img
                                className=""
                                src={image2}
                                width="100"
                            />
                        </CardContent>
                        <CardActions>
                            <Button value={1} size="small">Agendar</Button>
                        </CardActions>
                    </Card>
                    {/* </Grid> */}

                    {/* <Grid container item xs={12} justify="center"> */}
                    <Card className={classes.root} variant="outlined">
                        <CardContent>

                            <Typography variant="h5" component="h2">
                                Especialidades
        </Typography>
                            <img
                                className=""
                                src={image3}
                                width="100"
                            />
                        </CardContent>
                        <CardActions>
                            <Button value={2} size="small">Agendar</Button>
                        </CardActions>
                    </Card>
                    {/* </Grid> */}

                </Grid>
            </>
        );


}
