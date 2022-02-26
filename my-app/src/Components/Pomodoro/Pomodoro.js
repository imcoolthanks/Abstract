import './Pomodoro.css';
import React from 'react';

class Pomodoro extends React.Component {
    constructor(self) {
        super(self);   
    }

    componentDidMount() {

        let countS = 25;
        document.getElementById("session").innerHTML = countS;
        let countB = 5;
        document.getElementById("break").innerHTML = countB;
        let pos = "pomodoro";
        let countLama;
        let posLama;
        let count;
        document.getElementById("stats").innerHTML = pos;
        
        document.getElementById("sessInc").on("click", function(){
            if (document.getElementById("session").innerHTML > 0){
            countS = parseInt(document.getElementById("session").innerHTML);
            countS+=1;
            document.getElementById("session").innerHTML = countS;
            
            }
        });
        document.getElementById("sessDec").on("click", function(){
            if (document.getElementById("session").innerHTML > 1){
            countS = parseInt(document.getElementById("session").innerHTML);
            countS-=1;
            document.getElementById("session").innerHTML = countS;
            
            }
        });
        
        document.getElementById("breakInc").on("click", function(){
            if (document.getElementById("break").innerHTML > 0){
            countB = parseInt(document.getElementById("break").innerHTML);
            countB+=1;
            document.getElementById("break").innerHTML = countB;
            }    
        });
        document.getElementById("breakDec").on("click", function(){
            if (document.getElementById("break").innerHTML > 1){
            countB = parseInt(document.getElementById("break").innerHTML);
            countB-=1;
            document.getElementById("break").innerHTML = countB;
            }
        });  
        document.getElementById("start").on("click", function(){
            if (count != countS || clock.getTime()==0){
            clock.setTime(countS*60);
            pos="session";
            document.getElementById("stats").innerHTML = pos;
            } else {
            pos = posLama;
            document.getElementById("stats").innerHTML = pos;
            }
            count = countS;    
            clock.start();    
        });
        document.getElementById("stop").on("click", function(){
            clock.stop();
            countLama = clock.getTime();
            posLama = document.getElementById("stats").innerHTML;
        });
        document.getElementById("clear").on("click", function(){
            clock.stop();
            pos = "pomodoro";
            document.getElementById("stats").innerHTML = pos;
            clock.setTime(0);
        });;
    }

    render() {
        return (
            <div className="pomodoro">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <p>session length</p>
                        </div>
                        <div className="row counter">
                            <div className="col-md-4">
                                <button className="btn btn-default" id="sessDec">-</button>        
                            </div>
                            <div className="col-md-2">
                                <div id="session"></div>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-default" id="sessInc">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row"><p>break length</p></div>
                        <div className="row counter">
                            <div className="col-md-4">
                                <button className="btn btn-default" id="breakDec">-</button>
                            </div>
                            <div className="col-md-2">
                                <div id="break"></div>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-default" id="breakInc">+</button>        
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div id="clock" className="row">
                    <div className="timer"><div className="middle"></div>
                </div>

                <div className="row" id="statRow">
                    <div id="stats"></div>
                </div>
                <div className="container">
                    <div className="row" id="btns">
                    <button className="btn btn-default btn-lg" id="start">start</button>
                    <button className="btn btn-default btn-lg" id="stop">stop</button>
                    <button className="btn btn-default btn-lg" id="clear">clear</button>
                    </div>
                </div>
                    
                </div>
            </div>
        );
    }
}

export default Pomodoro;
    