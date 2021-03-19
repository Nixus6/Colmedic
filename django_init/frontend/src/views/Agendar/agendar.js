import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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

export const Agendar = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1} direction="column" justify="center">
            <Grid container item xs={12} justify="center">
                <Card className={classes.root} variant="outlined">
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            Medicina General
        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small">Agendar</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid container item xs={12} justify="center">
                <Card className={classes.root} variant="outlined">
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            Odontologia General
        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small">Agendar</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid container item xs={12} justify="center">
                <Card className={classes.root} variant="outlined">
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            Especialidades
        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small">Agendar</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )

}