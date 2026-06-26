const notifications = [];

function addNotification(message) {
  notifications.push(message);
}

function showNotifications() {
  console.log("Unread:", notifications.length);
  console.log(notifications);
}

function clearNotifications() {
  notifications.length = 0;
}

addNotification("New Message");
addNotification("Friend Request");
addNotification("Order Delivered");

showNotifications();

clearNotifications();

showNotifications();