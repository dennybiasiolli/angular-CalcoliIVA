'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('myCtrl', ['$scope', '$window', function($scope, $window) {
        $scope.calcolaImponibile = function(){
            $scope.calcoloImponibile.Imponibile = $scope.calcoloImponibile.Totale / ((100 + $scope.calcoloImponibile.IVA) / 100);
            $scope.calcoloImponibile.ImportoIVA = $scope.calcoloImponibile.Totale - $scope.calcoloImponibile.Imponibile;
        };

        $scope.calcolaImportoIvato = function(){
            $scope.calcoloImportoIvato.ImportoIVA = $scope.calcoloImportoIvato.Imponibile * $scope.calcoloImportoIvato.IVA / 100;
            $scope.calcoloImportoIvato.Totale = $scope.calcoloImportoIvato.Imponibile + $scope.calcoloImportoIvato.ImportoIVA;
        };

        $scope.calcolaIVA = function(){
            $scope.calcoloIVA.ImportoIVA = $scope.calcoloIVA.Totale - $scope.calcoloIVA.Imponibile;
            $scope.calcoloIVA.IVA = Math.round(100 / ($scope.calcoloIVA.Imponibile / $scope.calcoloIVA.ImportoIVA));
        };

        $scope.calcolaDaIVA = function(){
            $scope.calcoloDaIVA.Imponibile = $scope.calcoloDaIVA.ImportoIVA / $scope.calcoloDaIVA.IVA * 100;
            $scope.calcoloDaIVA.Totale = $scope.calcoloDaIVA.Imponibile + $scope.calcoloDaIVA.ImportoIVA;
        };

        $scope.calcoloImponibile = new Object();
        $scope.calcoloImponibile.Totale = 1220;
        $scope.calcoloImponibile.IVA = 22;
        $scope.calcolaImponibile();

        $scope.calcoloImportoIvato = new Object();
        $scope.calcoloImportoIvato.Imponibile = 1000;
        $scope.calcoloImportoIvato.IVA = 22;
        $scope.calcolaImportoIvato();

        $scope.calcoloIVA = new Object();
        $scope.calcoloIVA.Imponibile = 1000;
        $scope.calcoloIVA.Totale = 1220;
        $scope.calcolaIVA();

        $scope.calcoloDaIVA = new Object();
        $scope.calcoloDaIVA.ImportoIVA = 220;
        $scope.calcoloDaIVA.IVA = 22;
        $scope.calcolaDaIVA();
    }]);
