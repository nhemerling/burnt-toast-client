import React, { Component } from 'react';
import SearchSkillCard from '../../components/SearchSkillCard/SearchSkillCard';

const dummySkills = [
  {
    id: '1',
    name: 'dodgeball',
    description: 'I dodge balls real good.',
  },
  {
    id: '2',
    name: 'paint',
    description: 'I paint stuff real good.',
  },
  {
    id: '3',
    name: 'move',
    description: 'I strong, help you move house real good.',
  },
  {
    id: '4',
    name: 'design furniture',
    description: 'I design furnite real good, fair trade.',
  },
];

class SearchRoute extends Component {

  renderSkillCards() {
    return dummySkills.map((skill) =>
      <li>
        <SearchSkillCard
          key={skill.id}
          name={skill.name}
          description={skill.description}
        />
      </li>
    );
  }


  render() {
    return (
      <div className="SearchRoute">
        <ul className="SearchRoute-skills-list">
        {this.renderSkillCards()}
        </ul>
      </div>
    );
  }
}

export default SearchRoute;