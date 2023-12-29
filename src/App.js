import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import { FaBackspace } from 'react-icons/fa';
export default class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        solution: 0
    };
   }

handleChange=(event)=>{
    this.setState({solution: event.target.value},()=>console.log(this.state.solution));
  }

handleClick=(event)=>{
      if(this.state.solution===0){
        document.getElementById("calc_value").value=event.target.value;
        this.setState({solution: event.target.value},()=>console.log(this.state.solution));
      }
      else{
        document.getElementById("calc_value").value+=event.target.value;
      this.setState({solution: this.state.solution+event.target.value},()=>console.log(this.state.solution));
      }
 }

clearChar=()=>{
    var val=document.getElementById("calc_value").value;
    var res=val.substring(0,val.length-1);
    document.getElementById("calc_value").value=res;
    this.setState({solution: res},()=>console.log(this.state.solution));
}

clearAll=()=>{
    document.getElementById("calc_value").value=null;
    // this.setState({solution:5},()=>console.log(this.state.solution));
    this.setState({solution:""},()=>console.log(this.state.solution));
}

handleSubmit=(event)=>{
    // try{
    //     var res=eval(this.state.solution);
    //     document.getElementById("calc_value").value= res;
    //     event.preventDefault();
    //     this.setState({solution: res},()=>console.log(this.state.solution));
    // }
    // catch{
    // document.getElementById("calc_value").value= "Error";
    // }
    try {
        const expression = this.state.solution;
        const calculate = new Function('return ' + expression);
        const res = calculate();
        
        document.getElementById("calc_value").value = res;
        event.preventDefault();
        this.setState({ solution: res }, () => console.log(this.state.solution));
    } catch {
        document.getElementById("calc_value").value = "Error";
    }
}

    render(){
    return(
    <div id="main_div">
        <h1>Simple Calculator using ReactJS</h1>
        <form name="calc" onSubmit={this.handleSubmit}>
        <table>
        <tbody>
            <tr>
                <th colSpan="4" id="heading">
                    CALCULATOR
                </th>
            </tr>
            
            <tr>
                <td colSpan="4">
                    <input name="calc_value" id="calc_value" onChange={this.handleChange} placeholder='0' />
                </td>

            </tr>
            <tr>
                <td>
                    <button className="but first_row" type="button" onClick={this.clearAll}>CE</button>
                </td>
                <td>
                    <button className="but first_row" type="button" onClick={this.clearChar}><FaBackspace /></button>
                </td>
                <td>
                    <input className="but first_row" type="button" name="dot" value="." onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but last" type="button" name="divide" value="/" onClick={this.handleClick} />
                </td>
            </tr>
            <tr>
                <td>
                    <input className="but" type="button" name="7" value="7" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but" type="button" name="8" value="8" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but" type="button" name="9" value="9" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but last" type="button" name="mul" value="*" onClick={this.handleClick} />
                </td>
            </tr>
            <tr>
                <td>
                    <input className="but" type="button" name="4" value="4" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but" type="button" name="5" value="5" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but" type="button" name="6" value="6" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but last" type="button" name="sub" value="-" onClick={this.handleClick} />
                </td>
            </tr>
            <tr>
                <td>
                    <input className="but" type="button" name="1" value="1" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but" type="button" name="2" value="2" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but" type="button" name="3" value="3" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but last" type="button" name="add" value="+" onClick={this.handleClick} />
                </td>
            </tr>
            <tr>
                <td>
                    <input className="but" type="button" name="brace1" value="(" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but" type="button" name="0" value="0" onClick={this.handleClick} />
                </td>
                <td>
                    <input className="but" type="button" name="brace2" value=")" onClick={this.handleClick} />
                </td>
                <td>
                    <input id="equal" className="but" type="submit" name="equal" value="=" />
                </td>
            </tr>
            </tbody>
        </table>
        </form> 
    </div>
    )
    }
}


