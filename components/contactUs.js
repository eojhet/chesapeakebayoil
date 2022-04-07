import { useState, useRef } from 'react';
import styles from '/styles/ContactUs.module.scss';

export default function ContactUs () {
  const [name, setName] = useState('');
  const [nameWarn, setNameWarn] = useState('');
  const [email, setEmail] = useState('');
  const [emailWarn, setEmailWarn] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneWarn, setPhoneWarn] = useState('');
  const [comment, setComment] = useState('');
  const [commentWarn, setCommentWarn] = useState('');
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const commentInput = useRef();

  const emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  const checkName = (e) => {
    if (name.length < 3) {
      setNameWarn("Enter a name.")
      e.target.style.borderColor = 'red';
    } else {
      setNameWarn('')
      e.target.style.borderColor = 'hsla(208, 71%, 56%, 0.8)';
    }
  }

  const checkEmail = (e) => {
    if (!emailReg.test(email)) {
      setEmailWarn("Enter valid email.");
      e.target.style.borderColor = 'red';
    } else {
      setEmailWarn('');
      e.target.style.borderColor = 'hsla(208, 71%, 56%, 0.8)';
    }
  }

  const checkPhone = (e) => {
    if (!phone) {
      setPhoneWarn('')
      e.target.style.borderColor = 'hsla(208, 71%, 56%, 0.8)';
    } else if (phone.length < 10) {
      setPhoneWarn('Enter valid number.')
      e.target.style.borderColor = 'red';
    } else {
      setPhoneWarn('')
      e.target.style.borderColor = 'hsla(208, 71%, 56%, 0.8)';
    }
  }

  const checkComment = (e) => {
    if (!comment){
      setCommentWarn("Please enter a message.")
      e.target.style.borderColor = 'red';
    } else {
      setCommentWarn('')
      e.target.style.borderColor = 'hsla(208, 71%, 56%, 0.8)';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 2 &&
        emailReg.test(email) &&
        (!phone || phone.length > 9) &&
        comment.length > 0){

          let data = {
            name,
            email,
            phone,
            comment
          }

          fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            if (res.status === 200) {
              console.log('success');
              setName('');
              setEmail('');
              setPhone('');
              setComment('');
            }
          })

    } else {
      nameInput.current.focus();
      emailInput.current.focus();
      phoneInput.current.focus();
      commentInput.current.focus();
      e.target.focus();
    }
  }

  return (
    <aside className={styles.aside}>
      <form className={styles.form}>

        <h1>Contact Us!</h1>

        <label>Full Name:</label>
        <br />
        <input
          name="name"
          value={name}
          autoComplete="name"
          onChange={e => setName(e.target.value)}
          onBlur={checkName}
          ref={nameInput}
        />
        <br />
        <div className={styles.warning}>{nameWarn}&nbsp;</div>

        <label>Email:&nbsp;</label>
        <br />
        <input
          name="email"
          value={email}
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
          onBlur={checkEmail}
          ref={emailInput}
        />
        <div className={styles.warning}>{emailWarn}&nbsp;</div>

        <label>Phone (optional):</label>
        <br />
        <input
          name="phone"
          value={phone}
          autoComplete="tel"
          placeholder='123-456-7890'
          onChange={e => setPhone(e.target.value)}
          onBlur={checkPhone}
          ref={phoneInput}
        />
        <div className={styles.warning}>{phoneWarn}&nbsp;</div>

        <label>Questions/Concerns:</label>
        <br />
        <textarea
          name="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          maxLength={1024}
          spellCheck={true}
          onBlur={checkComment}
          ref={commentInput}
        />
        <div className={styles.warning}>{commentWarn}&nbsp;</div>
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </aside>
  )
}