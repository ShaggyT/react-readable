import uuid from 'uuid'
import React, { Component } from 'react'
import {  withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col, Button, Input, Form } from 'antd'
import { createComment, editComment } from '../actions/comments'
import Space from '../components/Space'
const { Item } = Form

class CommentFormContainer extends Component {
  constructor(props) {
    super(props)
    const { comment } = props

    this.state = {
      redirect: false,
      author: comment ? comment.author : '',
      body: comment ? comment.body : '',
      id: comment ? comment.id : uuid.v4(),
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const postId = this.props.match.params.id;
    const comment = {
      author: this.state.author,
      body: this.state.body,
      parentId: postId,
      id: this.state.id,
    };

    if (this.props.editMode) {
      this.props.editComment(comment)
        .then(() => this.setState({
          redirect: !this.state.redirect,
        }));
    } else {
      this.props.createComment(comment)
        .then(() => this.setState({
          redirect: !this.state.redirect,
        }));
    }
    setTimeout(function(){window.location.reload();},0.0001)
  }

  handleInputChange = (e, input) => {
    this.setState({
      [input]: e.target ? e.target.value : e,
    });
  }

  render() {
    const { hideForm, editMode } = this.props;

    if (this.state.redirect) {
      return <Redirect to={"#"} />
    }

    return (
      <div style={{
        padding: 15,
        background: '#fff',
        maxWidth: 800
        }}
      >
        <div>
          <Form>
          <Item
            label="Author"
            style={{
            textAlign: "left",
            marginTop: 15,
            marginBottom: 30,
          }}>
            <Input
              value={this.state.author}
              onChange={(e) => this.handleInputChange(e, "author")}
              placeholder='What is your name...'
            />
          </Item>
          <Item
            label="Comment"
            style={{
            textAlign: "left",
            marginTop: 15,
            marginBottom: 30,
          }}>
            <Input.TextArea
              rows={4}
              placeholder={'Write a comment'}
              value={this.state.body}
              onChange={(e) => this.handleInputChange(e, "body")}
            />
          </Item>
          <Row type="flex" align="middle" justify="space-between">
            <Col>
              <Button
                type="info"
                size="small"
                onClick={hideForm}
              >
                Cancel
              </Button>
              <Space />
              <Space />
              <Button
                type="info"
                size="small"
                onClick={this.handleSubmit}
              >
                {editMode ? 'Save Changes' : 'Submit Form'}
            </Button>
            </Col>
          </Row>
        </Form>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  createComment: (comment) => {
    return dispatch(createComment(comment)
  )},
  editComment: (comment) => {
    return dispatch(editComment(comment)
  )},
})

export default connect(null, mapDispatchToProps)(withRouter(CommentFormContainer))
