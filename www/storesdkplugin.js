/*
 * Copyright (c) Microsoft Open Technologies, Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
 */

var exec = require("cordova/exec");

var StoreSdkPlugin = {
    initialize: function (successCallback, errorCallback, strInput) {
        exec(successCallback, errorCallback, 'com.microsoft.StoreSdkProxy', 'initialize', strInput);
    }
}

module.exports = StoreSdkPlugin;
