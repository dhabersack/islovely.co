import React, { useContext } from 'react'

import { CookieConsentContext } from '../contexts/cookie-consent'
import { UpdateCookieSettingsTrigger } from './update-cookie-settings-trigger'

export default ({
  title,
  vimeoId,
  youtubeId
}) => {
  const { isCookieConsentGiven } = useContext(CookieConsentContext)

  return isCookieConsentGiven ? (
    <div className="intrinsic-ratio-16-by-10">
      {vimeoId && (
        <iframe
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          src={`https://player.vimeo.com/video/${vimeoId}?byline=false&title=false&dnt=true`}
          title={title}
        />
      )}

      {youtubeId && (
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
        />
      )}
    </div>
  ) : (
    <div className="background-color-gray-100 border-color-gray-500 border-radius-xs border-style-dashed border-width-m intrinsic-ratio-16-by-10">
      <div className="align-items-center color-gray-600 flex flex-column justify-center padding-s text-align-center">
        <p className="font-size-14 italic margin-0 margin-bottom-s">
          Cannot show video because cookie consent was not given.
        </p>

        <UpdateCookieSettingsTrigger />
      </div>
    </div>
  )
}
