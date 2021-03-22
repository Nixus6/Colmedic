import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import presencial from './img/presencial.svg';
import telefonica from './img/telefonica.svg';
import videollamada from './img/videollamada.svg';
import './agendar.css'

const Modality = (props) => {

    const handleNext = (e) => {
        e.preventDefault();
        props.handleNext();
        // setActivateStep(prevActivateStep => prevActivateStep + 1)
    }

    function Cardsmodality(props) {
        return (
            <>
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
                        <Button
                            onClick={handleNext}>Seleccionar</Button>
                    </CardActions>
                </Card>
            </>
        )
    }

    return (
        <>

            <Grid container item xs={12}>
                <p style={{ margin: 0 }}>Modalidades Medicina General</p>
            </Grid>
            <br />
            <Grid className="space" container spacing={1} direction="row" justify="center">
                <Cardsmodality name="Presencial" image={presencial} />
                <Cardsmodality name="Telefonica" image={telefonica} />
                <Cardsmodality name="Videollamada" image={videollamada} />

            </Grid>
        </>

    );
}
export default Modality;

// export class Modality extends React.Component {
//     continue = e => {
//         e.preventDefault();
//         this.props.nextStep();
//     };

//     back = e => {
//         e.preventDefault();
//         this.props.prevStep();
//     };
//     render() {
//         const { values, handleChange } = this.props;
//         return (
//             <MuiThemeProvider>
//                 <>

//                     <Grid className="space" container spacing={1} direction="row" justify="center">
//                         {/* <Grid container item xs={6}>
//         <Breadcump />
//     </Grid> */}
//                         <h1>Modalidad</h1>
//                         {/* <Grid container item xs={12} justify="center"> */}
//                         <Card variant="outlined">
//                             <CardContent>

//                                 <Typography variant="h5" component="h2">
//                                     Presencial
// </Typography>
//                                 <img
//                                     className=""
//                                     src={image1}
//                                     width="100"
//                                 />
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     value={0}
//                                     size="small"
//                                     onChange={handleChange('occupation')}
//                                     defaultValue={values.occupation}
//                                     onClick={this.continue}
//                                 >Agendar</Button>
//                             </CardActions>
//                         </Card>
//                         {/* </Grid> */}

//                         {/* <Grid container item xs={12} justify="center"> */}
//                         <Card variant="outlined">
//                             <CardContent>

//                                 <Typography variant="h5" component="h2">
//                                     Telefónica
// </Typography>
//                                 <img
//                                     className=""
//                                     src={image2}
//                                     width="100"
//                                 />
//                             </CardContent>
//                             <CardActions>
//                                 <Button value={1}
//                                     size="small"
//                                     onChange={handleChange('occupation')}
//                                     defaultValue={values.occupation}
//                                     onClick={this.continue}
//                                 >Agendar</Button>
//                             </CardActions>
//                         </Card>
//                         {/* </Grid> */}

//                         {/* <Grid container item xs={12} justify="center"> */}
//                         <Card variant="outlined">
//                             <CardContent>

//                                 <Typography variant="h5" component="h2">
//                                     Videollamada
// </Typography>
//                                 <img
//                                     className=""
//                                     src={image3}
//                                     width="100"
//                                 />
//                             </CardContent>
//                             <CardActions>
//                                 <Button value={2}
//                                     size="small"
//                                     onChange={handleChange('occupation')}
//                                     defaultValue={values.occupation}
//                                     onClick={this.continue}
//                                 >Agendar</Button>
//                             </CardActions>
//                         </Card>
//                         {/* </Grid> */}

//                     </Grid>
//                 </>
//             </MuiThemeProvider>
//         )
//     }
// }
// export default Modality;