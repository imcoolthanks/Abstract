import './Clock.css';
import React from 'react';

class Clock extends React.Component {
    constructor(self) {
        super(self);   
    }

    componentDidMount() {
        var hour = document.getElementById("hour");
        var minute = document.getElementById("minute");
        var seconds = document.getElementById("seconds");

        var interval = setInterval(
            function clock(){
                var date_now = new Date();
                var hr = date_now.getHours();
                var min = date_now.getMinutes();
                var sec = date_now.getSeconds();

                var calc_hr = (hr * 30) + (min / 2);
                var calc_min =    (min * 6)  ;
                var calc_sec = sec * 6 ;

                hour.style.transform = "rotate(" + calc_hr + "deg)";
                minute.style.transform = "rotate(" + calc_min + "deg)";
                seconds.style.transform = "rotate(" + calc_sec + "deg)";
            }, 1000);
    }

    render() {
        return (
            <>
                <div class="clock">
                    <img src="https://dl.dropbox.com/s/f3b3lyanili7zl2/clock%20template-01.svg?raw=1"></img>
                    <div class="hour hand" id="hour"></div>
                    <div class="minute hand" id="minute"></div>
                    <div class="seconds hand" id="seconds"></div>
                </div> 
                <script src="./clocktick.js"></script>
            </>
        );
    }
}

export default Clock;
    