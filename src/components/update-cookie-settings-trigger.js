import React from 'react'

import { Button } from './button'
import { CookieIcon } from '../icons/cookie';

export const UpdateCookieSettingsTrigger = () => (
  <Button className="iubenda-cs-preferences-link">
    <div className="align-items-center flex">
      <div className="height-24 width-24 margin-right-xxs">
        <CookieIcon />
      </div>

      Update cookie settings
    </div>
  </Button>
)
