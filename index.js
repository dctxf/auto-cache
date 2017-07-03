! function(window) {
  'use strict';

  function AutoCache(name, maxLength) {
    this.name = name;
    this.maxLength = maxLength || 100;
    this.cache = [];
    this.ls = undefined;
    this.check();
  };
  AutoCache.prototype.check = function() {
    if (window.localStorage && window.localStorage.getItem) {
      this.init();
      return true;
    } else {
      return false;
    }
  };
  AutoCache.prototype.init = function() {
    this.ls = window.localStorage;
    var cache = this.get(this.name);
    if (cache) {
      this.cache = cache;
    } else {
      this.set([]);
    }
  };
  AutoCache.prototype.get = function(name) {
    return JSON.parse(this.ls.getItem(name || this.name));
  };
  AutoCache.prototype.set = function(name, item) {
    if (arguments.length > 1) {
      this.ls.setItem(name, JSON.stringify(item));
    } else {
      this.ls.setItem(name, JSON.stringify(item));
    }
  };
  AutoCache.prototype.put = function(name, item) {
    if (arguments.length === 2 && name === this.name) {
      this.set(this.cacheModify(item));
    } else if (arguments.length === 1) {
      this.set(this.cacheModify(arguments[0]));
    } else {
      this.set(name, item);
    }
  };
  AutoCache.prototype.cacheModify = function(item) {
    if (this.cache.length >= this.maxLength) {
      this.cache.shift();
    }
    this.cache.push(item);
    return this.cache;
  };
  AutoCache.prototype.remove = function(name) {
    this.ls.removeItem(name || this.name);
    this.cache = [];
  }
  AutoCache.prototype.clear = function() {
    this.ls.clear();
  }
  window.AutoCache = AutoCache;
}(window);
