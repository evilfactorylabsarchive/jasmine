import Link from 'next/link'
import {
  Navigation,
  StyledNavItem,
  StyledNavLink,
} from 'baseui/side-navigation'

import { H4 } from 'baseui/typography'
import { styled } from 'styletron-react'

import routes from '../../routes'

const Sidebar = styled('nav', {
  backgroundColor: '#ffffff',
  borderRight: '1px solid #eee',
  overflowY: 'auto',
  paddingBottom: '2rem',
  transform: 'translate(-300px, 0)',
  transition: '0.3s all',
  position: 'fixed',

  '@media screen and (min-width: 60em)': {
    transform: 'translate(0, 0)',
    top: 0,
    left: 0,
    height: '100vh',
    width: '230px',
  }
})

const SidebarTitle = styled(H4, {
  paddingLeft: '2rem'
})

function renderItem (item, itemProps) {
  const { ...sharedProps } = itemProps

  return (
    <Link
      passHref={true}
      prefetch={true}
      href={item.itemId}
    >
      <StyledNavLink {...sharedProps}>
        <StyledNavItem {...sharedProps}>
          {item.title}
        </StyledNavItem>
      </StyledNavLink>
    </Link>
  )
}

export default ({ path }) => (
  <Sidebar>
    <Link
      passHref={true}
      prefetch={true}
      href='/'
    >
      <StyledNavLink>
        <SidebarTitle>
          jasmine
        </SidebarTitle>
      </StyledNavLink>
    </Link>
    <Navigation
      items={routes}
      activeItemId={path}
      renderItem={renderItem}
    />
  </Sidebar>
)