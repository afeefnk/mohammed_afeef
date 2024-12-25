import React from 'react'

const Info = () => {
  return (
   <div className="about__info grid">
    <div className="about__box">
    <i class='bx bx-award about__icon'></i>

        <h3 className="about__title" style={{fontWeight: 'bold'}}>08 +</h3>
        <span className="about__subtitle" style={{fontSize: '13px'}}>Months Experience</span>
    </div>

    <div className="about__box">
    <i class='bx bx-briefcase-alt about__icon'></i>

        <h3 className="about__title" style={{fontWeight: 'bold'}}>03 + </h3>
        <span className="about__subtitle" style={{fontSize: '13px'}}>Completed Projects</span>
    </div>

    <div className="about__box">
    <i class='bx bx-support about__icon'></i>

        <h3 className="about__title" style={{fontWeight: 'bold'}}>24/7</h3>
        <span className="about__subtitle" style={{fontSize: '13px'}}>Online<br></br>Support</span>
    </div>
   </div>
  )
}

export default Info
