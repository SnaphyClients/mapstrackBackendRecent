'use strict';

angular.module($snaphy.getModuleName())

//Controller for mapstrackControl ..
.controller('mapstrackControl', ['$scope', '$stateParams', 'Database',
    function($scope, $stateParams, Database) {
        //Checking if default templating feature is enabled..
        var defaultTemplate = $snaphy.loadSettings('mapstrack', "defaultTemplate");
        $snaphy.setDefaultTemplate(defaultTemplate);
        //Use Database.getDb(pluginName, PluginDatabaseName) to get the Database Resource.
    }//controller function..
]);