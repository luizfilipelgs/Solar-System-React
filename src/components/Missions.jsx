import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../styles/Missions.css';

class Missions extends Component {
  render() {
    const allMissions = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));
    return (
      <div className="missions-section" data-testid="missions">
        <div className="titulos-h2">
          <Title headline="Missões" />
        </div>
        <div className="missions-cards">
          { allMissions }
        </div>
      </div>
    );
  }
}

export default Missions;
