import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
    componentDidMount() {
        if (this.props.token) {
            console.log(this.props.token)
        }
        else {
            console.log('aint no token')
        }
    }

    render() {
        return (
            <div>
                <div>
                    Home
                </div>

                <div>
                    <Link className="btn btn-primary" to="/login">
                        Login
                    </Link>
                </div>

                <div>
                    <Link className="btn btn-primary" to="/recipes">
                        Recipes
                    </Link>
                </div>
                
                <div>
                    <Link className="btn btn-primary" to="/tags">
                        Tags
                    </Link>
                </div>

                <div>
                    <Link className="btn btn-primary" to="/ingredients">
                        Ingredients
                    </Link>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default (connect(mapStateToProps)(Home))