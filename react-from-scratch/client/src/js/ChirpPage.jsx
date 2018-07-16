import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'
import CreateCard from './card';
import Pagination from './Pagination';

class ChirpPage extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            chirp: [['nextid','b','c']],
        };
    }
    
    componentDidMount() {
this.goGetCard()
    } 

    goGetCard() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then(data => {
            if (data[0] !== undefined) {
                this.setState({
                    chirp: data
                });                     
            }      
        })        
    }

 render (props) {
     return(
        <React.Fragment>
        <Pagination />
        <div className="text-center">
        {this.state.chirp.map((element) => {
            let [x,y,z] = element
            if(x === 'nextid'){
                return (<h1 className="text-center d-block" key={this.props.match.params.id}>This Chirp Doesn't Exist</h1>)
            }
            return CreateCard(x,y,z)
        })}
        </div>        
        </React.Fragment>
     )
 }
}

export default ChirpPage;