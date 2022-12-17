import React from 'react'
import './experience.scss'

function Skill(props: { name: string, level: number }) {
  const inactiveBars = 5 - props.level
  const bars = []
  for(let i = 0; i < props.level; i++) {
    bars.push(<span className='bar active'></span>)
  }
  for(let i = 0; i < inactiveBars; i++) {
    bars.push(<span className='bar'></span>)
  }
  return (<div className='skill'>
    <div className='name'>{props.name}</div>
    <div className='scale'>
      {bars}
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
              <div>Expertise</div>
            </div>
            <div className='scale'>
              <span>Novice</span>
              <span>Adv. Beginner</span>
              <span>Competent</span>
              <span>Proficient</span>
              <span>Expert</span>
            </div>
          </div>
          <Skill name='Javascript (ES5)' level={2} />
          <Skill name='Javascript (ES6)' level={4} />
          <Skill name='GoLang' level={2} />
          <Skill name='Mongo' level={3} />
          <Skill name='Postgres' level={3} />
          <Skill name='Windows' level={4} />
          <Skill name='MacOS' level={3} />
          <Skill name='Ubuntu' level={4} />
          <Skill name='Centos' level={2} />
        </div>
      </div>
    </div>
  )
}

export default Experience
