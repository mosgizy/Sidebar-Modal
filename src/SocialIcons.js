import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,faGithub,faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => {
  return (
    <div className="flex gap-4 absolute bottom-8 justify-center w-10/12 text-green-400 text-2xl">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faYoutube} />
    </div>
  )
}

export default SocialIcons
