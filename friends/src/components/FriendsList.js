import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriends } from '../actions';

class FriendsList extends Component {
    componentDidMount() {
        this.props.getFriends();
    }
    render() {
        return (
            <div>
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="age" className="input" />
              <input type="text" placeholder="email" className="input" />
              <button className="button" onClick={() => {addFriends()}}>Add Friend</button>
                <ul>
                    {this.props.friends.map((friend, i) => {
                        return (
                            <li key={i}>
                                <p>{`Friend ${i+1}`}</p>
                                <p>{`Name: ${friend.name}`}</p>
                                <p>{`Age: ${friend.age}`}</p>
                                <p>{`Email: ${friend.email}`}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
