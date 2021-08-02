export function buildErrorOfType(error, type) {
  return {
    type,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  }
}
