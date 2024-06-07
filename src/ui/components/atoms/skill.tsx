import * as React from 'react';

export type skillProps = {
  skill: string;
}

export default function Skill(props: skillProps) {
  return(
    <div className="skill-item">
      { props.skill }
    </div>
  )
}
