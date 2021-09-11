import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
		              Neil Gogte Institute Of Technology, <br />
                      Survery number 35 <br />
		              Peerzadiguda road, Uppal, <br /> 
                      Telangana<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         mentalpeace@gmail.com</a>
                    </address><br /><br /><br />
                    
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:mentalpeace@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Neil%20gogte+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;