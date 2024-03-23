import React from 'react'

const Communities = () => {
  return (
    <div className='communities'>
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
    </div>

  )
}

export default Communities