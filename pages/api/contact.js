import nodemailer from 'nodemailer';

export default function handler (req, res) {
  if (req.method === 'POST') {

    const mailPort = +process.env.SMTP_PORT || 465;

    const transporter = nodemailer.createTransport({
      port: mailPort,
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASS,
      },
      secure: false,
    });

    const mailData = {
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Contact ${req.body.name}`,
      text: 'Name: ' + req.body.name + '\nEmail: ' + req.body.email + '\nPhone: ' + req.body.phone + '\nComment: ' + req.body.comment,
    }

    console.log(JSON.stringify(req.body));

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      };
    })

    res.status(200).send({ message: 'Success'});


  } else {
    res.status(404).send({ message: 'No Resource Found'});
  }
  
}