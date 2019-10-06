import React,{ Component} from 'react';
import axios from 'axios';

class NameForm extends Component {
    
  
      handleSubmit = (event)  => {
        
        event.preventDefault();
        let x1 = document.getElementById("a1").value;
        let x2 = document.getElementById("a2").value;
        let x3 = document.getElementById("a3").value;
        let x4 = document.getElementById("a4").value;
        
        
        const data = {
          doctername: x1,
          patientname: x2,
          prescription: x3,
          symptoms: x4
        }
        axios.post(`https://genesis-forger.firebaseio.com/medical.json/`,data)
        .then(res=>{
          console.log(res);
          console.log(data);
        });
        
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Docter Name:
            <input type="text" id="a1"  />
          </label>
          <label>
            Paitent Name:
            <input type="text" id="a2"   />
          </label>
          <label>
          Symptoms:
          <textarea  id="a3"  />
        </label>
        <label>
          Prescription:
          <textarea  id="a4" />
        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;