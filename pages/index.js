import { styled } from 'styletron-react'
import { Paragraph2, H2 } from 'baseui/typography'

const Container = styled('div', {
  padding: '2rem',
  '@media screen and (min-width: 40em)': {
    padding: '8rem',
  }
})

export default () => (
  <Container>
    <H2>
      Jasmine
    </H2>
    <Paragraph2>
      evilfactory UI Components built on top baseweb 
    </Paragraph2>
  </Container>
)