import React from "react";
import Display from "./Display";


export function onStrike(){
    this.setState({
      strikes: this.state.strikes + 1
    });
    if (this.state.strikes === 3) {
      this.setState({
        strikes: this.state.strikes = 0,
        balls: this.state.balls = 0
      });
    }
  };

  export function onHit(){
    this.setState({
        strikes: this.state.strikes = 0,
        balls: this.state.balls = 0
    })
}

export function onFoul(){
    if(this.state.strikes === 0){
        this.setState({
            strikes: this.state.strikes + 1
        })
    } else if(this.state.strikes === 1) {
        this.setState({
            strikes: this.state.strikes + 1
        })
    }
    else if (this.state.strikes === 2){
        this.setState({
            strikes: this.state.strikes
        })
    }
};

  export function onBall(){
    this.setState({
      balls: this.state.balls + 1
    });
    if (this.state.balls === 3) {
      this.setState({
        balls: (this.state.balls = 0)
      });
    }
  };


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

//    onStrike = () => {
//     this.setState({
//       strikes: this.state.strikes + 1
//     });
//     console.log(this.state.strikes);
//     if (this.state.strikes === 3) {
//       this.setState({
//         strikes: this.state.strikes = 0,
//         balls: this.state.balls = 0
//       });
//       console.log(this.state.strikes);
//     }
//   };

//   onBall = () => {
//     this.setState({
//       balls: this.state.balls + 1
//     });
//     if (this.state.balls === 3) {
//       this.setState({
//         balls: (this.state.balls = 0)
//       });
//     }
//   };

//   onFoul = event => {
//       if(this.state.strikes === 0){
//           this.setState({
//               strikes: this.state.strikes + 1
//           })
//       } else if(this.state.strikes === 1) {
//           this.setState({
//               strikes: this.state.strikes + 1
//           })
//       }
//       else if (this.state.strikes === 2){
//           this.setState({
//               strikes: this.state.strikes
//           })
//       }
//   };

//   onHit = event => {
//       this.setState({
//           strikes: this.state.strikes = 0,
//           balls: this.state.balls = 0
//       })
// };

  render() {
    return (
      <div>
        <button onClick={this.onStrike}>Strike</button>
        <button onClick={this.onBall}>Ball</button>
        <button onClick={this.onFoul}>Foul</button>
        <button onClick={this.onHit}>Hit</button>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }
}
