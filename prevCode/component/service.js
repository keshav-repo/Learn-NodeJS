var L = require('lgr');

function service(){
    var self = this;
    console.log('some service');
    self.message = 'new message';
    L.info(self.message);
}

service.prototype.fun = function(){
    console.log('calling inside function');
}

module.exports = service;

if(require.main == module){
    service();
}