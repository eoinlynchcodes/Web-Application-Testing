import React from 'react';
import Display from './Display';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            balls: 0,
            strikes: 0,
        }
    }

    onStrike = () => {    
        this.setState({
            strikes: this.state.strikes + 1
        }); 
        console.log(this.state.strikes);
        if(this.state.strikes === 3){
            this.setState({
                strikes: this.state.strikes = 0
            });
            console.log(this.state.strikes);
        }
    }

    onBall = () => {
            this.setState({
            balls: this.state.balls + 1
        });
        if(this.state.balls === 4){
            this.setState({
                balls: this.state.balls = 0
            });
        }
    }

    onFoul = (event) => {
        console.log('Foul');
    }

    onHit = (event) => {
        console.log('Hit');
    }

    render(){
        return(
            <div>
                <button onClick={this.onStrike}>Strike</button>
                <h1> {this.state.strikes} </h1>
                <button onClick={this.onBall}>Ball</button>
                <h1> {this.state.balls}</h1>
                <button onClick={this.onFoul}>Foul</button>
                <button onClick={this.onHit}>Hit</button>
        
                <Display balls={this.state.balls} strikes={this.state.strikes}/>

            </div>
        )
    }
}