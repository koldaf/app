
function logIn(){
  const username = $('#username').val();
  if(username !== ''){
    sessionStorage.setItem('username', username);
    //check if there is a history on the user

    
      window.location.href = "#secondPage";
    
  }
  return true;
}

function checkLogIn(){
  const username = sessionStorage.getItem('username');
  if(username === null){
    window.location.href = "#firstPage";
  }else{
    //Display username
    $('.userId').html(username);
    //return to last save page
    //get last known location
    console.log(username);
    //window.location.href 
  }
}

function curPage(){
  const url = window.location.href;
  
  const parts = url.split('#');
  if(parts[1] !== 'firstPage'){
    localStorage.setItem('lastPage', parts[1]);
  }
  return parts[1];
}

$('#fullpage').fullpage({
    // options here
    licenseKey: 'gplv3-license',
    credits: { enabled: false, label: 'Developed by UbiLearn Consult', position: 'right'},
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#4BBFC3', '#4BBFC3', '#4BBFC3', '#4BBFC3'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
    menu: '#myMenu',
  });

$('document').ready(function(){
    fullpage_api.setAllowScrolling(false, 'all');
    fullpage_api.setKeyboardScrolling(false, 'all');
    fullpage_api.setRecordHistory(false);
    //check if user is on
    checkLogIn();
    
    //save last pagess
    curPage();
  
});