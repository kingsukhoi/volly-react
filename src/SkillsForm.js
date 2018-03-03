import React, { Component } from 'react';



class SkillsForm extends Component{


    componentDidMount() {
        //http://vollyapp.azurewebsites.net/api/user
        fetch("https://vollyapp.azurewebsites.net/api/skill")
            .then(res => res.json())
            .then((result)=>{
                console.log(result);
                this.setState({
                    availableSkills: result.item,
                    selectedSkills:[]
                });
            },(error)=>{
                this.setState({
                    availableSkills: [{id:1, name:"shit"},{id:2, name:"is"},{id:1, name:"broken"}],
                    selectedSkills:[]
                });
                console.log(error);
            });
    }

    constructor(props){
        super(props);

        this.state={
            /*availableSkills:[{id:1, name:"hi"}, {id:2, name:"bye"}],
            */};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key) {
        let currState = this.state;
        let currSelSkills = currState.selectedSkills;

        let skillIndex = currSelSkills.indexOf(key.id);
        if (skillIndex === -1){
            currSelSkills.push(key);
        }else {
            currSelSkills.splice(skillIndex,1);
        }
        console.log(currSelSkills);

        this.setState(currState);
    }

    handleSubmit(event) {
        event.preventDefault();
    }



    render(){
        const Renderskills= ({skills}) => (
            <div>

                hello
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
