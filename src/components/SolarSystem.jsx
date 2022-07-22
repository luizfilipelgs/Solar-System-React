import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    const allPlanets = Planets.map(({ name, image }) => (
      <PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />
    ));

    return (
      <div className="planets-section" data-testid="solar-system">
        <div className="titulos-h2">
          <Title headline="Planetas" />
        </div>
        <div className="planets-cards">
          {allPlanets}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
