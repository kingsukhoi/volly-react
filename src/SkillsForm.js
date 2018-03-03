import React, { Component } from 'react';



class SkillsForm extends Component{


    constructor(props){
        super(props);

        this.state={
            availableSkills:[{id:1, name:"hi"}, {id:2, name:"bye"}],
            selectedSkills:[{id:2, name:"bye"}]};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key) {
        let currState = this.state;
        let currSelSkills = currState.selectedSkills;

        let skillIndex = currSelSkills.indexOf(key);
        if (skillIndex === -1){
            currSelSkills.append(key);
        }else {
            currSelSkills.splice(skillIndex,1);
        }

        this.setState(currState);
    }

    handleSubmit(event) {
        event.preventDefault();
    }



    render(){
        const Renderskills= ({skills}) => (
            <div>
                {skills.map(skill=> (
                    <div className="skill" key={skill.id}>
                        <label>
                            <input onClick={this.handleChange.bind(this, skill)} type="checkbox" name="skills" value="{skill.name}"/>
                            {skill.name}
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
