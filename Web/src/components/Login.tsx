import * as React from 'react'
import { SubmitButton } from './SubmitButton';

export class Login extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4 col-centered">
            <div className="login-panel">
                <h4 className="login-panel-title">News Crawler Result</h4>
                <p className="login-panel-tagline">Junk news</p>
                <div className="login-panel-section">
                    <div className="form-group">
                        <div className="input-group margin-bottom-sm">
                            <span className="input-group-addon"><i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i></span>
                            <input className="form-control" type="text" placeholder="Email address"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-key fa-fw" aria-hidden="true"></i></span>
                            <input className="form-control" type="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="checkbox checkbox-circle checkbox-success checkbox-small">
                        <input type="checkbox" id="keepLogin"></input>
                        <label id="checkbox1">Keep me logged in</label>
                        <a href="#" className="pull-right">Forget your password?</a>
                    </div>
                </div>
                <div className="login-panel-section">
                    <SubmitButton></SubmitButton> | <a href="#">Create Your Account</a>
                </div>
            </div>
        </div>
      </div>
        )
    }
}