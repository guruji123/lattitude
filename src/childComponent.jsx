import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {deletePost} from './actions/postAction';


class ChildComponent extends Component {

    handleClick = (id) => {
        this.props.deletePost(id)
    }
    
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map((post) => {
                return (
                    <Fragment>
                        <div className="row" >
                            <div className=" col-sm-3 card p-1 m-2 text-center" style={{float:"left"}} key={post}>
                                <img className= "card-img-top img center" src={`./${post.title}.jpg`} alt="A mobile" />
                                <h3 className="card-Title text-dark" >{post.title}</h3>
                                <div className="card-body ">
                                    <p className="card-text" >{post.body}</p>
                                    <button className="btn-danger" onClick={() => {this.handleClick(post.id)}}>Delete</button>
                                </div>
                            </div>
                            
                        </div>
                    </Fragment>
                )
            })
        )   : (
            <div className="center">No posts yet</div>
                
        )
        return (
            <div className="container">
                
                {postList}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent);