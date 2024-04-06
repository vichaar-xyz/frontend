import React,{useState} from 'react'
import { Button, Modal } from 'antd';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

const Communities = () => {
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
  const tags = [
    'DAO',
    'NFT',
    'DeFi',
    'Tokens',
    'DeX',
    'Funding',
    'Startup',
    'Reputation',
    'Community Engagement',
    'Protocol layers',
    'Cryptocurrency',
    'Product Launch',
    'DID',
    'Infrastructural Layers',
];

  return (
    <div className='communities'>
      {/* create_post_button */}
      <div className='create_post'>
        <button className='create_post_button'onClick={handleShowForm} >
          Create Event
        </button>
      </div>
      {/* Communities_cards */}
      <div className='community_card'>
        <div className='community_header'>

          <img src="https://github.com/vichaar-xyz/frontend/assets/87490161/c77f7d6a-3394-4026-97d5-e374477713a3" alt='Image not found' loading="lazy" className='community_avatar' />

          <div className='community_context'>
            <div className='community_name'>Web3Wise
            </div>
            <div className='community_detail'>
              <p>It serves as a central hub where users can discover, share, </p>
            </div>
          </div>
          <button className='community_join'>Join</button>

        </div>
        <div className='community_tags'>
          <div className='tag'>DEO</div>
          <div className='tag'>NET</div>
          <div className='tag'>Startup</div>
          <div className='tag'>Reputation</div>

        </div>
        <div className='community_footer'>
          <div className='admin'>Admin:</div>
          <div className='community_admin'>
            <img src="https://github.com/vichaar-xyz/frontend/assets/87490161/29d21914-2917-4f39-b1be-a14894e7aa6e" alt="Image not found" loading='lazy' className='admin_avatar' />
            <div className='admin_name'>@sdfsdfghfh +2</div>
          </div>
        </div>
      </div>

      {/*2nd card*/}
      <div className='community_card'>
        <div className='community_header'>

          <img src="https://github.com/vichaar-xyz/frontend/assets/87490161/c77f7d6a-3394-4026-97d5-e374477713a3" alt='Image not found' loading="lazy" className='community_avatar' />

          <div className='community_context'>
            <div className='community_name'>Web3Wise
            </div>
            <div className='community_detail'>
              <p>It serves as a central hub where users can discover, share, </p>
            </div>
          </div>
          <button className='community_join'>Join</button>

        </div>
        <div className='community_tags'>
          <div className='tag'>DEO</div>
          <div className='tag'>NET</div>
          <div className='tag'>Startup</div>
          <div className='tag'>Reputation</div>

        </div>
        <div className='community_footer'>
          <div className='admin'>Admin:</div>
          <div className='community_admin'>
            <img src="https://github.com/vichaar-xyz/frontend/assets/87490161/29d21914-2917-4f39-b1be-a14894e7aa6e" alt="Image not found" loading='lazy' className='admin_avatar' />
            <div className='admin_name'>@jdsfhihhdfsdf +2</div>
          </div>
        </div>
      </div>

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
            <div>
              
            </div>

            <button className="createvent_button">Create Event</button>
          </div>
        </div>
      </Modal>
    </div>

  )
}

export default Communities