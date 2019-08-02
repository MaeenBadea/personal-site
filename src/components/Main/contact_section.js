import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';


export default class contact_section extends Component {

  state= {
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
    errors:{
      firstname: '',
      email: '',
      subject: '',
      message: '',
    }
  }
  componentDidMount(){


  }
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateMail = ()=>{
    let errors = {};
    let formIsValid = true;

    if(!this.state.firstname ||this.state.firstname.length<3){
        formIsValid = false;
        errors.name = 'Minimum 3 Symbols';
        toast.warn('🚩name should be of length 3 minimum.')
    }

    if(!this.state.subject ||this.state.subject.length<5){
      formIsValid = false;
      errors.subject = 'Minimum 5 Symbols';
      toast.warn('🚩subject should be of length 5 minimum.')

    }


    if(!this.state.message ||this.state.message.length<10){
      formIsValid = false;
      errors.message = 'Minimum 10 Symbols';
      toast.warn('message should be of length 10 minimum.')
    }

    if(!this.validateEmail(this.state.email)){
      formIsValid = false;
      errors.email = "this isn't a valid email ";
      toast.warn("🚩this isn't a valid email.")
    }
    this.setState({
      errors
    })
    console.log('form is valid? ' ,formIsValid)
    return formIsValid;

}

  sendEmail = (event)=>{
    console.log('trying to send email');
    event.preventDefault();
    if(!this.validateMail()){
      return ;
    }
    const templateParams = {
      from_name: this.state.firstname +" "+ this.state.lastname,
      email: this.state.email,
      subject: this.state.subject,
      message_html:this.state.message,
      }
    emailjs.send('gmail', 'template_zaqomz0q', templateParams, 'user_ElU62mLwa0H3HUBlkBNtN')
            .then((resp)=>{
              toast.info('👍Message sent Successfully', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
              this.setState({
                firstname:'',
                lastname:'',
                subject: '',
                message:'',
                email: '',
              })
            }, (err)=>{
              toast.error('❌Message was not sent.', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
                console.log("error"+ err);
            }) 
    
  }


  render() {
    
    return (
        
      <div class="site-section" id="contact-section">
        
      <div class="container">

          
  
        <div class="row justify-content-center">
          <div class="col-md-7">

          <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                 />
          
            <h2 class="section-title mb-3">Message Me</h2>
          
            <form method="post" data-aos="fade" onSubmit={this.sendEmail}>
              <div class="form-group row">
                <div class="col-md-6 mb-3 mb-lg-0">
                  <input required value={this.state.firstname} onChange={(event)=>{this.setState({firstname: event.target.value})}} type="event" class="form-control" placeholder="First name" />
                </div>
                <div class="col-md-6">
                  <input required value={this.state.lastname} onChange={(event)=>{this.setState({lastname: event.target.value})}} type="event" class="form-control" placeholder="Last name"/>
                </div>
              </div>
  
              <div class="form-group row">
                <div class="col-md-12">
                  <input value={this.state.subject} onChange={(event)=>{this.setState({subject: event.target.value})}} type="event" class="form-control" placeholder="Subject" required/>
                </div>
              </div>
  
              <div class="form-group row">
                <div class="col-md-12">
                  <input value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}} type="email" class="form-control" placeholder="Email" required/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <textarea required ='required' value={this.state.message} onChange={(event)=>{this.setState({message: event.target.value})}} required class="form-control" id="" cols="30" rows="10" placeholder="Write your message here." ></textarea>
                </div>
              </div>
  
              <div class="form-group row">
                <div class="col-md-6">
                  
                  <input type="submit" class="btn btn-primary py-3 px-5 btn-block" value="Send Message"/>
                </div>
              </div>
  
            </form>
          </div>
        </div>
      </div>
    </div>
      )
  }
}
