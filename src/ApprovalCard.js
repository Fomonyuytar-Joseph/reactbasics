import React from 'react'

function ApprovalCard() {
  return (
    <div class="ui cards">
       <div class="content">Are you sure?</div>
       <div class=" extra content">
        <div className='ui two buttons'>
          
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
          
           </div>
       </div>
      </div>
     
      
  )
}

export default ApprovalCard