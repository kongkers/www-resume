import * as React from 'react';

export type ExperienceListItem = {
  logo: string;
  timeframe: string;
  position: string;
  company: string;
  summary: string;
}

export type ExperienceItemProps = {
  item: ExperienceListItem;
}
export default function ExperienceItem(props: ExperienceItemProps) {
  return(
    <div className="resume-item">
      <div className="resume-icon">
        <img src={props.item.logo} />
      </div>
      <div className="resume-content">
        <h3>{props.item.timeframe}</h3>
        <h1>{props.item.position}</h1>
        <h4>{props.item.company}</h4>
        <div className="resume-summary" dangerouslySetInnerHTML={{__html: props.item.summary}} />
      </div>
    </div>
  )
}
