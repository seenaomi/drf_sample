retail
    .factory('Store', function($resource) {
        return $resource(
            'http://10.6.20.97:9802/stores/:id/',
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