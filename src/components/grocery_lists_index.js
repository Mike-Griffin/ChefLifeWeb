import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GroceryListsIndex extends Component {
    render() {
        return (
            <div>
                <div className="text-sm-right">
                    <Link className="btn btn-primary" to="/groceryLists/new">
                        Add New List
                    </Link>
                </div>
                <div>Grocery Lists coming soon...</div>
            </div>
        )
    }
}

export default GroceryListsIndex