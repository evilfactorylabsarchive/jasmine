import { Notification, KIND } from 'baseui/notification'
import { Paragraph2, H2, H4 } from 'baseui/typography'

export default () => (
  <>
    <H2>
      jasmine
    </H2>
    <Notification
      kind={KIND.warning}
      overrides={{ Body: { style: { width: 'auto' }} }}
    >
      jasmine is evilfactory UI Components built on top baseweb. Currently under heavy development
      and not stable yet
    </Notification>
    <H4>TODO:</H4>
    <Paragraph2>
      Use MDX instead for this docs.
    </Paragraph2>
  </>
)