import React, { Component, Fragment } from "react";
import { NavLink } from 'react-router-dom'
import { Hero } from "../hero";
import { PreviewComponent } from "../preview";
import { CategoryListComponent } from "../categoryList";
import { FooterComponent } from "../footer"
import { getWorkshopList } from '../../api'
import './landing.scss';
import { NavbarComponent } from "../navbar";
import { loadCategories } from '../../api';
import Carousel from 'nuka-carousel';


export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
      error: null
    };
  }

  componentDidMount() {
    getWorkshopList()
      .then(response => {
        let workshops = response.data
        this.setState({ workshops })
      })
      .catch(error => this.setState({ error: 'Please try again later' }))

    loadCategories()
      .then((data) => {

        this.setState({
          categories: data
        })
      })
  }

  render() {
    const wrkshopPreview = this.state.workshops.map((workshop, idx) => {
      return <NavLink to={`/workshop/${workshop.id}`} className="preview-card" key={idx}><PreviewComponent workshop={workshop} /></NavLink>
    });
    const { isUser, location } = this.props
    return (
      <div >
        <NavbarComponent isUser={isUser} location={location} />
        <div className='first-container'>
          <Hero title="Better Together" />
          <div className="grid-container landing-preview">
            <h2 className="section-title">Upcoming Workshops</h2>
            <Carousel heightMode="max" initialSlideHeight={255} >
              {this.state.error ? <p>{this.state.error}</p> : wrkshopPreview}
            </Carousel>
          </div>
          <div className="grid-container landing-preview">
            <h2 className="section-title">Categories</h2>
            <CategoryListComponent workshop={this.state.workshops} categories={this.state.categories} />
          </div>
          <FooterComponent isUser={isUser} userId={this.state.userId} />
        </div>
      </div>
    );
  }
}


