var postsData = [ {
    entryDate: '02/09/2014',
    entryNote: 'Cash from Notandas',
    entryValue: 1000,
    entryType: 'Receipt'
  },
  {
    entryDate: '24/06/2014',
    entryNote: 'Payment to Akhil',
    entryValue: 15000,
    entryType: 'Payment'
}, {
    entryDate: '10/11/2014',
    entryNote: 'Transfer to Delhi',
    entryValue: 600,
    entryType: 'Transfer'
  }
];
Template.postsList.helpers({
  posts: postsData
});