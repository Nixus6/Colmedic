import React, { Component } from 'react';
import Specialty from './specialty'
import Modality from './modality'

export class AgendarForm extends React.Component {
    state = {
        step: 1,
        specialty: '',
        modality: '',
        date: '',
        time: '',
        hour: '',
        user: '',
        doctor: '',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };
    render() {
        const { step } = this.state;
        const { specialty,
            modality,
            date,
            time,
            hour,
            user,
            doctor, } = this.state;
        const values = {
            specialty,
            modality,
            date,
            time,
            hour,
            user,
            doctor,
        };
        switch (step) {
            case 1:
                return (
                    <Specialty
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Specialty
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}
export default AgendarForm;