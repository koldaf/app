

$('#fullpage').fullpage({
    // options here
    licenseKey: 'gplv3-license',
    credits: { enabled: false, label: 'Developed by UbiLearn Consult', position: 'right'},
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#myMenu',
  });
  
$('document').ready(function(){
    fullpage_api.setAllowScrolling(false, 'all');
    fullpage_api.setKeyboardScrolling(false, 'all');
    fullpage_api.setRecordHistory(false);
    console.log('i am ready');
});