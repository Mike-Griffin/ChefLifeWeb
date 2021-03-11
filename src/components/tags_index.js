import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTags } from '../actions'
import { deleteTagRequest } from '../api'

class TagsIndex extends Component {
    componentDidMount() {
        const { token, storageLoad } = this.props
        if(storageLoad.loaded) {
            if(token) {
                console.log(token)
                this.props.fetchTags(token)
            }
            else {
                this.props.history.push('/login/')
            }
        }
        else {
            console.log('loading')
        }
    }

    deleteTag(id) {
        deleteTagRequest(this.props.token, id)
        .then(() => {this.props.fetchTags(this.props.token)})
    }

    renderTags() {
        return _.map(this.props.tags, tag => {
            return (
                <li className="list-group-item" key={tag.id}>
                    <div>
                        {tag.name}
                        <button onClick={() => this.deleteTag(tag.id)}>Delete</button>
                    </div>
                    
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/tags/new">
                        Add a Tag
                    </Link>
                </div>
                <h3>Tags</h3>
                <ul className="list-group">
                    {this.renderTags()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        tags: state.tags, 
        token: state.token,
        storageLoad: state.storage
    }
}

export default connect(mapStateToProps, {fetchTags})(TagsIndex)