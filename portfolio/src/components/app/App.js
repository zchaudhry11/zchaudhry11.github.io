import React, { Component } from "react";
import ReactPlayer from "react-player";
import ReactTilt from "react-universal-tilt";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.scss";

import bgMov from "../../assets/movie/bg.mp4";

import hl2b1 from "../../assets/img/hl2b/hl2b1.jpg";
import hl2b2 from "../../assets/img/hl2b/hl2b2.jpg";
import hl2b3 from "../../assets/img/hl2b/hl2b3.jpg";

// import ph1 from "../../assets/img/ph/ph1.jpg";
// import ph2 from "../../assets/img/ph/ph2.jpg";
// import ph3 from "../../assets/img/ph/ph3.jpg";

import bvr1 from "../../assets/img/bvr/bvr1.jpg";
import bvr2 from "../../assets/img/bvr/bvr2.jpg";
import bvr3 from "../../assets/img/bvr/bvr3.jpg";

import cjs1 from "../../assets/img/cjs/cjs1.jpg";
import cjs2 from "../../assets/img/cjs/cjs2.jpg";
import cjs3 from "../../assets/img/cjs/cjs3.jpg";

import gl1 from "../../assets/img/gl/gl1.jpg";
import gl2 from "../../assets/img/gl/gl2.jpg";
import gl3 from "../../assets/img/gl/gl3.jpg";

import hs1 from "../../assets/img/hs/hs1.jpg";
import hs2 from "../../assets/img/hs/hs2.jpg";
import hs3 from "../../assets/img/hs/hs3.jpg";

const BRIGHT_BORDER_DURATION = 1000;
const GROW_DURATION = 1000;
const BASE_CLASSES = ["item1 diamond-left", "item2 diamond-bottom", "item3 diamond-top", "item4 diamond-bottom", "item5 diamond-right"];
const BORDER_CLASSES = ["item1 brighten-borders", "item2 brighten-borders", "item3 brighten-borders", "item4 brighten-borders", "item5 brighten-borders"];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCategory: 1,
      projectClasses: [...BASE_CLASSES],
      selectedProject: -1,
      changedCategory: false,
      projectPictures: [],
      projectTechnologies: "",
      projectDescription: "",
      projectLink: ""
    };

    this.initInterval = this.initBorders.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
  }

  activatedDiamond = false;

  componentDidMount() {
    this.initBorders();
  }

  initBorders() {
    // Replay project intro animation
    this.setState({ projectClasses: [...BASE_CLASSES] });

    // Apply border animation after projects fade into place
    setTimeout(() => {
      this.setState({ projectClasses: [...BORDER_CLASSES] });
    }, BRIGHT_BORDER_DURATION);
  }

  handleCategoryChange(newActiveCategoryIndex) {
    if (newActiveCategoryIndex !== this.state.activeCategory || this.state.selectedProject !== -1) {
      this.setState({ changedCategory: true });

      setTimeout(() => {
        this.setState({ activeCategory: newActiveCategoryIndex, selectedProject: -1, changedCategory: false });

        if (newActiveCategoryIndex === 1) {
          this.initBorders();
        }

        this.activatedDiamond = false;
      }, 1000);
    }
  }

  handleProjectChange(projectId) {
    if (!this.activatedDiamond) {
      this.activatedDiamond = true;

      let growClass = this.state.projectClasses;
      growClass[projectId] += " grow";

      this.setState({ projectClasses: growClass, changedCategory: true });

      setTimeout(() => {
        let pictures;
        let tech = "";
        let desc = "";
        let link = "";

        switch (projectId) {
          case 0:
            pictures = [hl2b1, hl2b2, hl2b3];
            tech = "C#, HTMLAgilityPack";
            desc =
              "HowLongToBeat.com is a website that tracks how long it takes people to complete specific games. I wrote a scraper in C# that gets all of this data for every game on the website and outputs a .csv file for further processing.";
            link = "https://github.com/zchaudhry11/HowLongToBeat-DataScraper";
            break;
          case 1:
            pictures = [bvr1, bvr2, bvr3];
            tech = "C#, Unity3D, VRTK, HTC Vive, 3D Studio Max, Photoshop";
            desc =
              "Batting VR is a small virtual reality demo I made with C# and Unity3D. I specifically targeted the HTC Vive but the demo is built on top of VRTK so it should work fine with other VR HMDs such as the Oculus Rift. The player is able to pick up a bat and hit the baseballs that are launched in their direction.";
            link = "https://github.com/zchaudhry11/BattingVR";
            break;
          case 2:
            pictures = [cjs1, cjs2, cjs3];
            tech = "HTML, CSS, TypeScript, React, Redux, Howler, AnimeJS, Azure";
            desc = "CytusJS is a browser remake of the popular mobile game Cytus 2 built entirely in plain React.";
            link = "https://www.cytusjs.com";
            break;
          case 3:
            pictures = [gl1, gl2, gl3];
            tech = "HTML, CSS, JavaScript, Bootstrap, Highcharts, C#, ASP.NET MVC, ASP.NET Identity, Entity Framework, SQL Server, Azure";
            desc =
              "Gamelogger is a management platform that allows users to track statistics and get notifications about their game libraries. ASP.NET Identity and OAuth 2.0 are used to securely register users and the Steam and IGDB APIs are used to aggregate every game owned by the user. The Twilio API is used to provide users with text message notifications about their games and there is also notification integration with Google Calendar";
            link = "https://gamelogger.us";
            break;
          case 4:
            pictures = [hs1, hs2, hs3];
            tech = "C#, Unity3D, Photoshop, Spriter";
            desc = "Hungry Samurai is a 2.5D action game built with C# and Unity3D.";
            link = "https://github.com/zchaudhry11/HungrySamurai";
            break;
          default:
            break;
        }

        this.setState({
          projectPictures: pictures,
          projectTechnologies: tech,
          projectDescription: desc,
          selectedProject: projectId,
          changedCategory: false,
          projectLink: link
        });
      }, GROW_DURATION);
    }
  }

  render() {
    let contentClasses = `content-active ${this.state.activeCategory === 1 ? "noselect" : ""} ${this.state.changedCategory ? "fade-out" : ""}`;
    let contactClasses = `contact drop-in-top ${this.state.changedCategory ? "fade-out" : ""}`;
    let projectClasses = `project drop-in-top ${this.state.activeCategory === 1 ? "noselect" : ""} ${this.state.changedCategory ? "fade-out" : ""}`;

    const tiltSettings = {
      speed: 300,
      scale: 1.1,
      reverse: false,
      shine: false,
      reset: true
    };

    let activeContent = (
      <div className={projectClasses}>
        <Carousel showThumbs={false}>
          <div>
            <img src={this.state.projectPictures[0]} alt="" />
          </div>
          <div>
            <img src={this.state.projectPictures[1]} alt="" />
          </div>
          <div>
            <img src={this.state.projectPictures[2]} alt="" />
          </div>
        </Carousel>
        <div className="technologies">
          <span>Built with:</span>
          <span>{this.state.projectTechnologies}</span>
        </div>
        <div className="description">
          {this.state.projectDescription}
          <br />
          <br /> You can check it out{" "}
          <a href={this.state.projectLink} target="_blank" rel="noopener noreferrer">
            here
          </a>
        </div>
      </div>
    );
    if (this.state.activeCategory === 1) {
      if (this.state.selectedProject <= -1) {
        activeContent = (
          <ReactTilt settings={tiltSettings} className="tilted">
            <div className={contentClasses}>
              <ul>
                <li className={this.state.projectClasses[0]} onClick={() => this.handleProjectChange(0)}>
                  <img src={hl2b1} alt="" />
                  <span className="project-title">HowLongToBeat Scraper</span>
                </li>
                <li className={this.state.projectClasses[1]} onClick={() => this.handleProjectChange(1)}>
                  <img src={bvr3} alt="" />
                  <span className="project-title">Batting VR</span>
                </li>
                <li className={this.state.projectClasses[2]} onClick={() => this.handleProjectChange(2)}>
                  <img src={cjs3} alt="" />
                  <span className="project-title">CytusJS</span>
                </li>
                <li className={this.state.projectClasses[3]} onClick={() => this.handleProjectChange(3)}>
                  <img src={gl1} alt="" />
                  <span className="project-title">Gamelogger</span>
                </li>
                <li className={this.state.projectClasses[4]} onClick={() => this.handleProjectChange(4)}>
                  <img src={hs1} alt="" />
                  <span className="project-title">Hungry Samurai</span>
                </li>
              </ul>
            </div>
          </ReactTilt>
        );
      }
    } else {
      activeContent = (
        <div className={contactClasses}>
          <span>Contact</span>
          <span>
            <a href="https://drive.google.com/file/d/1aps5sKoREBxnShqjGlU0yfABNFkEASww/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </span>
          <span>
            <a href="https://github.com/zchaudhry11" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          <span>E-mail: ziachaudhry11@gmail.com</span>
          <span>Phone: 908-324-6362</span>
          <span>
            <a href="https://www.linkedin.com/in/zia-chaudhry" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </span>
        </div>
      );
    }

    return (
      <div className="App">
        <div className="content-base">
          <div className="categories noselect">
            <div></div>
            <div className="category-btn drop-in-top" onClick={() => this.handleCategoryChange(1)}>
              Projects
            </div>
            <div className="category-btn drop-in-top" onClick={() => this.handleCategoryChange(2)}>
              Contact
            </div>
            <div></div>
          </div>
          {activeContent}
        </div>
        <div className="noselect movie-wrapper">
          <ReactPlayer id="bgMovie" url={bgMov} playing={true} loop={true} controls={false} muted={true} width="auto" height="auto" preload="auto" />
        </div>
      </div>
    );
  }
}
