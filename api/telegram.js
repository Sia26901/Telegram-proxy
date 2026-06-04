export default async function handler(req, res) {
  const url = `https://api.telegram.org${req.url}`;
  const response = await fetch(url, {
    method: req.method,
    headers: req.headers,
    body: req.method === 'GET' ? undefined : JSON.stringify(req.body)
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
