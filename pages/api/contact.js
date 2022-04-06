

export default function handler (req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    res.status(200).send({ message: 'Success'});
  } else {
    res.status(404).send({ message: 'No Resource Found'});
  }
  
}