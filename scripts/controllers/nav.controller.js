myApp.controller('NavController', function($interval){
    console.log('Nav Controller created');
    let nc=this;

    function AppCtrl(){
        nc.currentNavItem = '/';
    }
    
});//End Nav Controller