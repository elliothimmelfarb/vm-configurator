export default {
  boxConfig: {
    baseBoxes: [],
  },
  setup: {
    dataBases: [
      {
        name: 'MongoDB',
        aptget: 'mongodb'
      },
    ],
    packageManagement: [
      {
        name: 'NPM',
        aptget: 'npm',
      }
    ],
  }
};
