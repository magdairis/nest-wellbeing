async function responder(request, response) {
  response.json({ foo: "bar" })
  console.log(request.body)
}

export default responder
