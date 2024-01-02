module.exports = api => {
  const istTest = api.env('test');
  
  return {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  }
};