retail
    .factory('Chain', function($resource) {
        return $resource(
            'http://10.6.20.97:9802/chains/:id/',
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