import React, { Component } from 'react';
import '../../static/css/styles.css';
import '../../static/css/960_12_col.css'
class HomePage extends Component {
  render() {
    return (
        <html>
            <head>
                <title>Layout</title>
            </head>
            <body>
                <div class="header">
                    <div class="container_12">
                        <div class="grid_5">
                            <img src="images/header-triangle.png" alt="" width="116" height="100" />
                        </div>
                        <div class="nav grid_7">
                            <a href="">home</a> / <a href="">news</a> / <a href="">archives</a> / <a href="">about</a> / <a href="">contact</a>
                        </div>
                    </div>
                </div>
                <div class="wrapper" style={{backgroundImage: `url(${require("../../static/images/lead_element.jpg")})`}}>
                    <div class="main-story container_12">
                        <div class="grid_6 push_6">
                            <h1><a href="">Fixed Gear Forever</a></h1>
                        </div>
                        <div class="intro grid_3 push_9">
                            <p class="date">16 APRIL 2011</p>
                            <p>The veloheld combines minimalist design with superb quality. Devoid of excessive graphics and gear shift components, the veloheld product range delights us with its beauty and simplicity. The black and white (yin and yang?) bicycles feature a short wheelbase, a single gear and a narrow handlebar... All you need to explore the city streets.</p>
                            <p>For those who want to create their bike themselves, the veloheld frames come in three sizes and two colours and are the perfect starting point. <a href="">Continue reading...</a></p>
                        </div>
                    </div>
                    <div class="more-articles container_12">
                        <h2 class="grid_12"><a href="">More Articles</a></h2>
                        <div class="grid_3">
                            <img src="images/more1.jpg" alt="The road ahead" width="220" height="125" />
                            <p><a href="">On the Road: From the fixed gear fanatic's point of view</a></p>
                            <p><a href="">Brand History: Pashley Cycles - hand-built in England</a></p>
                            <p><a href="">Frame Wars: Innovations in cycle manufacture and repair</a></p>
                        </div>
                        <div class="grid_3">
                            <img src="images/more2.jpg" alt="Sketchbook" width="220" height="125" />
                            <p><a href="">Touring Diary: A sketchbook in your basket</a></p>
                            <p><a href="">Top Ten Newcomers for 2012: A peek at what's to come</a></p>
                            <p><a href="">InnerTube: The best cycling videos on the web</a></p>
                        </div>
                        <div class="grid_3">
                            <img src="images/more3.jpg" alt="Repair shop sign" width="220" height="125" />
                            <p><a href="">Product Review: All baskets were not created equal</a></p>
                            <p><a href="">Going Public: Out &amp; about with the founder of Public</a></p>
                            <p><a href="">Cycle Lane Defence: Know your rights</a></p>
                        </div>
                        <div class="grid_3">
                            <img src="images/more4.jpg" alt="Schwinn Spitfire" width="220" height="125" />
                            <p><a href="">Bicycle Hall of Fame: The 1958 Schwinn Spitfire</a></p>
                            <p><a href="">Reader Survey: Share your thoughts with us!</a></p>
                            <p><a href="">Chain Gang: The evolution of the humble bike chain</a></p>
                        </div>
                    </div>
                </div>
                <div class="footer clearfix">
                    <div class="container_12">
                        <p class="grid_12"><a href="">Legal Information</a> | <a href="">Privacy Policy</a> | <a href="">Copyright &copy; Pedal Faster 2011</a></p>
                    </div>
                </div>
            </body>
        </html>
    )
  }
}
export default HomePage;