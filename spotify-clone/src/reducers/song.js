import { FETCH_RECENTLY_PLAYED_REQUEST, RESUME_SONG } from '../actions/song';
import { FETCH_RECENTLY_PLAYED_SUCCESS } from '../actions/song';
import { FETCH_RECENTLY_PLAYED_ERROR } from '../actions/song';
import { FETCH_ALL_SONGS_REQUEST } from '../actions/song';
import { FETCH_ALL_SONGS_SUCCESS } from '../actions/song';
import { FETCH_ALL_SONGS_ERROR } from '../actions/song';
import { PLAY_SONG } from '../actions/song';
import { PAUSE_SONG } from '../actions/song';
import { STOP_SONG } from '../actions/song';

const initialState = {
  isFetching: false,
  hasFetchedRecentSongs: false,
  hasFetchedAllSongs: false,
  songs: [],
  allSongs: [],
  error: null,
  isPlaying: false,
  songDetails: null,
  songId: null,
  playButton: false,
  resumeButton: false,
  pauseButton: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECENTLY_PLAYED_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_RECENTLY_PLAYED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasFetchedRecentSongs: true,
        songs: action.songs
      };
    case FETCH_RECENTLY_PLAYED_ERROR:
      return {
        ...state,
        isFetching: false,
        hasFetched: false,
        error: action.err
      };
    case FETCH_ALL_SONGS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ALL_SONGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasFetchedAllSongs: true,
        hasFetchedRecentSongs: false,
        songs: action.songs
      };
    case FETCH_ALL_SONGS_ERROR:
    case PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
        songDetails: action.song,
        songId: action.song.id,
        playButton: true,
        resumeButton: false,
        pauseButton: false
      };
    case PAUSE_SONG:
      return {
        ...state,
        isPlaying: false,
        pauseButton: true,
        playButton: false,
        resumeButton: false
      };
    case RESUME_SONG:
      return {
        ...state,
        resumeButton: true,
        isPlaying: true,
        pauseButton: false,
        playButton: false
      };
    default:
      return state;
  }
};
