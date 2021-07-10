import { useState, useEffect } from 'react';
import Editor from './Editor'
function Html_editor() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html> 
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 500)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="container">
      <div className="card">
        <div className='card-content'>
          <div className='py-5'>
            <nav className=''>
              <div className="nav-wrapper">
                <div className='row'>
                  <div className="col s12 l2">
                    <a href="#!" className="brand-logo">HTML_EDITOR</a>
                    <a href="#!" data-target="mobile-demo2" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                  </div>
                  <div className="col s12 l10">
                    <ul className="right hide-on-med-and-down">
                      <li><a href="/html_editor">Sass</a></li>
                      <li><a href="/html_editor">Components</a></li>
                      <li><a href="/html_editor">Javascript</a></li>
                      <li><a href="/html_editor">Mobile</a></li>
                    </ul>
                  </div>             

                </div>
              </div>
            </nav>

            <ul className="sidenav" id="mobile-demo2">
              <li><a href="/html_editor">Sass</a></li>
              <li><a href="/html_editor">Components</a></li>
              <li><a href="/html_editor">Javascript</a></li>
              <li><a href="/html_editor">Mobile</a></li>
            </ul>
          </div>
          <div className='row'>
            <div className="col s12 m4">
              <Editor
                language="xml"
                displayName='HTML'
                value={html}
                onChange={setHtml}
              />
            </div>
            <div className='col s12 m4'>
              <Editor
                language='css'
                displayName='CSS'
                value={css}
                onChange={setCss}
              />
            </div>
            <div className='col s12 m4'>
              <Editor
                language='javascript'
                displayName='JS'
                value={js}
                onChange={setJs}
              />
            </div>
          </div>
        </div>
      </div>
      <h4 className='text-center'>Output</h4>
      <div className='card'>
        <div className='card-content'>
          <div className='bg-yellow-100 h-screen'>
            <iframe
              srcDoc={srcDoc}
              title='output'
              sandbox="allow-scripts"
              frameBorder="0"
              width='100%'
              height='100%'
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Html_editor;
