window.onload = function () {
  let domainName = [];
  let pronoun = ['the', 'our', 'your'];
  let adj = ['great', 'red', 'strong'];
  let noun = ['jogger', 'pirate', 'dog'];
  let domain = ['.com', '.dev', '.net'];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName.push(pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
  console.log(domainName);
};
