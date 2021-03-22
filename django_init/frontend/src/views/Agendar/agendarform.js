import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, makeStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import Specialty from './specialty'
import Modality from './modality'
import Formuser from './formUser'

const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: "6rem auto",
    }
})


export const AgendarForm = (props) => {

    const [activateStep, setActivateStep] = useState(0);

    function getSteps() {
        return ["Especialidad", "Modalidad", "3", "4"];
    }

    const handleNext = () => {
        setActivateStep(prevActivateStep => prevActivateStep + 1)
    };
    const handleBack = () => {
        setActivateStep(activateStep - 1)
    };
    const steps = getSteps();

    function getStepsContent(StepIndex) {
        switch (StepIndex) {
            case 0:
                return <Specialty
                    handleNext={handleNext}
                />;
            case 1:
                return <Modality
                    handleNext={handleNext}
                    handleBack={handleBack}
                    state={activateStep}
                    steps={steps}
                />
            case 2:
                return <Formuser
                    handleNext={handleNext}
                />;
            case 4:
                return "Step Four";
            default:
                (console.log('This is a multi-step form built with React.'))
        }

    }
    const classes = useStyles();

    return (
        <>
            <Grid className="space" container spacing={1} direction="row" justify="center">
                <h1 style={{ padding: "24px 0" }}>Especialidad</h1>
                <div className={classes.root}>
                    <Stepper activeStep={activateStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>
                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <>
                        {activateStep === steps.length ? "The Steps Completed" : (
                            <>
                                {getStepsContent(activateStep)}
                            </>
                        )}
                    </>
                </div>
            </Grid>
        </>
    )
}
export default AgendarForm;
// export class AgendarForm extends React.Component {
//     state = {
//         step: 1,
//         specialty: '',
//         modality: '',
//         date: '',
//         time: '',
//         hour: '',
//         user: '',
//         doctor: '',
//     }

//     nextStep = () => {
//         const { step } = this.state;
//         this.setState({
//             step: step + 1
//         });
//     };

//     prevStep = () => {
//         const { step } = this.state;
//         this.setState({
//             step: step - 1
//         });
//     };
//     handleChange = input => e => {
//         this.setState({ [input]: e.target.value });
//     };
//     render() {
//         const { step } = this.state;
//         const { specialty,
//             modality,
//             date,
//             time,
//             hour,
//             user,
//             doctor, } = this.state;
//         const values = {
//             specialty,
//             modality,
//             date,
//             time,
//             hour,
//             user,
//             doctor,
//         };
//         switch (step) {
//             case 1:
//                 return (
//                     <Specialty
//                         nextStep={this.nextStep}
//                         handleChange={this.handleChange}
//                         values={values}
//                     />
//                 );
//             case 2:
//                 return (
//                     <Specialty
//                         nextStep={this.nextStep}
//                         prevStep={this.prevStep}
//                         handleChange={this.handleChange}
//                         values={values}
//                     />
//                 );
//             default:
//                 (console.log('This is a multi-step form built with React.'))
//         }
//     }
// }
// export default AgendarForm;