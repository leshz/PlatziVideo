import md5 from 'md5';

const gravatar = (email) => {

  const base = 'https://gravatar/avatar/';
  const formatteEmail = (email).trim().toLowerCase();
  const hash = md5(formatteEmail, { enconding: 'binary' });

  return `${base}${hash}`;

};

export default gravatar;

