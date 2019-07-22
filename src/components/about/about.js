import React, { Component } from 'react';

class About extends Component {

    render(){
        return (
    
          <section id="about">
            <div className="row">
              <div className="twelve columns main-col">
              <h2>My Skills</h2>
                <div className="SkillsContainer">

                <img className="skill" src="images/react-original-wordmark.svg" alt />
                <img className="skill" src="images/javascript-original.svg" alt />
                <img className="skill" src="images/mongodb-original-wordmark.svg" alt />
                <img className="skill" src="images/mysql-original-wordmark.svg" alt />
                <img className="skill" src="images/php-original.svg" alt />
                <img className="skill" src="images/nodejs-original-wordmark.svg" alt />
                <img className="skill" src="images/html5-original-wordmark.svg" alt />
                
                
                </div>
                <div className="SkillsContainer">
                <img className="skill" src="images/jquery-original-wordmark.svg" alt />
                <img className="skill" src="images/css3-original-wordmark.svg" alt />
                <img className="skill" src="images/apache-original-wordmark.svg" alt />
                <img className="skill" src="images/csharp-original.svg" alt />
                <img className="skill" src="images/wordpress-original.svg" alt />
                <img className="skill" src="images/sass-original.svg" alt />
                <img className="skill" src="images/sourcetree-original-wordmark.svg" alt />
                </div>
       
                  <div className="columns download">
                    <p style={{color:"white"}}>
                      <a href="images/gmarriottCV.pdf" target="_blank" className="button"><i className="fa fa-download" />Download CV</a>
                    </p>
                  </div>
              </div> 
            </div>
          </section> 
        );
      }
}

export default About;