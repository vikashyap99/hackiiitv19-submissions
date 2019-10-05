import React,{ Component} from 'react';

class NameForm extends Component {
    
    constructor(props){
        super(props);
    this.state = {
        
        doctername: " ",
        patientname: " ",
        symptoms: " ",
        prescription: " "
    }

    }

  
    handleChangedocter = (event) => {
        
      this.setState({doctername: event.target.value});
    }

    handleChangepatient= (event)  => {
        this.setState({patientname: event.target.value});
      }
    handleChangeprescreption = (event) => {
        this.setState({prescription: event.target.value});
      }
    handleChangesymptoms = (event)=> {
        this.setState({symptoms: event.target.value});
      }

  
      handleSubmit = (event)  => {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(this.state);
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Docter Name:
            <input type="text" value={this.state.value} onChange={this.handleChangedocter} />
          </label>
          <label>
            Paitent Name:
            <input type="text" value={this.state.value} onChange={this.handleChangepatient} />
          </label>
          <label>
          Symptoms:
          <textarea value={this.state.value} onChange={this.handleChangesymptoms} />
        </label>
        <label>
          Prescription:
          <textarea value={this.state.value} onChange={this.handleChangeprescreption} />
        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;