app = angular.module('spotify-youtube',[])

app.controller('spotify-youtube_ctrl',function ($scope) {
    $scope.submit = function() {
        window.location.href ='https://www.youtube.com/results?search_query=' + $scope.input;
    }
});