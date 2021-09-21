export const handle = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Hello App serverless testing"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
