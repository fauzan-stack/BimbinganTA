import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component{
    Login(){
       window.location.href = "/Home";
    }
    render(){
        return(
            <div class="container">
                <br/>
                <br/>
                <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-bthisody">
                        <div className="container">
                        <div className="container">
                            <br/>

                        <h5 class="card-title text-center">
                            <strong>Masuk Sebagai Admin
                                </strong></h5>
                        <br/>
                        <br/>
                        <div class="form-label-group">
                            <input type="text" id="inputUsername" class="form-control" placeholder="Masukan Username" required/>
                            <label for="inputUsername">Username</label>
                        </div>

                        <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Masukan Password" required/>
                            <label for="inputPassword">Password</label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.Login} type="submit">Masuk</button>
                      
                        <br/>
                        <hr class="my-4"/>
                        <br/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;