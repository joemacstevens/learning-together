import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import Preview from "./components/preview/preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [
        {
          id: "1",
          name: "Redux",
          date: "March 1",
          description: "Learn redux techniques",
          instructor: "John Smith",
          location: "Brooklyn",
          time: "1400",
          image: "https://via.placeholder.com/40",
          image_desc: "course image",
          category: "1"
        },
        {
          id: "2",
          name: "React",
          date: "March 16",
          description: "Learn react techniques",
          instructor: "Jasmin Smith",
          location: "Brooklyn",
          time: "1200",
          image: "https://via.placeholder.com/40",
          image_desc: "course image",
          category: "1"
        },
        {
          id: "3",
          name: "Saga",
          description: "Learn saga techniques",
          instructor: "Jane Smith",
          location: "Brooklyn",
          time: "1000",
          image: "https://via.placeholder.com/40",
          image_desc: "course image",
          category: "2"
        },
        {
          id: "4",
          name: "Yoga",
          description: "Learn yoga techniques",
          instructor: "Jazmin Smith",
          location: "Brooklyn",
          time: "1400",
          image: "https://via.placeholder.com/40",
          image_desc: "course image",
          category: "3"
        }
      ]
    };
  }

  render() {
    const wrkshopPreview = this.state.workshops.map(workshop => {
      return <Preview key={workshop.id} workshop={workshop} />;
    });

    return (
      <div className="App">
<<<<<<< HEAD
        <Navbar />
        <Jumbotron />
        {wrkshopPreview}
=======
        <h1>Learning Together Test Pull</h1>
>>>>>>> e6e4339860bbbd1841f112b0455b25addf22d92c
      </div>
    );
  }
}

export default App;
