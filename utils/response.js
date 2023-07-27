const Error = (error, errorStatus = 501) => {
  return new Response(JSON.stringify({ error: error.message }), {
    status: errorStatus,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

const Result = (result, resultStatus = 200) => {
  return new Response(JSON.stringify({ result }), {
    status: resultStatus,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export { Error, Result }
