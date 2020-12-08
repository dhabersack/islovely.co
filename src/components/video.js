import React from 'react'

import RequiresCookieConsent from './requires-cookie-consent'

export default ({
  title,
  vimeoId,
  youtubeId,
}) => (
  <div
    className="aspect-ratio-16/10"
  >
    <RequiresCookieConsent
      target="video"
    >
      <div
        className="aspect-ratio-16/10"
      >
        <iframe
          allow={(vimeoId && "autoplay; fullscreen") || (youtubeId && "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture")}
          allowFullScreen
          frameBorder="0"
          src={(vimeoId && `https://player.vimeo.com/video/${vimeoId}?byline=false&title=false&dnt=true`) || (youtubeId && `https://www.youtube.com/embed/${youtubeId}`)}
          title={title}
        />
      </div>
    </RequiresCookieConsent>
  </div>
)
