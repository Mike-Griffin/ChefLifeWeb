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
            <div className="container">
                <header className="header">
                    Home
                </header>
                <div className="content">                
                    <nav className="sidebar">
                        <ul className="side-nav">


                            <li className="side-nav__item">
                                <Link className="side-nav__link" to="/login">
                                    Login
                                </Link>
                            </li>

                            <li className="side-nav__item">
                                <Link className="side-nav__link" to="/recipes">
                                    Recipes
                                </Link>
                            </li>
                            
                            <li className="side-nav__item">
                                <Link className="side-nav__link" to="/tags">
                                    Tags
                                </Link>
                            </li>

                            <li className="side-nav__item">
                                <Link className="side-nav__link" to="/ingredients">
                                    Ingredients
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <main className="recipe-view">
                        Most Recent Recipes or something go here
                    </main>
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