angular.module("miniRouting").controller("productsCtrl", function($scope, $stateParams, productsSrv){
    
    if($stateParams.id === "shoes"){
        $scope.productData = productsSrv.shoeData;
    }
    
    if($stateParams.id === "socks"){
        $scope.productData = productsSrv.sockData;
    }
    
    
})