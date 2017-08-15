retail
    .factory('Employee', function($resource) {
        return $resource(
            'http://10.6.20.97:9802/employees/:id/',
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            },
            {
                stripTrailingSlashes: false
            }
        );
    });