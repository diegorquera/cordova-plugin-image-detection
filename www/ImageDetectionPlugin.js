/**
*
**/
var ImageDetectionPlugin = function () {};

ImageDetectionPlugin.prototype.startProcessing = function (bool, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "startProcessing", [bool]);
};
ImageDetectionPlugin.prototype.setPatterns = function (patterns, successCallback, errorCallback) {
 var _patterns = [];
 if (!(patterns instanceof Array)){
   _patterns.push(patterns);
 } else {
   _patterns = patterns;
 }
 cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "setPatterns", _patterns);
};
ImageDetectionPlugin.prototype.initialize = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "initialize", []);
};
ImageDetectionPlugin.prototype.isDetecting = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "isDetecting", []);
};
ImageDetectionPlugin.prototype.setDetectionTimeout = function (timeout, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "setDetectionTimeout", [timeout]);
};
ImageDetectionPlugin.prototype.frontCamera = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "switchCamera", [98]);
};
ImageDetectionPlugin.prototype.backCamera = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "switchCamera", [99]);
};
ImageDetectionPlugin.prototype.screenshot = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "screenshot", []);
};
ImageDetectionPlugin.prototype.activeCamera = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "activeCamera", []);
};
ImageDetectionPlugin.prototype.resumeCamera = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "resumeCamera", []);
};
ImageDetectionPlugin.prototype.greet = function (name, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ImageDetectionPlugin", "greet", [name]);
};

if (!window.plugins) {
  window.plugins = {};
}

if (!window.plugins.ImageDetectionPlugin) {
  window.plugins.ImageDetectionPlugin = new ImageDetectionPlugin();
}

if (typeof module != 'undefined' && module.exports){
  module.exports = ImageDetectionPlugin;
}
