import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                password: '',
                name: ''
            },
            flash: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const email = data.get('email')
        const name = data.get('name')
        const password = data.get('password')
        this.setState({
            user: {
                email,
                name,
                password
            }
        })
        // fetch("/auth/signup",
        //     {
        //         method: 'POST',
        //         headers: new Headers({
        //             'Content-Type': 'application/json'
        //         }),
        //         body: JSON.stringify(this.state),
        //     })
        //     .then(res => res.json())
        //     .then(
        //         res => this.setState({ "flash": res.flash }),
        //         err => this.setState({ "flash": err.flash })
        //     )
    }

    render() {
        console.log(this.state.user)
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type="email" name="email" />
                <input type="text" name="name" />
                <input type="password" name="password" />
                <input type="submit" value="Soumettre" />
            </form>
        </div>)
    }
}

export default Login