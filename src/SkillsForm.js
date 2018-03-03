import React, { Component } from 'react';



class SkillsForm extends Component{


    constructor(props){
        super(props);

        this.state={
            availableSkills:["hi", "bye"],
            selectedSkills:["bye"]};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let currState = this.state;


        this.setState(currState);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }



    render(){
        const Renderskills= ({skills}) => (
            <div>
                {skills.map(skill=> (
                    <div className="skill" key={skill}>{skill}</div>
                ))}
            </div>
        );

        return(
            <form onSubmit={this.handleSubmit}>

                <Renderskills skills={this.state.availableSkills}/>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SkillsForm;
