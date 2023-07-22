import {ThemeProvider} from '@comfortdelgro/react-compass'
import Preflight from '@comfortdelgro/react-compass/preflight'
import 'components/common/bootstrap'
import {ETheme} from 'constants/index'
import ThemeContext from 'contexts/Theme'
import NextHead from 'next/head'
import * as React from 'react'
import {CodeCopyProvider} from 'utils/CodeCopy'
import useLazyCSS from 'utils/useLazyCSS'

import AppHeader from 'components/layouts/AppHeader'
import './global.css'

let dependenciesLoaded = false

function loadDependencies() {
  if (dependenciesLoaded) {
    return
  }

  dependenciesLoaded = true
}

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log(
    `%c
    Tip: you can access the documentation \`theme\` object directly in the console.
`,
    'font-family:monospace;color:#1976d2;font-size:12px;',
  )
}
function AppWrapper(props: any) {
  const {children} = props

  const [mode, setMode] = React.useState<ETheme>(ETheme.Light)

  React.useEffect(() => {
    loadDependencies()
  }, [])

  useLazyCSS('/static/styles/prism-okaidia.css', '#prismjs')

  const handleChangeThemeMode = () => {
    setMode(mode === ETheme.Light ? ETheme.Dark : ETheme.Light)
  }

  return (
    <React.Fragment>
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </NextHead>
      <ThemeContext.Provider value={mode}>
        <ThemeProvider changeBy={mode}>
          <CodeCopyProvider>
            <Preflight />
            <AppHeader handleChangeThemeMode={handleChangeThemeMode} />
            {children}
          </CodeCopyProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

export default function MyApp(props: any) {
  const {Component, pageProps} = props
  const getLayout = Component.getLayout ?? ((page: any) => page)

  return (
    <AppWrapper pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </AppWrapper>
  )
}

MyApp.getInitialProps = async ({ctx, Component}: any) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps: {
      userLanguage: ctx.query.userLanguage || 'en',
      ...pageProps,
    },
  }
}

// Track fraction of actual events to prevent exceeding event quota.
// Filter sessions instead of individual events so that we can track multiple metrics per device.
// See https://github.com/GoogleChromeLabs/web-vitals-report to use this data
const disableWebVitalsReporting = Math.random() > 0.0001
export function reportWebVitals({id, name, label, delta, value}: any) {
  if (disableWebVitalsReporting) {
    return
  }
}