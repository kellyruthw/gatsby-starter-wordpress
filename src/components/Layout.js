import React from 'react'

import Header from './Header/Header'
import Footer from './Footer'
import '../assets/scss/main.scss'

const Layout = ({ children, pageId, extraClass }) => (
  <div id="page" className={`${extraClass} site page-id-${pageId}`} >
    <Header />
    <div id="content" className="site-content">
      <section id="primary" className="content-area">
        <main id="main" className="site-main">
          {children}
        </main>
        {/* #main */}
      </section>
      {/* #primary */}
    </div>
    <Footer />
</div>
)

export default Layout