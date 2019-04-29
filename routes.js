const routes = [
  {
    title: 'Welcome',
    itemId: '/'
  },
  {
    title: 'Typography',
    itemId: '/typography',
    subnav: [
      {
        title: 'Heading',
        itemId: '/typography/heading'
      },
      {
        title: 'List',
        itemId: '/typography/list'
      },
      {
        title: 'Paragraph',
        itemId: '/typography/paragraph'
      },
      {
        title: 'Typeface',
        itemId: '/typography/typeface'
      }
    ]
  },
  {
    title: 'Layouts',
    itemId: '/layouts',
    subnav: [
      {
        title: 'Row',
        itemId: '/layouts/row'
      },
      {
        title: 'Column',
        itemId: '/layouts/column'
      }
    ]
  },
  {
    title: 'Components',
    itemId: '/components',
    subnav: [
      {
        title: 'Avatar',
        itemId: '/components/avatar'
      },
      {
        title: 'Button',
        itemId: '/components/button'
      },
      {
        title: 'Input',
        itemId: '/components/input'
      },
      {
        title: 'Code',
        itemId: '/components/code'
      },
      {
        title: 'Image',
        itemId: '/components/image'
      },
      {
        title: 'Video',
        itemId: '/components/video'
      }
    ]
  }
]

export default routes