import React from 'react';
import './App.css';
import KinveyRequester from './scripts/kinvey-app-info';
import Post from './Components/Post';
import TodaysBest from './Components/todaysBest';
import TodaysLatest from './Components/todays-latest';
import UserMenu from './Components/user-related';


// class Main extends Component {
//     constructor(props) {
//         super(props);
//         images=[];
//     }
//
//   render() {
//     return (
//       <div id="mainContainer">
//           {this.state.images}
//         This is the main menu
//       </div>
//     );
//   }
//
//     componentDidMount() {
//         this.loadPosts()
//     }
//     loadPosts() {
//         let imgs = this.state.images;
//         KinveyRequester.findAllPosts().then(function (response) {
//             for(let obj of response){
//                 imgs.push(<Image cloudName="dt33hi6os" publicId={response.postId}/>)
//             }
//             this.setState({images: imgs});
//         });
//
//          <Image cloudName="dt33hi6os" publicId="recici.jpg" width="300" crop="scale"/>
//     }
// }


var that;

var Main = React.createClass({

    getInitialState: function () {
        that = this;
        return {images: []};
    },

    loadPosts: function () {
        var img = this.state.images;
        KinveyRequester.findAllPosts().then(function (response) {
            for (let obj of response) {
                img.push(<Post id={obj._id}
                               picId={obj.picId}
                               picFormat={obj.picFormat}
                               picType={obj.picType}
                               author={obj.author}
                               title={obj.title}
                               upvotes={obj.upvotes}
                               downvotes={obj.downvotes}/>)
            }
            that.setState({images: img});
        });

    },

    componentDidMount: function () {
        this.loadPosts()
    },

    render: function () {
        return <div id="mainContainer">
            <div className="content-left">
                <UserMenu/>
            </div>
            <div className="feed">
                {this.state.images}
            </div>
            <div className="content-right">
                <TodaysBest/>
                <TodaysLatest/>
            </div>
        </div>
    }
});

export default Main;
