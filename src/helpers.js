export function containsUrl(message) {
  message = message.toLowerCase()
  let urlFound = false
  if (message.includes('http://') ||
      message.includes('https://') ||
      message.includes('www')) {
        urlFound = true
  }
  return urlFound
}


export function isTwitchUrl(message) {
  message = message.toLowerCase()
  return message.includes('twitch.tv')
}
