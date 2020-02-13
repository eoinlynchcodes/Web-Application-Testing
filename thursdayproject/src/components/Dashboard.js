import React from 'react';

export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            balls: 0,
            strikes: 0,
        }
    }

    onStrike = (event) => {    
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

    onBall = (event) => {
        this.setState({
            balls: this.state.balls + 1
        });
        console.log(this.state.balls);
        if(this.state.balls === 4){
            this.setState({
                balls: this.state.balls = 0
            });
            console.log(this.state.balls);
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
                <button onClick={this.onBall}>Ball</button>
                <button onClick={this.onFoul}>Foul</button>
                <button onClick={this.onHit}>Hit</button>
            </div>
        )
    }
}