const container = document.querySelector('.row');

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const card = document.createElement('div');
            card.classList.add('col-lg-4', 'col-sm-12');

            const cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            cardHeader.textContent = country.name.common;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const capital = document.createElement('p');
            capital.textContent = `Capital: ${country.capital}`;

            const region = document.createElement('p');
            region.textContent = `Region: ${country.region}`;

            const flag = document.createElement('img');
            flag.src = country.flags.png;
            flag.alt = `${country.name.common} flag`;

            const button = document.createElement('button');
            button.classList.add('btn', 'btn-primary');
            button.textContent = 'Click for Weather';

            button.addEventListener('click', () => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid={YOUR_API_KEY}`)
                    .then(response => response.json())
                    .then(weatherData => {
                        // Do something with weatherData
                    });
            });

            cardBody.appendChild(capital);
            cardBody.appendChild(region);
            cardBody.appendChild(flag);
            cardBody.appendChild(button);

            card.appendChild(cardHeader);
            card.appendChild(cardBody);

            container.appendChild(card);
        });
    })
    .catch(error => console.log(error));