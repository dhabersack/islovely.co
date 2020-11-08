import React, { useState } from 'react'
import { useForm, ValidationError } from '@statickit/react'

import A from './a'
import Button from './button'
import Checkbox from './checkbox'
import Flash from './flash'
import Input from './input'
import Label from './label'
import RequiresCookieConsent from './requires-cookie-consent'
import Textarea from './textarea'

export default () => {
  const [{
    errors,
    submitting,
    succeeded,
  }, handleSubmit] = useForm('contact')

  const [isDataProcessingConsentGiven, setIsDataProcessingConsentGiven] = useState(false)

  const toggleIsDataProcessingConsentGiven = () => {
    setIsDataProcessingConsentGiven(!isDataProcessingConsentGiven)
  }

  const hasErrors = errors.length > 0

  const canSubmit = isDataProcessingConsentGiven && !submitting

  return (
    <RequiresCookieConsent
      target="contact form"
    >
      {hasErrors && !submitting && (
        <Flash
          type="error"
        >
          Sorry, your message could not be sent. Try again after addressing the errors below.
        </Flash>
      )}

      {succeeded && (
        <Flash
          type="success"
        >
          Thank you for your message. I will get back to you soon.
        </Flash>
      )}

      <form
        onSubmit={handleSubmit}
      >
        <div
          className="margin-bottom-s"
        >
          <Label
            htmlFor="email"
          >
            Email address
          </Label>

          <div
            className={`
              s:columns-8-of-12
              m:columns-6-of-10
              l:columns-5-of-8
              xl:columns-4-of-8
            `}
          >
            <Input
              id="email"
              name="email"
              placeholder="your.best@email.com"
              type="email"
            />
          </div>

          <ValidationError
            className={`
              block
              color-red-500
              font-size-12-short
              font-weight-500
              italic
              margin-vertical-xs
            `}
            errors={errors}
            field="email"
            prefix="Email address"
          />
        </div>

        <div
          className="margin-bottom-s"
        >
          <Label
            htmlFor="message"
          >
            Message
          </Label>

          <Textarea
            id="message"
            name="message"
            placeholder="What do you want to say?"
            rows={6}
          />

          <ValidationError
            className={`
              block
              color-red-500
              font-size-12-short
              font-weight-500
              italic
              margin-vertical-xs
            `}
            errors={errors}
            field="message"
            prefix="Message"
          />
        </div>

        <div
          className={`
            margin-bottom-s
            flex
          `}
        >
          <div
            className="margin-right-xs"
          >
            <Checkbox
              id="data-processing-consent"
              name="data-processing-consent"
              onChange={toggleIsDataProcessingConsentGiven}
              value={isDataProcessingConsentGiven}
            />
          </div>

          <Label
            className={`
              cursor-pointer
              flex-shrink
            `}
            htmlFor="data-processing-consent"
          >
            I understand that the information provided by me is subject to the <A href="https://www.iubenda.com/privacy-policy/31487586" className="iubenda-nostyle no-brand iubenda-embed">Privacy Policy</A>.
          </Label>
        </div>

        <Button
          disabled={!canSubmit}
          type="submit"
        >
          Send your message
        </Button>
      </form>
    </RequiresCookieConsent>
  )
}
