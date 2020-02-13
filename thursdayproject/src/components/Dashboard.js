import React from 'react';

export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            balls: null,
            strikes: '',
        }
    }

    onStrike = (event) => {        
    }

    onBall = (event) => {
        console.log('Ball');
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