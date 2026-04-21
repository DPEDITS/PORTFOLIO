import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});
  const [canSend, setCanSend] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isSending, setIsSending] = useState(false);

  // Check rate limit on page load and every minute
  useEffect(() => {
    const checkLimit = () => {
      const lastSent = Number(localStorage.getItem('lastEmailSent'));
      const now = Date.now();
      const twelveHours = 12 * 60 * 60 * 1000;
      
      if (lastSent && (now - lastSent) < twelveHours) {
        setCanSend(false);
        const hours = Math.ceil((twelveHours - (now - lastSent)) / (60 * 60 * 1000));
        setTimeLeft(hours);
      } else {
        setCanSend(true);
        setTimeLeft(null);
      }
    };

    checkLimit();
    const interval = setInterval(checkLimit, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!canSend) return;

    // Double-check rate limit on submit
    const lastSent = Number(localStorage.getItem('lastEmailSent'));
    const now = Date.now();
    const twelveHours = 12 * 60 * 60 * 1000;

    if (lastSent && (now - lastSent) < twelveHours) {
      const hoursRemaining = Math.ceil((twelveHours - (now - lastSent)) / (60 * 60 * 1000));
      setCanSend(false);
      setTimeLeft(hoursRemaining);
      setStatus({ 
        success: false, 
        message: `Rate limit active. Please wait ${hoursRemaining} hours.` 
      });
      return;
    }

    // Set loading state
    setIsSending(true);
    setButtonText("Sending...");

    // Professional Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formDetails.email)) {
      setIsSending(false); // Unlock so they can fix the error
      setStatus({ success: false, message: "Please enter a valid and deliverable email address." });
      setButtonText("Send Message");
      return;
    }

    // Block common fake/disposable domains
    const fakeDomains = ['test.com', 'example.com', 'mailinator.com', 'tempmail.com'];
    const domain = formDetails.email.split('@')[1].toLowerCase();
    if (fakeDomains.includes(domain)) {
      setIsSending(false); // Unlock so they can fix the error
      setStatus({ success: false, message: "Please use a real personal or business email address." });
      setButtonText("Send Message");
      return;
    }

    setButtonText("Sending...");
    const formData = new FormData();

    // Append form data
    formData.append("access_key", "788c55f7-9965-44ab-92da-b039b1ad9b61");
    formData.append("first_name", formDetails.firstName);
    formData.append("last_name", formDetails.lastName);
    formData.append("email", formDetails.email);
    formData.append("phone", formDetails.phone);
    formData.append("message", formDetails.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSending(false);
        setButtonText("Send Message");
        event.target.reset();
        setFormDetails(formInitialDetails);
        // Save timestamp and lock form
        localStorage.setItem('lastEmailSent', Date.now().toString());
        setCanSend(false);
        setTimeLeft(12); // Set initial lock time
        setStatus({ success: true, message: "Message sent successfully! I'll get back to you soon." });
      } else {
        console.log("Error", data);
        setIsSending(false);
        setButtonText("Send Message");
        setStatus({ success: false, message: data.message || "Something went wrong, please try again." });
      }
    } catch (error) {
      console.log("Fetch Error", error);
      setIsSending(false);
      setButtonText("Send Message");
      setStatus({ success: false, message: "Network error. Please check your connection and try again." });
    }
  };


  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    name="first_name"
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    name="last_name"
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    value={formDetails.email}
                    placeholder='Email Address'
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    name="email"
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    value={formDetails.phone}
                    placeholder='Phone Number'
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    name="phone"
                  />
                </Col>
                <Col>
                  <textarea
                    rows='6'
                    value={formDetails.message}
                    placeholder='Your Message...'
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    name="message"
                    required
                  ></textarea>
                  <button type='submit' disabled={!canSend || isSending}>
                    <span>{isSending ? "Sending..." : (canSend ? buttonText : `Locked (${timeLeft}h left)`)}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'} style={{ marginTop: '16px', fontSize: '15px' }}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
