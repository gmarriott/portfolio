import React, { Component } from 'react';
import reactLogo from "../../images/react-original-wordmark.svg"
import typescriptLogo from "../../images/typescript.svg"
import mongoLogo from "../../images/mongodb-original-wordmark.svg"
import mysqlLogo from "../../images/mysql-original-wordmark.svg"
import phpLogo from "../../images/php-original.svg"
import nodeLogo from "../../images/nodejs-original-wordmark.svg"
import html5Logo from "../../images/html5-original-wordmark.svg"
import nextLogo from "../../images/nextjs-icon.svg"
import css3Logo from "../../images/css3-original-wordmark.svg"
import apacheLogo from "../../images/apache-original-wordmark.svg"
import csharpLogo from "../../images/csharp-original.svg"
import wordpressLogo from "../../images/wordpress-original.svg"
import sassLogo from "../../images/sass-original.svg"
import sourceTreeLogo from "../../images/sourcetree-original-wordmark.svg"
// @ts-ignore
import georgeCV from "../../images/George-CV.pdf"

export default class Skills extends Component {

    render() {
        return (

            <section id="skills">
            <div className="row skills-block">
                <div className="twelve columns main-col">
                <h3 className="profile-title">My Skills</h3>
                <div className="SkillsContainer">
                    <img className="skill" src={reactLogo} alt="react-logo" />
                    <img className="skill" src={typescriptLogo} alt="typescript-logo" />
                    <img className="skill" src={mongoLogo} alt="mongo-logo" />
                    <img className="skill" src={mysqlLogo} alt="mysql-logo" />
                    <img className="skill" src={phpLogo} alt="php-logo" />
                    <img className="skill" src={nodeLogo} alt="node-logo" />
                    <img className="skill" src={html5Logo} alt="html5-logo" />
                    <img className="skill" src={nextLogo} alt="next-logo" />
                    <img className="skill" src={css3Logo} alt="css-logo" />
                    <img className="skill" src={apacheLogo} alt="apache-logo" />
                    <img className="skill" src={csharpLogo} alt="csharp-logo" />
                    <img className="skill" src={wordpressLogo} alt="wordpress-logo" />
                    <img className="skill" src={sassLogo} alt="sass-logo" />
                    <img className="skill" src={sourceTreeLogo} alt="sourcetree-logo" />
                </div>

                <div className="resume-button">
                    <p style={{ color: "white" }}>
                    <a href={georgeCV} target="_blank" rel="noreferrer" className="button">
                        <i className="fa fa-download" style={{ marginRight: "8px" }} />
                        Download CV
                    </a>
                    </p>
                </div>
                </div>
            </div>
            </section>
        );
    }
}
