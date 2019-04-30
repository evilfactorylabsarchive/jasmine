import { styled } from 'styletron-react'
import { H1, H2, H3, H4, H5, H6, Paragraph1 } from 'baseui/typography'
import { Card } from 'baseui/card'

const CardContainer = styled('div', {
  marginBottom: '4rem'
})

export default () => (
  <>
    <H3>Heading</H3>
    <CardContainer>
      <Paragraph1>
        48px — H1 Heading
      </Paragraph1>
      <Card>
        <H1>
          The Quick Brown Fox Jumps Over the Lazy Dog
        </H1>
      </Card>
    </CardContainer>

    <CardContainer>
      <Paragraph1>
        36px — H2 Heading
      </Paragraph1>
      <Card>
        <H2>
          The Quick Brown Fox Jumps Over the Lazy Dog
        </H2>
      </Card>
    </CardContainer>

    <CardContainer>
      <Paragraph1>
        24px — H3 Heading
      </Paragraph1>
      <Card>
        <H3>
          The Quick Brown Fox Jumps Over the Lazy Dog
        </H3>
      </Card>
    </CardContainer>

    <CardContainer>
      <Paragraph1>
        20px — H4 Heading
      </Paragraph1>
      <Card>
        <H4>
          The Quick Brown Fox Jumps Over the Lazy Dog
        </H4>
      </Card>
    </CardContainer>

    <CardContainer>
      <Paragraph1>
        16px — H5 Heading (base)
      </Paragraph1>
      <Card>
        <H5>
          The Quick Brown Fox Jumps Over the Lazy Dog
        </H5>
      </Card>
    </CardContainer>

    <CardContainer>
      <Paragraph1>
        14px — H6 Heading
      </Paragraph1>
      <Card>
        <H6>
          The Quick Brown Fox Jumps Over the Lazy Dog
        </H6>
      </Card>
    </CardContainer>
  </>
)