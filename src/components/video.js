import React from 'react'

import RequiresCookieConsent from './requires-cookie-consent'

export default ({
  title,
  vimeoId,
  youtubeId
}) => {
  return (
    <RequiresCookieConsent
      className="intrinsic-ratio-16-by-10"
      target="video"
    >
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
    </RequiresCookieConsent>
  )
}
