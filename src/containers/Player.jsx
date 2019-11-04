import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {

  const { id } = props.match.params;
  const { playing } = props;

  const hasPlaying = Object.keys(playing).length > 0;

  const handleBack = (params) => {
    props.history.goBack();
  };

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video autoPlay controls>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={handleBack}>Regresar</button>
      </div>
    </div>
  ) : <NotFound />;
};
const mapStateToprops = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToprops, mapDispatchToProps)(Player);
