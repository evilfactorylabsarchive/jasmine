import { styled } from 'styletron-react'

const Column = styled('div', props => ({
  float: 'left',
  width: (~~(props.size) * 10) + '%'
}))

export default Column