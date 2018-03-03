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

    handleChange(key) {
        let currState = this.state;
console.log("Hello: "+key);
        this.setState(currState);
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }



    render(){
        const Renderskills= ({skills}) => (
            <div>
                {skills.map(skill=> (
                    <div className="skill" key={skill}>
                        <label>
                            <input onClick={this.handleChange.bind(this, skill)} type="checkbox" name="skills" value="{skill}"/>
                            {skill}
                        </label>
                    </div>
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
