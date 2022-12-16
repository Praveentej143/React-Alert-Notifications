// Write your code here
import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success-logo" />
      <div className="desc-container">
        <h1 className="success-heading">success</h1>
        <p className="desc">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error-logo" />
      <div className="desc-container">
        <h1 className="error-heading">Error</h1>
        <p className="desc">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning-logo" />
      <div className="desc-container">
        <h1 className="warning-heading">Warning</h1>
        <p className="desc">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info-logo" />
      <div className="desc-container">
        <h1 className="info-heading">Info</h1>
        <p className="desc">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  render() {
    return (
      <>
        <div className="bg-container">
          <h1 className="heading">Alert Notifications</h1>
          <div className="card-container">
            {this.renderSuccessNotification()}
            {this.renderErrorNotification()}
            {this.renderWarningNotification()}
            {this.renderInfoNotification()}
          </div>
        </div>
      </>
    )
  }
}

export default AlertNotifications
