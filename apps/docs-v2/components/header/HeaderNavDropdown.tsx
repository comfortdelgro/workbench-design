import ClickAwayListener from '@mui/base/ClickAwayListener'
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import {styled} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ROUTES from 'docs/src/route'
import Link from 'next/link'
import * as React from 'react'
import SvgHamburgerMenu from '../icons/SvgHamburgerMenu'

const Anchor = styled('a')<{
  component?: React.ElementType
}>(({theme}) => [
  {
    ...theme.typography.body2,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: 'none',
    border: 'none',
    width: '100%',
    backgroundColor: 'transparent',
    color: (theme.vars || theme).palette.text.secondary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    transition: theme.transitions.create('background'),
    '&:hover, &:focus-visible': {
      backgroundColor: (theme.vars || theme).palette.grey[100],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  theme.applyDarkStyles({
    color: '#fff',
    '&:hover, &:focus-visible': {
      backgroundColor: (theme.vars || theme).palette.primaryDark[700],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),
])

const UList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
})

const DOCS = [
  {
    name: 'Material UI',
    description: "React components that implement Google's Material Design.",
    href: ROUTES.materialDocs,
  },
  {
    name: 'Joy UI',
    description: 'React components for building your design system.',
    href: ROUTES.joyDocs,
  },
  {
    name: 'Base UI',
    description: 'Unstyled React components and low-level hooks.',
    href: ROUTES.baseDocs,
  },
  {
    name: 'MUI System',
    description: 'CSS utilities for rapidly laying out custom designs.',
    href: ROUTES.systemDocs,
  },
]

export default function HeaderNavDropdown() {
  const [open, setOpen] = React.useState(false)
  const [productsOpen, setProductsOpen] = React.useState(true)
  const [docsOpen, setDocsOpen] = React.useState(false)
  const hambugerRef = React.useRef<HTMLButtonElement | null>(null)
  return (
    <React.Fragment>
      <IconButton
        color='primary'
        aria-label='Menu'
        ref={hambugerRef}
        disableRipple
        onClick={() => setOpen((value) => !value)}
        sx={{
          position: 'relative',
          '& rect': {
            transformOrigin: 'center',
            transition: '0.2s',
          },
          ...(open && {
            '& rect:first-of-type': {
              transform: 'translate(1.5px, 1.6px) rotateZ(-45deg)',
            },
            '& rect:last-of-type': {
              transform: 'translate(1.5px, -1.2px) rotateZ(45deg)',
            },
          }),
        }}
      >
        <SvgHamburgerMenu />
      </IconButton>
      <ClickAwayListener
        onClickAway={(event) => {
          if (
            hambugerRef.current &&
            !hambugerRef.current.contains(event.target as Node)
          ) {
            setOpen(false)
          }
        }}
      >
        <Collapse
          in={open}
          sx={(theme) => ({
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            boxShadow: `0px 4px 20px rgba(170, 180, 190, 0.3)`,
            ...theme.applyDarkStyles({
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
            }),
          })}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.paper',
              maxHeight: 'calc(100vh - 56px)',
              overflow: 'auto',
            }}
          >
            <UList
              sx={(theme) => ({
                '& ul': {
                  borderLeft: '1px solid',
                  borderColor: 'grey.100',
                  ...theme.applyDarkStyles({
                    borderColor: 'primaryDark.700',
                  }),
                  pl: 1,
                  pb: 1,
                  ml: 1,
                },
              })}
            >
              <li>
                <Anchor
                  as='button'
                  onClick={() => setProductsOpen((bool) => !bool)}
                  sx={{justifyContent: 'space-between'}}
                >
                  Products
                  <KeyboardArrowDownRounded
                    color='primary'
                    sx={{
                      transition: '0.3s',
                      transform: productsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                    }}
                  />
                </Anchor>
              </li>
              <li>
                <Anchor
                  as='button'
                  onClick={() => setDocsOpen((bool) => !bool)}
                  sx={{justifyContent: 'space-between'}}
                >
                  Docs
                  <KeyboardArrowDownRounded
                    color='primary'
                    sx={{
                      transition: '0.3s',
                      transform: docsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                    }}
                  />
                </Anchor>
                <Collapse in={docsOpen}>
                  <UList>
                    {DOCS.map((item) => (
                      <li key={item.name}>
                        <Anchor
                          href={item.href}
                          as={Link}
                          sx={{flexDirection: 'column', alignItems: 'initial'}}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}
                          >
                            {item.name}
                            {item.chip ? (
                              <Chip
                                size='small'
                                label={item.chip}
                                color='primary'
                                variant='outlined'
                              />
                            ) : null}
                          </Box>
                          <Typography variant='body2' color='text.secondary'>
                            {item.description}
                          </Typography>
                        </Anchor>
                      </li>
                    ))}
                  </UList>
                </Collapse>
              </li>
            </UList>
          </Box>
        </Collapse>
      </ClickAwayListener>
    </React.Fragment>
  )
}
