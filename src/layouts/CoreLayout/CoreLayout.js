import React from 'react'

export class CoreLayout extends React.Component {
  render() {
    return (<div>
      {props.children}
    </div>
    )
  }
}

export default CoreLayout
