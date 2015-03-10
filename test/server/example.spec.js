var api = require('./support/api');

describe('Example controller', function() {
    it('exists', function(done){
        api.get('/api/parameterName').expect('200', done);
    });
});
