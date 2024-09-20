import * as React from 'react';

export type skillProps = {
  skill: string;
}

const maximum = 4;
const minimum = 1;

export default function Skill(props: skillProps) {
  const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  const classes = `skill-item skill-bg${randomNumber}`;
  return(
    <div className={classes}>
      { props.skill }
    </div>
  )
}
