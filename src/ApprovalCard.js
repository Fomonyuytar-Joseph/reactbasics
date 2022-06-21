import React from 'react'

function ApprovalCard(props) {
  console.log(props.children)
  return (
    <div class="ui card">
       <div class="content">{props.children}</div>
       <div class=" extra content">
        <div className='ui two buttons'>

        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Reject</div>
          
           </div>
       </div>
      </div>
     
      
  )
}

export default ApprovalCard