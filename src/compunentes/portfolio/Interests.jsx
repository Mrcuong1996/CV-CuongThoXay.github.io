import React from 'react'
import {
  CheckCircleFilled,
} from "@ant-design/icons";

const Interests = () => {
  return (
    <div className="interests">
          <h3>Interests</h3>
          <div className="div__code">
         <p>
         <CheckCircleFilled className='div__code-icon'/>
          Xây Nhà Bằng Chuột
         </p>
         <p>
         <CheckCircleFilled className='div__code-icon'/>
          Chơi Liên Minh Huyền Thoại
         </p>
          </div>
        </div>
  )
}

export default Interests