import React from 'react'
import ReactDom from './RefsDemo'

function PortalDemo() {
    return ReactDom.createPortal(
        <h1>
            Portal demo
        </h1>,
        document.getElementById('protal-root')
    )
}

export default PortalDemo