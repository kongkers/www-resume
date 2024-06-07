import * as React from 'react';

export type EducationItem = {
  logo: string;
  timeframe: string;
  certification: string;
  school: string;
  summary: string;
}

export type EducationItemProps = {
  item: EducationItem;
}
export default function EducationItem(props: EducationItemProps) {
  return(
    <div className="resume-item">
      <div className="resume-icon">
        <img src={props.item.logo} />
      </div>
      <div className="resume-content">
        <h3>{props.item.timeframe}</h3>
        <h1>{props.item.school}</h1>
        <h4>{props.item.certification}</h4>
        <div className="resume-summary" dangerouslySetInnerHTML={{__html: props.item.summary}} />
      </div>
    </div>
  )
}
