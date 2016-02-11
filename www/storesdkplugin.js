/**
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) Matt Kane 2010
 * Copyright (c) 2011, IBM Corporation
 */

var exec = require("cordova/exec");

var StoreSdkPlugin = {
    initialize: function (successCallback, errorCallback, strInput) {
        exec(successCallback, errorCallback, 'com.microsoft.StoreSdkProxy', 'initialize', strInput);
    }
}

module.exports = StoreSdkPlugin;
