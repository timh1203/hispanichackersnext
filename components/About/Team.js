import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import globals from '../../assets/GlobalData';

const Section = styled.section`
  text-align: left;
`;
const ExecutiveTeam = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
`;

export default function Team() {
  return (
    <Section>
      <h1>Meet the Executive Team</h1>
      <hr />
      <ExecutiveTeam>
        <Profile
          image='/static/images/eddy.jpg'
          name={globals().profilesHH.eddy.name}
          linkedin={globals().profilesHH.eddy.linkedin}
          bio={globals().profilesHH.eddy.bio}
        />
        <Profile
          image='/static/images/james.png'
          name={globals().profilesHH.james.name}
          linkedin={globals().profilesHH.james.linkedin}
          bio={globals().profilesHH.james.bio}
        />
        <Profile
          image='/static/images/lauraE.jpg'
          name={globals().profilesHH.lauraE.name}
          linkedin={globals().profilesHH.lauraE.linkedin}
          bio={globals().profilesHH.lauraE.bio}
        />
        <Profile
          image='/static/images/lauraH.jpg'
          name={globals().profilesHH.lauraH.name}
          linkedin={globals().profilesHH.lauraH.linkedin}
          bio={globals().profilesHH.lauraH.bio}
        />
        <Profile
          image='/static/images/tim.jpg'
          name={globals().profilesHH.tim.name}
          linkedin={globals().profilesHH.tim.linkedin}
          bio={globals().profilesHH.tim.bio}
        />
      </ExecutiveTeam>
    </Section>
  );
}
