import React from "react";
import ImgCard from "./components/ImgCard";
import images from "./images.json";
import "./App.css";


let idArray =[]

class App extends React.Component{

    state={
        images:images,
        score: 0,
        topScore: 0,
        content:"Click an image to begin!"
    }

    handleShuffle = (id) => {

        if(idArray.indexOf(id)=== -1){
            idArray.push(id);
            this.setState({content: "You guessed correctly!",score: this.state.score + 1})
            if(this.state.score>=this.state.topScore){
                this.setState({ topScore: this.state.score +1})
            }
        }
        else{
            idArray =[]
            this.setState({content: "You guessed incorrectly!" , score:0})
        }
        const images = shuffle(this.state.images)
        this.setState({images});
      };
       
    render(){
        return(
            <div>
            <nav className="navbar navbar-dark">
                <ul className="navbar-nav bd-navbar-nav flex-row"><li className="navbar-brand">ClickyGame</li>
                    <li className="nav-item">{this.state.content}</li>
                    <li className="nav-item">Score : {this.state.score} | Top Score : {this.state.topScore} </li>
                </ul>
            </nav>
            <div className="jumbotron">
                <h1>Clicky Game!</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </div>
            <div className="container">
                
                <ImgCard images={this.state.images} handleShuffle ={this.handleShuffle}/>
            </div>
            <footer className = "footer">
                <div>Clicky Game</div>
            </footer>
            </div>
        )
    }

}

function shuffle(array) {
    var i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

export default App;