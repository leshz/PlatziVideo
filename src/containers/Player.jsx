import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from "./NotFound";

const Player = (props) => {

  const { source, playing } = props;

  console.log(props);
  const hasPlaying = Object.keys(playing).length > 0;

  const handleBack = (params) => {
    props.history.goBack();
  };

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video autoPlay controls muted>
        <source src={source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={handleBack}>Regresar</button>
      </div>
    </div>
  ) : <NotFound />;
};
const mapStateToprops = () => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToprops, mapDispatchToProps)(Player);
