import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTags } from '../actions'

class TagsIndex extends Component {
    componentDidMount() {
        this.props.fetchTags()
    }

    renderTags() {
        return _.map(this.props.tags, tag => {
            return (
                <li className="list-group-item">
                    {tag.name}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Tags</h3>
                <ul className="list-group">
                    {this.renderTags()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { tags: state.tags }
}

export default connect(mapStateToProps, {fetchTags})(TagsIndex)