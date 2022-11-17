import React from 'react'
import './experience.scss'

function Skill(props: { name: string, level: number }) {
  const inactiveBars = 5 - props.level
  return (<div className='skill'>
    <div className='name'>{props.name}</div>
    <div className='scale'>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </div>
  </div>)
}

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className='content'>
        <div className='title'>My experience</div>
        <div className='subhead'>Below you will see my skill rating for each piece of technology I have used prominently</div>
        <div className='skills'>
          <div className='skill headings'>
            <div className='name'>
              <div>Skill</div>
            </div>
            <div className='scale'>
              <span>Novice</span>
              <span>Advanced</span>
              <span>Competent</span>
              <span>Proficient</span>
              <span>Expert</span>
            </div>
          </div>
          <Skill name='Javascript' level={4} />
          <Skill name='Mongo' level={4} />
          <Skill name='Postgres' level={4} />
          <Skill name='Linux' level={4} />
        </div>
      </div>
    </div>
  )
}

export default Experience
