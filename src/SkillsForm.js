import React, { Component } from 'react';



class SkillsForm extends Component{


    constructor(props){
        super(props);

        this.state={availableSkills:["hi", "bye"]};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    renderSkills(){
        let skills = this.state.availableSkills.map((skill)=>{
            const currSkill = skill;
            renderSkill(currSkill);

        });

        return skills;
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                <renderSkills/>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SkillsForm;

function renderSkill(props) {

    return (
        <label>
            Name:
            <input type="text" value={props.skill} onChange={props.onchange} />
        </label>

);
}
