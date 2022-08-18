import { combineReducers } from 'redux';

import auth from './AuthenticationReducer';
import userType from './UserTypeReducer';
import alert from './AlertReducer';
import theme from './ThemeReducer';
import profile from './ProfileReducer';
import status from './StatusReducer';
import homePosts from './PostReducer';
import modal from './ModelReducer';
import detailPost from "./DetailPostReducer";
import admin from "./AdminReducer";
import discover from "./DiscoverReducer";
import suggestions from "./SuggestionsReducer";
import socket from "./SocketReducer";
import notify from "./NotificationReducer";
import message from "./MessageReducer";

export default combineReducers({
  auth,
  alert,
  theme,
  profile,
  status,
  homePosts,
  modal,
  detailPost,
  userType,
  admin,
  discover,
  suggestions,
  socket,
  notify,
  message,
});