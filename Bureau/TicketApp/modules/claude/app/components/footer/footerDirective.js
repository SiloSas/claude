angular.module.directive('footer', function(){
    return{
        restrict : 'C',
        templateUrl:'components/footer/footer.html',
        controller : 'footerCtrl'
    }
});