import React from 'react'

const Events = () => {
  return (
    <div className='event'>
      <div className='event_card'>
        <div className='event_header'>
        Tech Talk: The Future of Blockchain Scalability and Interoperability
        </div>
        <div className='event_detail'>
          <div className='event_info'>Deep dive into solutions for scaling blockchain networks and achieving interoperability.</div>
          <div className='event_date_place'>
            <div className='event_date'>
              <div className='event_day'> 05</div>
              <div className='event_year'> March 2024</div>
            </div>
            <div className='event_palce'> Dublin</div>
          </div>
          <div className='event_register'>
            <div className='count_register'>200+ Registration</div>
            <button className='button_register'>Register</button>
          </div>
        </div>
      </div>

      {/* 2nd card */}
      <div className='event_card'>
        <div className='event_header'>
        Tech Talk: The Future of Blockchain Scalability and Interoperability
        </div>
        <div className='event_detail'>
          <div className='event_info'>Deep dive into solutions for scaling blockchain networks and achieving interoperability.</div>
          <div className='event_date_place'>
            <div className='event_date'>
              <div className='event_day'> 05</div>
              <div className='event_year'> March 2024</div>
            </div>
            <div className='event_palce'> Dublin</div>
          </div>
          <div className='event_register'>
            <div className='count_register'>200+ Registration</div>
            <button className='button_register'>Register</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Events