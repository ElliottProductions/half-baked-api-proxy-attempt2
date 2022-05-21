export async function getMonsters(searchFilter) {

  const rawResponse = await fetch(`/.netlify/functions/pokemon?pokemon=${searchFilter}`);
  const data = await rawResponse.json();
  
  return data.data.results;
}

export async function getResults(searchFilter) {

  const rawResponse = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  
  const data = await rawResponse.json();
  console.log(data);
  
  return data.data.businesses;
}
  