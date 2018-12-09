
  componentDidMount() {
    // fetch('https://api.mydomain.com')
    fetch('https://licensesvc.trusted.ru/license/jwt/accounts', {mode: 'cors'})
      .then(response => response.text())
      .then(accounts => this.setState({accounts:  JSON.parse(response).data }));
    fetch('https://licensesvc.trusted.ru/license/jwt/licenses', {mode: 'cors'})
      .then(response => response.text())
      .then(licenses => this.setState({licenses:  JSON.parse(response).data }));
  }

  componentDidMount() {
    // https://habr.com/post/252941/
    // console.log("ACCOUNTS")
    fetch('https://licensesvc.trusted.ru/license/jwt/accounts', {mode: 'cors'})
      .then(function(response) {
      // console.log(response.headers.get('Content-Type'));  
      // console.log(response.headers.get('Date'));
      console.log(response.url,response.status+"/"+response.statusText);  
      // console.log(response.type);  
      // console.log(response.text());
      return response.text(); })
      .then(function(message) { 
        accounts = JSON.parse(message).data;
        console.log('ACCOUNTS:',accounts)
        // accounts => this.setState({ accounts })
        // this.state.accounts=accounts
      })
      .catch(function(error) { console.log('Request failed', error) });

    fetch('https://licensesvc.trusted.ru/license/jwt/licenses', {mode: 'cors'})
      .then(function(response) { return response.text(); })
      .then(function(text) { 
        licenses = JSON.parse(text).data;
        console.log('LICENSES:',licenses)
        // licenses => this.setState({licenses})
        // this.state.licenses=licenses
      })
      .catch(function(error) { console.log('Request failed', error) });

  }
