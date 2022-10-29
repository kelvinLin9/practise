let data = []
  axios.get('https://randomuser.me/api/?results=5')
  .then((res) => {
    // console.log(res.data.results)
    data = res.data.results

    function convertHTML(strings, ...keys) {  
      console.log(strings)
      console.log(...keys)
      return strings.map((str, i) =>
        `${str}${keys[i] ? `${keys[i]      
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')}` : ''}`
      ).join('');
    }

  
    let cards = data.map(i => {
      return convertHTML `
        <div class="card">
          <img src=${i.picture.thumbnail} class="card-img-top w-25 " alt="..." >
          <div class="card-body">
            <h5 class="card-title">${i.name.first + " " + i.name.last}</h5>
            <p class="card-text">
              Gender: ${i.gender}
            </p>
            <p class="card-text">
              Address: ${i.location.street.number + " " + i.location.street.name + i.location.city + " " + i.location.postcode}
            </p>
            <p class="card-text">
              Phone: ${i.phone}
            </p>
          </div>
        </div>
      `
    })
    .join("");
    
    document.querySelector('#cards').innerHTML = cards;
  })

  