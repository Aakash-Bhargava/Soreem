import { ApolloClient, createNetworkInterface } from 'apollo-client';

//switch the uri to your app's graphcool id
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj01p62mjxrtl0134ibd29c59'
});

networkInterface.use([{
  applyMiddleware (req: any, next) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {};
    }
    req.options.headers = {};

    if (localStorage.getItem('graphcoolToken')){
        req.options.headers.authorization = `Bearer ${localStorage.getItem('graphcoolToken')}`
    }
    req.options.headers['x-graphcool-source'] = 'example:angular-apollo-todo'
    next();
  },
}]);

const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
