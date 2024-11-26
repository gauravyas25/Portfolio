import React from 'react'
import "./Education.css"

import EngineeringIcon from '@mui/icons-material/Engineering';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
function Education() {
  return (
    <div className='Education'>
        <br /><br /><br /><br />
        <h2>Education</h2>
        <span className="Engineering">
            <EngineeringIcon style={{fontSize : 60 }}/>
            <div className="Eng">
                <h1>B.E In Information Technology</h1>
                <h4>2022 - 2026</h4>
                <br />
                <h2>Matoshri College Of Engineering and Research Centre, Nashik</h2>
                <h4>Savitribai Phule Pune University</h4>
            </div>
        </span>
        <span className="JrClg">
            <MenuBookIcon style={{fontSize : 60 }}/>
            <div className="Clg">
                <h1>HSC (12th) - Science</h1>
                <h4>2020 - 2022</h4>
                <br />
                <h2>Arihant Junior College of Science, Pune</h2>
                <h4>Maharashtra State Board</h4>
            </div>
        </span>
        <span className="School">
            <SchoolIcon style={{fontSize : 60 }}/>
            <div className="Sch">
                <h1>SSC (10th)</h1>
                <h4>2020</h4>
                <br />
                <h2>Sinhgad Spring Dale Public School, Pune</h2>
                <h4>Central Board of Secondary Education</h4>
            </div>
        </span>
    </div>
  )
}

export default Education