import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    Home
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

export default Home