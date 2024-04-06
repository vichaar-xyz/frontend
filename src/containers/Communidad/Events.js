import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

const Events = () => {
  const [formShow, setFormShow] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventPara, setEventPara] = useState("");
  const [eventDate, setEventDate] = useState();
  const [eventLocation, setEventLocation] = useState("");

  const handleShowForm = () => {
    setFormShow(!formShow);
  }

  const handleOk = () => {
    setFormShow(!formShow);
  }
  const handleCancel = () => {
    setFormShow(!formShow);
  }

  const handlePostChange = (content) => {
    const editorElement = document.querySelector('.fr-element');
    let editorText = '';
    let imageUrls = [];

    if (editorElement) {
      editorText = editorElement.textContent;
      console.log('Editor Text:', editorText);

      // Set state inside the if block
      setEventPara(editorText);

    }
  };



  return (
    <div className='event'>
      {/* create post button */}
      <div className='create_post'>
        <button className='create_post_button' onClick={handleShowForm}>
          Create Event
        </button>
      </div>

      {/* middle content */}
      <div className="">
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

      {/* Event form */}
      <Modal title={false}
        open={formShow}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={true}
        width={700}
        className='custom_modal'
      >
        <div className="post_main_container">
          <div className="post_container">
            <div className="title_container">
              <input type="Title" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} className='event_title' placeholder='Event Title' />
            </div>
            <div className="post_container">
              <FroalaEditorComponent
                tag='textarea'
                config={{
                  placeholderText: 'Enter Your Event Content!',
                  charCounterCount: true
                }}
                onModelChange={handlePostChange}
              />
            </div>
            <div className='date_location'>
              <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="date" />
              <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} className="location" placeholder="Location of Event!" />
            </div>

            <button className="createvent_button">Create Event</button>
          </div>
        </div>
      </Modal>
    </div>

  )
}

export default Events