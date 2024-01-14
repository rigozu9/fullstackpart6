import { useNotificationValue } from '../NotificationContext'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notification = useNotificationValue()
  
  return notification && (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification