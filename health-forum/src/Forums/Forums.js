// import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
// import FetchData from '../FetchData';
//  import UserFeed from "../UserFeed";
// //  import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; 

// class Forums extends Component 
// {
//     constructor(props) 
//     {
//         super(props);
//         this.state = {data:[], userFeed: '', redirectToReferrer: false, name:'',};
//         this.getUserFeed = this.getUserFeed.bind(this);
//         this.feedUpdate = this.feedUpdate.bind(this);
//         this.onChange = this.onChange.bind(this);
//         this.deleteFeed = this.deleteFeed.bind(this);
//         this.deleteFeedAction = this.deleteFeedAction.bind(this);
//         this.convertTime = this.convertTime.bind(this);
//         this.logout = this.logout.bind(this);
//     }

//     componentWillMount() 
//     {
//         if(sessionStorage.getItem("userData"))
//         {
//             this.getUserFeed();
//         }
          
//         else
//         {
//             this.setState({redirectToReferrer: true});
//         }
//     }

//     feedUpdate(e) 
//     {
//         e.preventDefault();
//         let data = JSON.parse(sessionStorage.getItem("userData"));
//         let postData = { user_id: data.userData.user_id, token: data.userData.token, feed: this.state.userFeed };
//         if (this.state.userFeed) 
//         {
//             FetchData('feedUpdate', postData).then((result) => 
//             {        
//                 let responseJson = result;
//                 let K = [responseJson.feedData].concat(this.state.data);
//                 console.log(K);
//                 this.setState({data: K , userFeed:''});
//             });
//         }
//     }

//     convertTime(created) 
//     {
//         let date = new Date(created * 1000);
//         return date;
//     }

//     deleteFeedAction(e)
//     {
//         console.log("HI");
//         let updateIndex=e.target.getAttribute('value');
//         let feed_id=e.target.getAttribute('data');
  
//         let data = JSON.parse(sessionStorage.getItem("userData"));

//         let postData = {user_id: data.userData.user_id, token: data.userData.token, feed_id: feed_id};
        
//         if(postData) 
//         {
//             FetchData('feedDelete', postData).then((result) => 
//             {
//                 this.state.data.splice(updateIndex,1);
//                 this.setState({data:this.state.data});
//             });
//         }
//     }  

//     deleteFeed(e)
//     { console.log("Delete the feed");
//         // confirmAlert({title: '',message: 'Are you sure?',childrenElement: () => '',confirmLabel: 'Delete',cancelLabel: 'Cancel',                            
//             // onConfirm: () => this.deleteFeedAction(e),onCancel: () => '',})
//     }

//     getUserFeed() 
//     {
//         let data = JSON.parse(sessionStorage.getItem("userData"));
//         this.setState({name:data.userData.name});
//         let postData = { user_id: data.userData.user_id, token: data.userData.token}; 

//         if (data) 
//         {
//             FetchData('feed', postData).then((result) => 
//             {
//                 let responseJson = result;
//                 this.setState({data: responseJson.feedData});
//                 console.log(this.state);
//              });
//         }
//     }

//     onChange(changed)
//     {
//         this.setState({userFeed:changed.target.value});
//     }

//     logout()
//     {
//      sessionStorage.setItem("userData",'');
//      sessionStorage.clear();
//      this.setState({redirectToReferrer: true});
//     }

//     render() 
//     {
//         if (this.state.redirectToReferrer) 
//         {
//             return (<Redirect to={'/'}/>)
//         }

//     return (
//       <div className="row" id="Body">
//         <div className="medium-12 columns">
//         <a href="#" onClick={this.logout} className="logout">Logout</a>
//         <form onSubmit={this.feedUpdate} method="post">
//             <input name="userFeed" onChange={this.onChange} value={this.state.userFeed} type="text" placeholder="What's up?"/>
//             <input
//               type="submit"
//               value="Post"
//               className="button"
//               onClick={this.feedUpdate}/>
//               </form>
//         </div>
//         <UserFeed feedData = {this.state.data}  deleteFeed = {this.deleteFeed} convertTime={this.convertTime} name={this.state.name}/>
        
      
//       </div>
//     );
//   }
// }

// export default Forums;


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Header';
import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import post1 from '../blog-post.1.md';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const posts = [post1]; 
const theme = createTheme();

export default function Forums() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        
      <AppBar position="relative">
      <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>Health Forum</Typography>
      <Button color="primary" variant="contained" href="http://localhost:3000/">Signout</Button>
      </Toolbar>
      </AppBar>

        <main>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}