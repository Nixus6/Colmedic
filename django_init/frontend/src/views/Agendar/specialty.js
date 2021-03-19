import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import image1 from './img/medicina.svg';
import image2 from './img/odontologia.svg';
import image3 from './img/doctor.svg';


export class Specialty extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>

                    <Grid className="space" container spacing={1} direction="row" justify="center">
                        {/* <Grid container item xs={6}>
        <Breadcump />
    </Grid> */}
                        <h1>Especialidad</h1>
                        {/* <Grid container item xs={12} justify="center"> */}
                        <Card variant="outlined">
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
                                <Button
                                    value={0}
                                    size="small"
                                    onClick={this.continue}
                                >Agendar</Button>
                            </CardActions>
                        </Card>
                        {/* </Grid> */}

                        {/* <Grid container item xs={12} justify="center"> */}
                        <Card variant="outlined">
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
                                <Button value={1}
                                    size="small"
                                    onChange={handleChange('occupation')}
                                    defaultValue={values.occupation}
                                    onClick={this.continue}
                                >Agendar</Button>
                            </CardActions>
                        </Card>
                        {/* </Grid> */}

                        {/* <Grid container item xs={12} justify="center"> */}
                        <Card variant="outlined">
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
                                <Button value={2}
                                    size="small"
                                    onChange={handleChange('occupation')}
                                    defaultValue={values.occupation}
                                    onClick={this.continue}
                                >Agendar</Button>
                            </CardActions>
                        </Card>
                        {/* </Grid> */}

                    </Grid>
                </>
            </MuiThemeProvider>
        )
    }
}
export default Specialty;