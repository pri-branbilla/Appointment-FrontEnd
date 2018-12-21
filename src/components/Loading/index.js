import React, { PureComponent } from 'react'
import ReactLoading from 'react-loading'

class Loading extends PureComponent {
  render() {
    return (
        <div className="d-flex justify-content-center">
            <ReactLoading
            type="bubbles"
            color="#0A5C75"
            />
        </div>
    )
  }
}

export default Loading
