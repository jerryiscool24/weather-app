export function getBaseURL() {
  // Master Bert
  const APP_DOMAIN = window.location.hostname
  const APP_PROTOCOL = window.location.protocol
  const APP_PORT = window.location.port

  let BASE_URL = APP_PROTOCOL + '//' + APP_DOMAIN + '/api'

  if (APP_PORT > 443) {
    BASE_URL = "https://app.weather-forecast.test/api"
  }

  return BASE_URL
}
