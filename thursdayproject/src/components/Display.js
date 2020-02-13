import React from 'react';

export default class Display extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {

        }
    }


    
    render(){
        return(
            <div>
                <div>
                    <h1>Balls: {this.props.balls}</h1>
                </div>

                <div>
                    <h1>Strikes: {this.props.strikes}</h1>
                </div>
            </div>
        )
    }

}