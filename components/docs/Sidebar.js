import React, { useState } from 'react'

import Router from 'next/router'
import Link from 'next/link'

import {
  Navigation,
  StyledNavItem,
  StyledNavLink,
} from 'baseui/side-navigation'

import CheckIndeterminate from 'baseui/icon/check-indeterminate'
import Menu from 'baseui/icon/menu'

import { Button, KIND, SHAPE } from 'baseui/button'
import { H4 } from 'baseui/typography'

import { styled } from 'styletron-react'

import routes from '../../routes'

const SidebarToggler = styled('div', {
  position: 'fixed',
  top: '15px',
  right: '15px'
})

const Sidebar = styled('nav', ({ isSidebarOpen }) => ({
  backgroundColor: '#ffffff',
  borderRight: '1px solid #eee',
  overflowY: 'auto',
  paddingBottom: '2rem',
  transform: isSidebarOpen ? 'translate(0, 0)' : 'translate(-300px, 0)',
  transition: '0.3s all',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '230px',
  zIndex: 2
}))

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

export default ({ path }) => {
  let isMobile

  if (process.browser) {
    isMobile = window.innerWidth <= 800
  }

  const [ isSidebarOpen, setSidebarOpen ] = useState(true)

  Router.events.on('routeChangeStart', _ => setSidebarOpen(!isMobile))

  return (
    <>
      <SidebarToggler>
        <Button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          kind={KIND.minimal}
          shape={SHAPE.round}
        >
          { isSidebarOpen ? <CheckIndeterminate /> : <Menu /> }
        </Button>
      </SidebarToggler>
      <Sidebar isSidebarOpen={isSidebarOpen}>
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
    </>
  )
}