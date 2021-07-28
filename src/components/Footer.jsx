import React from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import './footer.css'

function Footer() {

    return (
        <div className = 'footer'>
          <h4> TOTAL {MOCK_DATA.length} REPORTS</h4>
        </div>
    )
}

export default Footer
