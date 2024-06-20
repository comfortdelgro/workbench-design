import {
  Preflight,
  ThemeStaticProvider,
  ToastContextProvider,
} from '@comfortdelgro/react-compass'
import '@comfortdelgro/react-compass/style.css'
import CodeCopyProvider from 'components/CodeCopyProvider'
import Header from 'components/Header'
import PagePropsProvider from 'components/PagePropsProvider'
import NextHead from 'next/head'
import * as React from 'react'
import {ETheme} from 'utils/constants'
import ThemeContext from 'utils/contexts/Theme'
import '../public/static/styles/code-editor.css'
import '../public/static/styles/global.css'
import '../public/static/styles/prism-okaidia.css'

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

  const handleChangeThemeMode = () => {
    setMode(mode === ETheme.Light ? ETheme.Dark : ETheme.Light)
  }

  return (
    <React.Fragment>
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </NextHead>
      <ThemeContext.Provider value={mode}>
        <ToastContextProvider
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <ThemeStaticProvider changeBy={mode}>
            <CodeCopyProvider>
              <Preflight />
              <Header handleChangeThemeMode={handleChangeThemeMode} />
              {children}
            </CodeCopyProvider>
          </ThemeStaticProvider>
        </ToastContextProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

export default function MyApp(props: any) {
  const {Component, pageProps} = props
  const getLayout = Component.getLayout ?? ((page: any) => page)

  return (
    <AppWrapper pageProps={pageProps}>
      <PagePropsProvider>
        {getLayout(<Component {...pageProps} />)}
      </PagePropsProvider>
    </AppWrapper>
  )
}

MyApp.getServerSideProps = async ({ctx, Component}: any) => {
  let pageProps = {}

  if (Component.getServerSideProps) {
    pageProps = await Component.getServerSideProps(ctx)
  }

  return {
    pageProps: {
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
