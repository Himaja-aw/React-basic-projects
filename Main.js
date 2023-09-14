import React,{Component} from 'react'
class Main extends Component {
    constructor(props){
        super(props);
        this.state ={
            number : 0
         }
    }
    increment = ()=>{
        this.setState({number: this.state.number+1})
     }
    decrement =()=>{
        this.setState({number: this.state.number-1})
    }
    render(){
        return(
            <div className='row justify-content-center'>
            <div className='col-md-5' style={{marginTop:'200px',border:'5px solid black'}}>
                    <h1>CART</h1>
                    <div class="d-flex gap-2 justify-content-md-center">
                        <button className="btn btn-danger" onClick={this.decrement} >-</button>
                        <h1>{this.state.number}</h1>
                        <button className="btn btn-success" onClick={this.increment} >+</button>
                    </div>
            </div>
            </div>
       
        )
    }
}
export default Main;