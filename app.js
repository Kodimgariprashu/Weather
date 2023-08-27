const weatherApi = {
    key: "4a9588605a599b6727087a4a41f41491",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        // console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    if(weather.message==='city not found'){
        alert("please enter a valid city name");
        location.reload();
    }

    // console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.722f1fe1ea26153501740d3ea546ac84?rik=wvMn6r9fOG6AAQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fvgjD5VS.jpg&ehk=peMcoKMCN7GNr8Zb0OhYAi54SED%2bV1pJ49NKvomUCuQ%3d&risl=&pid=ImgRaw&r=0')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/28/67/xJGc9C.jpg')";
        
    } else if(weatherType.textContent == 'Mist' || 'Haze') {

        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.Ik8BR-jHsniIq_NEkM-kewHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.HLVS-424jiCYdP7klVNxtwHaEo?w=280&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.f2e710fd907b4112467eead4a3addce8?rik=rCNPMT8feAC%2fSg&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f14%2f16%2fFS2QIy.jpg&ehk=t2Z0HZMzV6RT4Gz4eblFuNUfnhOGfXylLk8NEMXJ%2bs8%3d&risl=&pid=ImgRaw&r=0')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADnAV4DASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQBAgUABv/EAEMQAAIBAwMCBAQDBgIIBQUAAAECEQADIQQSMUFREyJhcQUygZEUI6EVQlKxwdFicgYkM0OS4fDxJVOCk6I0o7LC0v/EABoBAQEBAQEBAQAAAAAAAAAAAAEAAgMEBQb/xAAkEQEAAgEEAgMBAAMAAAAAAAAAARECAxIhMQRRE0FSFDJCYf/aAAwDAQACEQMRAD8AWtOQxbdBnvRnvNGWM9hSNrxGJEDOM1d1FtkEk4yOxr2PKKdw8wJls0UgMqtB39Y/nVbYQrDgiVwRQzca2CfWJipo5YvFGAY1soLGqseGdvifuE5z2ivMrdkg1paPU7WUzkQc9KGoBv8Aw254hABIE4E4HarWbTqVtMIMbZ9CYBrcFwNcS6DOF3CMkCiai3pbyK6IodcgxBn3os0xjowJPJFc9kqBHam1d91xbg5KgR0xg1fwgwIByRjdwKbVFdLee2QJMTit+03i25OQcGvPqAHdIypMVu/C2VkZWPPFZlqHAsjkr8sgMJ5Ap9vDuWRcVxAX5ZyDS9+wFJZTI4IpfTq+9lLGOPpWUNdfcgAyePQjtQ7SpABA5Mg8Ue7aZFECRzMdaW8UAgY9ZpgC7bJt3LRZpUkqCcGexpL8Mu4kjE89J9Ku922xM47RVHuEqFtyCCd3YnvWoAV+1ZKEIcnk9qf+FsGsPaJberbhzBHesi67KckT17UxpdQyMhDfYwCQetMstzwnJIBzBPm9KSbTqWYgYg7h2rVS3dbwrpjZcAlgZEDk0C66G6Vt7dqgiT1PNYiW3nb20OVjHrSN1BJrZ1WmButsgqxn0pRtPu8pEEHJOK3DLDuJzS5tknHNat+wq4kFszHFKFdjAkYB+9aYkNFKCXEjj/tQnsLdbcBGaYvB9wCjyNBEUddO/hBozwAOtNggdIsCJkH9Kes/DrhVSFgMMVo6bRHbuIJnAwMGtkWwqWpUAqsHAiszk3GLyV74ftBByZoC2WWYBnFeqvadHltok0D8EjSpWq1OLE8NrgAI4HTvRF06qT3imriC2zKBEfehM8falmiN60FD9oP3rIvSSa3LhkEH1rJvJ5j71AC3ZLRzmnkW3bVRiRQV2qgPagtdbPepGmujOZn7Uq9xjgDmaE10jk5obXzEA1IRyQBJ4oZaSI+tU3ExJrlOQaEctMEE9aqbuTtgUJnER/KhgzOPtUGxaAz26CmrdhWzif8AFmhwnIEZxFGQkcVNi+CwAgKZqty1FuDByTBoyPxVrieICQYb14qLL8NQRAA5mDRra7Yg8Grtp2VWJGJmr2rBYEiQIn3qR/TXwQoJwMA04N5J25U5rFRttzZ2zWtpy7KBMKYyDRTQlxVKg9V+bvQbceIJMrM0W6UgqBjgNyfWus2QxGc9aCtcsI1xXUeZgcRyKZ09v8zbbJGJz/yqbdtgTJHl6nmPSpLeA4YcMRHvWZlHriPbXz8N/Ol0Oy6COvNNpftX7bC4YcDB70kzQ8duIFZLTLWbqbGMECRWTqbAWTPm6VG95JMyOaMdjhGnB59DTAZhEE7ulBuahUDFSAZjGTWrc09jz+YbZliRkk0lqdDZK3BbaTsDTW4lmWRdvm40A5J5q1q4ymH56RSV1btm6wYTHFXa8CqEcxnGa0w9J8J1V61fUXCzae4pV0kyQRAiTArW1GmWyUYNCXRKjsO1eS02uCoEYEEwJPUV6M3/AMTp9Od4K27YUDqPc1iYbiUMi7iVJKziivprV2wxyLm2BEeb0M0lua38p3AzntUfibhBBJj3qJa/8LcqpWAeuZ+9Z2q0V6yFLGQZ+XpFbq3W711y2bwUOQFyB6zWokTDzlsFiinoenat3RaYPt3iFIxu5wOQaH+BVJ2gsB5pGDHrTtq5+QtskKgYOB+9gZ81EyohpLZ0KW/EeNiDbuYQB7VF8W7qp4ZUW4EERkd6S3pqCm9/ylYbU4AgVZXRZtqRtkkEmB61zaVubEkZkYqikEgEDIk0ZrYIBBBnOM0veKWiu5vbbwBWoDN1qTqLu0eUEZrOvbQTtM8c1p6zUIwO0GCNp/xR1NYN6624g8V0hmVbj+tJ3MnvRCc0MiTilkJt30oZNtQ27k4FWuD1NLPiTUAbhM4M1BXygnMj7VYI1wgAHmactaG9dCwDtEH0oJADGZ9KnzGK37fwh1VWKnMjPFR+z7W4yBMxIqTF249fSoG9eK1ruktoMHM8elIMhmAMDtUGiHHQ5mipdExWeGPU1dXjM0lqpcHSjrcPesy1dppXkVFooyuNrRViFWCoAjnsaTtsSce9HZmaAD/zoIhs2m85XzcE0S2628ZHFLBrqY6c1BcMZmCKqVtS09pjDgEHrTACrcG1iVAgGM+xrEW6VMFpFO29RjmiYMS0iQzkj5QOhpibcJvXcjKQuJAM1lC7JAnFaOmugobTGbZII7g+lc5aCu77OFMgifWKPpjbINxhJAoN8gOpOYG30oRvhQdpjGak0WW28gYkfWs5y9sskny0Aau4MhjAoz3k1AUnysBE/wB6aQiOLqNPzQfqaEhdd28QYiDwRQRcKMYovihwAevXrUCPxDTs43WRuXkgcisW9Zv2iN6kdfQ1682LW3yPgiSCOp9azdWAQVdM8AiIIrcSxMMO2C7oOvHXFbmnuPZQJJPeOKzTaZHDqIIMimBd2iQTJkn61qWYaSOW3jpHepwopNb0KImTnNGVpZHc9RjpWWrOIJj71126wAjABxV0KECMAASeKXvFQkzgtigpGpKgqxMEQfUGi2nXyk9cCe1ZYdSzBzxx7UZLygc4AxVSs7e/LKeGDkRjg0F7xmRh4iKGdTug9uKH4qlj69KqNjC/dwCSBI4quoF25tKmQFBJnk1VULMG3COoq1wGT5iB6cfaqIBFy6gq3WkbyJyfatJgCTPB496Xv2QbZ2kEyfvWmZZzhYHAFKuYkAj70S6t2D0C9+RSLtcEwJpAxyIMe9Au2eDPXiu8UgeYZrlF64ZgweJqQ+lFoOPL6STW1plQKq9J/wCjWdptNPmIyBj1p62rgmCYqMNkILibQQdgkRMUnc02XKkExI70azcdQU3RuGY6T2pgW2YbkwTgk9RWWnnrmnJksxkdIoC6Rmnlf61savT3Vbdznp1HqK6xpmvAu5heFimxMPLqVIGa4wBM0BTBgdaKTjitMj23giTWhYdDFZKOvB+lMLcipNgBRJXg81bxAOtIW9R5YkxXG6O/NCPtcJE0HxQcGJqiXl2wTQngmQRNMIzJ74qwulaR8S4B3qPGYc0i2oL/AGNM2NU25QX+3Nef8fPNXTUEEGazMQYyp6dtQW3eYxzB60qzNPWOeazF1R53Z9asdWY5xRta3NAXCNw6HpVku2wPMxHrWX+Jqy3gQZPtVQ3NXxQeCDVfGKmsg3ypwat+Kx3oo23E1giCapdv226isb8QT2FDbUkdTFFLc1Guq0jGKUctuJGf6Uut8zzR7bBiAetaZXRru4GeBTqsSASTNKtZYAMvQ5oiPAg8gVJp2LxiOSI57Va6u5WjmSYHEUjbvHp2phb2CTkRFFNM2+LitMHmheKxhZ+1N6l02zBgkik7RAfdtntNIXLXQfLJxmpDXEMknd69qObqCBtA3UDUOqlSf4TNQsa1ecmO360V9V3wfTisq1qNk5q7X9/ao2be+1xoB7ccVa2W8yQCoySKXtER74xV5K/KxH86kl7IcXlj91uePvWXpLAPi7l3dM/0NaTu3gt5sMGmaX0e6YRgAxlpHQUhKfDrTgtGf8QyI6UFkWyWV1iPtWwEJG5SJLAge2KjwluOVuIsmJJ70NUyrVwtOzAHFFtXCJDEzNP3NJasjcOekcUEWk2yRk5qVD2yDAieM08DtRVBg+lIWoRBxIaff3onis5Gdo/U1mYag1slHUkE+pH2qumtgBoXcO08Ggq43kSTjPtT+lFtQxDQDGOaE8Cy21cqqGDJB9fegvca2dp4PrWpqvh2pLb7ahZzCtIrHvo6yLqlT3NdXOki4re9FW59qQAjg13iMh9KLTVW4OmJq+9elZi3560Rb471KmoCu0ZNVZgOCTSYvA8GrhwetSMC8R3qhZmoe4ZqpZuhpCzEjmqC4RUb/wCLiquV5XPtUhReOKv4pjmk1W4wZkBMZNV8RlMMKkc8Zx1q6X3pPcOZ5qRcA60Job93JoVwuPk4Bpdbo70QXQJEwCakuLjZmeK4vIFAe4J5qniL3oR+yTMTTqXAkVjJdKmRTC3WYc8ZqT0drU2ChB6g0ncuwTkAziOCKylvkdalrxaAKKVtNNUowTTK6sDrWLtBMqcmDUNcdTEkQcTSrbj30uDMfaqKiwW3elZC6phyaMmrHBOKifaTB7celCugPbeckcUIai2QIP3oTahfMJHNILecGM57VZLh3QScdqsXH7sSeaLZseISSYOD0ipLW7hkZIiitfJfYRxGaKtoEEHYY6g1REtvuDQAJAJ71EVgty0F3bcYIEk1Ontpbwwkxg0vuCHaDMGiC45McUJo23E4gdaMLqSZjFZO64DzRFaQSXINTVtNnW4GEiOPWkXcLK9uKG17b1z6UpevyfXpUjD39vXpQ/xMZJpK5db+GRHNBctcACBi3YVK2wmrQdc07pdUgQln5Mx2rC0+jvvliRPFaNrQ3QDJ/WgWQOucckf1pTUXrOoBDCTGKFe+HalHIZyVESSCD9hRfwS7IR/NiGOBitJj3Lewkg0I3DxFOahb1litxDxIjMjvSTBnDMFbaDkgUKAy57VO96kLEbsD1wasAswIIiROaigXWHWiDUsOtV8kEFR6EUIoJxQjS6k0UX561nkMJjpXB3EVWKam8NGakfQ+nes8XccwaIlxu9O4U1FvKqKAIA9KBdKPuwJ/rQDfx36UPcxOTTYcTcQkdKgXDORXMzCJg0PxKyaMAqcirbqWRz0ossc0pZnMH0oHiH0oqhmnMe9WFlG+YCpAi/mJpyzeG3J5pe5pbZI2SKGbF5DKtIHrR0uz7HJ2mKqrmeuOe1Bsvt/2kGOk1drtsfKI9KQdW+qAjk9DVH1CkEEZOZpRr4gVQ3wZBAI6dxVaEN+Ca4aj1oAFtzztqxW2AwBk9DVZN2rw3eZsU5u07jPMcisRQQfmFNW3uzAj3FUSqN7gpMNMcU3YvjFIPwsgzGYzJoa+MCAhgCMmkPT2btt4Lxjv1qr3LO47flrDGq1KCCVIGOa4at/Tniotr8kgcRVDcRCdoP1OKzPxZYUUX7ZXLfSpDNqiDIipGpB9zSb3rQBCxmg+PBwak1rcP88T6Uc2UYKACfQCsu1qIIk5p1dU0CHWonbfw+wc3D6wT/anLNrS2idqL6GstL1xyBvXPrTG57YBJJMT6UHg294KTAH0iqC+xJIj61nXdQQc0v8AjACc/rVQulNVr1B8wJ7Tis9tbbnGBXLq7b4uqD2PMVD6Wxc81q9EjjFaoWq9xWBIEyM5k0sdRctqVVIUkzAqz6bVW8gbo/hxQTe1Cc22HowolFrr7p6T60CSvBNPvqVYQ9tc9SopVihmAvXpQYD8Rq4u1QwHSqSe1ZIguMMGrBh1FCzVgpNSXbbGKgG4Plk+2aPZtW2wx9orY0Saa0PzArCfrWoxtmZYyG4WQEQSYGKbu2dRaALoQGEietbly9oGQL4FuF4JAweZ70vc1du4AjqrKOMcVqogXbBALOQZgfarG2oIp90smdhAnp1pR7bIeQR6ZrNK1NqDOajew+Xv96sUJPE0IgBiIqRhLpOCoogbbBkRPApYT7V2B+9UjLXQxmqO2MmO0UAsSasFdhABNSpUvE9a7ep57VxtXDMiKobTjrQ0lmFRvjjrVDvHNRQl97jjFWDGQTQwDUwKiuXnj7VdNQ6QIoMqMGukHpUDyagsQDPMim1a0/OCOYxNZSPsM4xVm1AOaYEtQnTjHJ9TQ7lpD5kbaY+lZniuTzj1oi37nBM0gR/HtE8kelDOoudA32q3iM2AeKlQzHmoheO3XdU+K2CQwniaY/DjkyxPapNqVIYR2/5Uq1LbO5ENFaFm0TBLyPVopC3+UcienFHW5uOGCz0pDXTZbAYbY55OKs+tLAjMRANZYvbRBIPrUjUW89T69KlZp3Ygeb9elAKmfmBoDX1zme0VTxHbgGKQzN2ot8o31zRV1jLEyIj0pkB2nco9zUNYL8AfzrNNW5fiHc4rn1LMZQ7h2Of0NDOiYnFuSewINUOjvIRtDAzwwqXCWu/xWlP/AKaqz2G/3YU9Yoot6kc596g2bvJUfapWotrTXP39p/xCRVzoLhEqAw7rRRpyQIifambP4rTxCSvYZpiBbNbR3U5U/apGnuDhfrFbi6vcIa0N3tRPHUZ8JfsKaVsHY69gandeHr7Gtl7unf57KT32/wBqCV0bHCgfSraLZ2+5GSw+9ULv0ma02W30bFQLaTIKz6iilbKL3p/exVxdkeYNWr+GRhjbPWh/gD0APYVUrJ22TnIjiMj7VU6drrSs9z2rVtaC4ufDWOoPT6Ve5YIXYfIBmVAzVStitp3XAM+1WFhuoNaAtoDk8dTRR4Q5iilbJFoqeJpgOwEFRHoKebwABCgn16VQtYIPkFNK2c5knBHNAKsT1rRJX+ARVWVIMChElshp3kiqG2inBJpopfb5UJFcNLcPJEnp2qo2T2zx+tVMjFNNpbo4H1ml2t3QYIPNFGwiV710gdat4Wc0QIi9AaKVgSScTVwhPJppFtmPL9OlF2WznaKRZMWp61ISOuKO68wQBQSDEAz6VIRBAGB96kl+RA9BQQjHO6Kg7h+9ShRfuKTMirHVkgA/SgiG+YgfrRVS1iBzzNSQb7HpUAljifpRxatHgVbw4EL/ACpQQVwdpP60Q21xJwRQmBUzGfWqm5nzNA9KgYQW7cnn3zmmUuLnIH0pHxrWIUyBEmrC4D29q1CSNQVGQDnGBRF1dsZ288xwPascXmJ/50ZbrDpWbNNpdZiQWAHHWfar3NYm0eJkngQJFYw1F4wApInEc1zHUEg+BeJ9FJ/lTaN+KQxMnmeauL5PXms6dWZ/Ivf+239qsTqrah7li8qfxNbcL9yIotU01uZIFFS8VIM4rKTWLGRV11SnbuPWRHFNhr+NMkR9qstw96z11CwTOOa4alIw33pR12DdAfYVwtgrkqCePakxqWnyke1c2okEsc9I5qsG2s2ujGfpFUFluhNK/ihgBpow1KAQX/WhUY8O6vDL9zxRrQZRLXQD2nFIHVACQwOe9L3NYTKhs9KbVNs6hbY+fcT+lLXb++exyP61mm8yKu8yeSeld40gScTRao0zZOc/0qA4IMdOaXLhoIaPehi6yOCRhjmOPrWZJpmNduESTSeo1DAgJkntmqpa1t0FidqxjrNSOeIp61BYdx65pF9NrbZG2WnHlqGXXYU22BgT6/WotBLpEhDzzOa43DPzf2rOVrymCD2NWLXZxJ9Bn71CjzXfWhm4KSNy7xseYnAJxVfGYwACTHAmarVHGuJBlRQGuIOBFLFtSTARvtVGN7IZYqs00LbRBJweKPKHg9Kx/EZYgsABETUpqLw4M80KmmbiAwc4oZ8N4KtB+4NJE37mYPGTFcqXR3+9KMsHAJBmORNAa7XRqBwP1FStjUOSWVfqQKkoLw3R0pjxlQKJyRUNomYR+VPo39aG2kvLAP08wIqqUbt3h3phb6GKyxYujqfcRRVssAAbgE96qR8sj8xz+ld/qwMlFJ6ATSoCoB+aTn6UbbcVd8jaRI9Z7VuA57v8KBR7UPc56Z+1X3swEgrHGKLbsXbgkOD7kf1pTzC3D1JH0q4vsDzRjZtzgVwsJ/DXOmrTb1W2DT1v4vcSI6etJDTIe49qt+FMeVxMiNwH60hsW/jtwEEqfXIp1f8ASSVVSjNyCGgiPrXmTZvjEIY7GKkWbuCU+zVqlb0ia3R3n8RrVsMDuUbFMN6Vo2jo74Je3a84hiFWSPtXkFF5RhWHswoi39cnDXAB7Uzizb0l74P8JuZt371qZlVIYf8AypBvgSKDt1xmYO63iPvNZw1mq5a4888V37R1Q/eB9wc1nabM3fguoADaa+LgEht52Nu/w9P1oA+G67Ju3VT/ANW7+VQvxTVqIBWPqKoddfPIBHXNO0Wpc0moSYct7Tml2W6s7t89jNNrrbgnyiofV3GEBfvRRsp4l1Vglh2mRVfFYGZM+9Ha47iGg+9D2T0AopOOoZgASfaa78RzBap8LcMt1xiRV109r94mfTAppWhdSwAziirqkbBgevSqfh9P2b71Dae1iAfvSLHGptJMAGcE96KmrP8AEoHqaRNpO5qvhDuauU1k1dpTJcH/ACz/AFo6azQkkNcuAHtBH61iC2P4jVhbHc0p6NX+BNLSdxEEORHvgVNvV6G1aW0RbYr8rhQCR6jvXn1RR1om1OwqoW2n1umAKrtAPaP6Uhdu2CSVgTzEUsFtj90Vb8uCCq59KqVoLTwRFCZbU+Yk+xokWhworiLf8IrNNWELenJ+Qn6nFEZLYgi0nuBNR5e0V3l6Fh6g1ULSbhAwuPQ1Q3d3OKICvv7ip/LPQVUrACF4g0U6e50uMCOkf1oodV4AFSLgqpWCNJqCJ8SfYmq/htQWgl/1NNpezyOaL+IUEienNO1WTXR3yOfoeaYs6HcQGke4xUi/PBjrmrjVEEQevXinYNxoaLR2LclkZmEbWXOfrQbttSoW1tG2YUcH2mqvqWuQCQdvBgVQuTFajEbgGF8GDbuSOyk/yotq1qiCRbudsKxz9qZs3SCPNtjuSRTaXhJl2H+QxNZ2ytzyIirgjFC8PUDBs3PtUxeHNp/sa5Rnj7dtsjgip3CgTd/8t/sa4G7/AOW//Cafkx9ipHkVJel913+Bv+E1IF85Fq4fZG/tWvkx9ipH31JuTil4vdbdwe6MP6V3n/hf/hanfHsbZGLVWZoZLiJVh7g1G5vX7GndA2yJNdIoW7v/AFqZ+lG6FUrgjNSSKHvA61G+jdBqRcV00LeM5FR4gFFwqHBwKtu9aXFztXbzWt0CjG71ri9L7zU7z2P2q3QaFJqJoW89qjeat0Kht1WDZpfeasHq3QKMhqtupYOKvvFO6BQ26oLHvQd4rt9W6FQ2+p3TS5epD81mzQxaoLGh7wamabVJ3EdasLkUI1E02qMb6ncKWD1O+mKFDz2qNxoPiGu31q4Zobefap3mgbxU+ItasUYF0ir+MetKBxVwwpuGaMeOa4XnzB/nQQVNSAKbgVJgWR3tGeJIzVvBOP8AZeknFBHRVtvJPzOTPtAqwW4ssqlYwGLBT7TX5LdL7XAwtP8Auiz65JH86sLV8Di2Y6ChAllUlCHMFg24mOkwIqSwAAhfNn94AD61b5hcCm3fESlvMxk/zqfC1H8KfQgVRWSAVCnPO0nii5KlgB3OCPpNW+TWKFt6tT8vOcMP71IXXDjePZv+dDZmgQPNI824YWeY71LXE+ZjzHaMYyQaPkkcCz8T/jcDA+bv7mp/8RMSxJn0M/ehLdRpEAEDJGR95rvFXqJyImII7AnFHySKgQrrDBP22j+tQU1PllBmY+XP0qhvIsQtv2dp+201YlkRXdAQZYe8wSAc1fLPtVCwtaggQv6L1PrXC1eOdgMGCYX+lJnWS5U2XKbskBpnvxRmdMbFhTxGCSeu0CtTqZR9ioMG3fwAGGJyiEfeuCXQfkUkcytsj9KUZghEqzb8sUTCngSeanZcYGAST12mPqaxOvMfY4PqwHz6Oy8d1UfyNR4mmyP2fYnMmX6d4akm0zKbbXVCbkLKSD5lmPaoYabaZXfO0CQIJ7QBR80z9mIv6Ns+lAzo7IzkM10/bzVTxNIJH4KwfUrd/qavY0PxC+Q62UsJ+6WHA9FaTWha+GaZCXvBr7iADcYlSeyquD+tHzzH29OHiZZs0HSM0HQ2VM7Z84g88GtDS/DPg90k6pvDAB/LRM+YQrE+nNONp5hLaIhc7VARSw9STjFXOmezbdbaqXIXbKJliRJMCuWXkZfp7dLwox5y5Ymq+HfDtM5HirctjhxYgnE5/wC1BWz8Db5rpQ9d+mn/APE16N9NcAXbBB8xDKpJPSSRS9/QfiLaMtjTM4MRdU/o6QQacfJy/UuWp4MXeLGXR/AzxqrcSB/9I85+tX/Z/wAFYD/WrYOf9ww4Me1NX/hMgC0fDvQPybr7sgcK8Sayr1m7YcpetlGHRwYP+U8Vv58/1Lw6mjOn3ib/AGX8JxGrswe9l8Y61H7J+F+WNbpfMWgFHEQJzmky4+VyQB2BOPWKqbqK1obLlwqCwFqDK/KQTWo1tSespcojH0cPwn4eGVfxehlpIG4hiB6GpT4X8PuAMuq0RBErFwSfoRNBBVkBlhuUHawMicQQRNXtWWuJbAmQgHzxBA7RR/Rqfprbj6G/Y2kIJN+zAMHw3tf/ALCuX4P8OYAjUMQQGndpog9sigi24uRFxuYgSZ6MeBHSg6cObNospVdvJkCAdvIxWo19Wv8AI7MfRs/CdECo8W4ZnhtJ0E9WqD8H0Q/fvk9lOkbP/HS6WdQxuytwxi0VUAP1kM3T6UUaTUcgvtI8wZQ0gZxnFU+Rq48bltx9L/sfRYzq/UeFpSR/9yoHwTTHIOrIIMHwtLn2HiilrmmvMCMA7vJuzP8AmEYoOlt3nsWytzaxDLn5iVJU81r+jVq9y24+j/7AtnKjWkdD+HskH7Xaof8AR7USSovADjfp8/8Axu0BtPqR1uL1MMBPSap4esxtutE5BIafQE0R5Op+1tw9DH/R7V4Hm5zNi4Pb981x/wBH9XiCCe2x+frQ9uqklWZR2QfTmeahvxYPle7gZ3GOvQ8Ux5Wr+hs0/S7/AALXADFpecjf9uDVP2Hr1g7rUf4nYffy1Q/iSSwvXyY4JJHtzFWRNWULM4SP3WaD6YNa/r1Y/wBhs0/SD8I16id+n/8AcP8A/Nd+zdcOb2lHvcb+i1QnUw0uI9DBn0rt92B+YoPUEf1rUeXq/obNP0qzLcICoJEscMhBPc1J8QwjBQBBADloHU4qqgMoU20LLIBcyYPcL296MNqgMCAAPMFSJ/4jNeeZpuOXeC1wxaRwABBIJP0kzV/w+ohQECtwZUseee1QuvQW3QrtLCWLQCVbBmaCPid1H2IoZVIBKsSYGB61mtSeodtuERzIx2INlx1DhjHTP0obN5zsZnXuBAzyJNMsz3MhgVYbhKgc9TOakWYChmCklvOMyekx0+lc5zrtwnvguFLYJiYwNpyPpVjYUQAznAzBOfrApjw0WYusz8FUQ/eRRBa04+c3SRgktG3PAA/vXKdVRhMlNt0oFhsfwlpI9YpuzYEHd4f+zCjcx+f/ABGiCyCCy3dlpAeZLAdaX/BeK8eLdID+I+2FAMYOZFUakZdy7Rht7S2ptaYKzDT7izLNuCBn1M0S1rdLfDB3UWzAAfBbtG3P61YWPh6Jbt3kDwJJuBZzgcCKo+n+GlH22g2wkIc7ZViJBBrcamnXMNxwu2mUM22WTO2SdvaDFQbGwrLIs8mSeR1mqWjctobVpQiSCoLMxAjMnNQLd+9cRJ3liAu0bnJPYCvPlume+GfinLqBkGhtlTdZnYnK28iJ9TRGvMwaxYsnazAwRuj0B6e9M2PgmqZl8e4ti1g7ds3CD13HArdsaHQaa2QAD/nJJyZ5bNZyqPu3s0vCme3n0+Fa7UMzai6ltEhZLAkD0XpWhptB8P07IVHi3JMuWW4T7CdorRvNpVIKqu4x8reYj/LSp33tqN4dvTsd21fmuEHIk8fQVnfL6GnoYYdQubjFtlq2rRhmJBtp080ZJ9q7aLQHisRcY7BPzknoixFT+VaW47CzbthR+4ygKB8oEnPrXWLdxmW/fBL3FIsAEkWk/vWJmXoiKG0ml2C5eukb38qDBCL6T+tDvPNrXXlcldhFkwPlRIJj1J/lTF++trToiEuzlbKSApZjyeKqbaLaNoqoNxHtgBhmRPX2rEzNwaTpBcazZW5G821ujaSwZSMiSKHeRrTbgApPzEcGe4q9u4W02luqADZUI0EGR8porG3cDFhiAR0ifWtMlilrU2gWkgj5rb7XT1Rhn9aSv2tRYRl1Vn8ZpCIDBYuoOm6P1NPIjWSYltpMAEwAeQfT6UQ3G8zqCykxtiYHatRlLGelGbAf4RodQni6LUBJAO26d9o443fMD0gzSN74bq9OwF+0UB+W5aIZPq4r0z2LTE3tOzWnJG9LRQ7wpmGUiMVAvKqsNo4Mo4B3DjcQeldbl5MvFwy7h5UbrbEG4GPQGGBx6VK7XXcfKZOATgjrivRPpvh1+Db/ANVuMIG3aogjJECf1FZOr+F6rTcJ4iYKvaVmczkSRiPWszbxaviZY84kBeub2AeykQSArFmPdicGiMi3rWy61thyQilGMnHlU8UNrSttKkbiAfDEqwIyRLYqpBLE+fy57Qe5FdZzl45348Sslm0kjxXAETuYxM1crZ8oW6TAgyd2T260uxXLN4o9f04qB4QE7gABMPIJ+lE3PcsWJvto8m4sEqdpcg/pJoGnJFtkgSmovsobHlZywIBFEB5jYR6wfocVJeQzG2dqmG6gCOAG/vXSJ4pRE/S5e9zstk8HAH6iq778SDAAOF9D2qguW4K/l4A2gllPf1FVFyNw8PO6SLZMbZ6GnZZmJFDsYkTGflUGfcCqM95jG4sMkbyOO1C8S3vwTzMyQACes0XaWhAySBiRzPYjE1bZgRFrfmbZKKRhRlY980G54wJC2AxxgOoA7nFEaxdB3B1mN0dfbmhXVv2m+V9pHK7TM9wa1jHLc4zEcwraN87mu2Ah5XYSw2jv1qfEO5oL7emQtU8a8M72VjwAh/7VK32z57fI+ZccegrcxPpjhYW9O24HeQZMuYAx2UzVWsW3cnfCjIRFaAYiSSTUWrF8lecngdDxk0U2XBVXdSDGDgETiszM4zxJiMgF09k7oZyWkNJIO3iOB/OrL8Ps7W3m5CAnau0DLASSM596aUW7Sb324LhfMCOIEUZdRYazAIm6dpEZMdvt+tZy1tT6dccLjkt4FqyBIOVkbp8sYgSTRFDzu2LtP8RgRzODUvc3w0psYdchR3b7UAahUDrAIIiW4OZwDWKyy7YmIiT1tDdRAQoLPMbT34qw1Ons3HsLaQMmJCgedgMmO1Zja27+WS0gCIX92GJ4qGdHOOWzLRgE8kc+9Pwz9u0Z1009RrLXnVQoRrY2tEEnEnnmlvx2oZ2sbdpuwoZQoY5BET6UkLb3VkHatsxuKnblunX3p20+pItWraiJkkAgEkRB3U/HjjDpMTl2GVe47eMWlfLvyRK9GmjJYZ/DVAxZYIKDBAxJFael+FXGXdq7ywATbQOIBmfMTIE+la1vSaUoNigLgEiABB4g5PvNYnP6h6tLxZ7nhkabSZU3rqgPuhPDPn6FZY7f+1bVrTLpwdlq2ikKMea5cEfMSSM/WqXLTo1tQ7qoAQ7rqBWA80gbd361IuraO1CbjAfvRuk9WMDiuM5W9+GnGMcChX3XC2oui0yrIKBc8EbmYmO2KobyybWmcXLh8snzhAevEVRl1F9jvFsKwAGySCOYCxP1mpi1YNrbb3ASSd+xUMctOSKzbqsi2Np3XmuXN5DtsAUHqMiKJDE5ujklmKpMGMAigvqQqknZsiTdZtwO7qsdqDevNsUIwYMQU2qJII9+KxKoyRcu3NjODYsw/kAA3CYye1WtmbgctiSAwMEiICwRJj0oWmRiq2zl5l4IO3HBApgm2jFLSBdoAd1gFzzAFFVBK3L6HWWlVp8IQP8AMTuLER9OelHvX0F1ASrhXAYKCzREGVXpnvQrVrddN1iu5iWEAbhnggCl7yDxUJueHuO0hQsMSZmZmaMeZU8dC2L9pbWoVyFXxittGgKVbMwP703p7quLuwhlXy84BxjIpW3b2XtbZtuRuUeW4JUSJyOf1qD41kLcuINs7SyuVJJPOwgfzrpED6PPAJbcQDIMkt9ppe5da0V2fIZ3CDLeo2j+tE3oNhYeVurAcnPNVNwQxQjBO4p3GY96KoW624JZ1bcRgSgUKSOsCfrUbt4K3PKSDLLiKBLacNctqmx5lcIQxPJIBEfSoZdyWrj4VpKrcgwT0LLj9K6Yz7SLtt7ckDywM7A09cksDPfNSLxsnbZ8gZTNtmPQzAA6e9c2ogrbugBWhVAVyPoQPvUPZO19jXAzjJDcD2xPrmukdOdB39PodaNwBt3MbXMbg32is/V/DtdbIFjzJtUSmRjksCd360+GuB1sx4trbua6fI6lQJhYFXW5dRyVg21kvnzMskiRTEOOWljk886Ou1ZcSYO6AAZmO0cUCQwZpG0SS4zz2n/rNelu6bTa63smGIMxAJJ5G0mP+1Y9/Qaqwpt6YI6KSPL5hBES6mT7f9GtREPDq+LU3BIqoEboJWSPMRBobMFGzcXBBO0Dv3muVdR+a11DsXYItiMsSBJPHpXNuYMUXewjNvzAd5ANdIxmHjnTmEjUXURlOwqTMXLas3HQjP60E3hJZW8uyCEgZ7kMalwu0MjgmfMvyuCMz2qGHlMnLL0WRMR1FdIpidyQbjAr4SMdud4Axz1pPXagWlsi1AZZDhT5c9hRjbLRu8zDhifmPYCaG2ns/M6eYZiZEcwRzXbDbE3LN+iX4/VvuIuMZ822c9JmKesa9roCXthIEgkxnnJqiiwCGW3b2gwRBJiu3AlptoVzEJkiecV1z2ZcRix8kmGvuNgG4hsqV+bmcmg+LJPzKeCCsmoBtwu5MDcBsJBEZxUeLbQDc1wA8T2+9c4x/wCC7ONqtq3Qu4MsKfVpiZqGuq3nd2CoCQqrJZhwCSenSurq5zhETw75Tyz9TfuuwgkAyVE4VeI4qy3SbNpgzAKCcEzIMHNdXV7IwjZDzbpM6d7t20yFyPDZmMEgNuPWmFuF2KkW/JcVZ8OWJIkdYrq6vHljG6Xp0YjKrXaw9snxgFtg7m8Iy8Znn0o1nTNcH5DhVBWPEEswMwZ6RXV1cMspiOH0cNPG6a2n+EooV75LRDbQ7MI6nzfypu01tiE09oKina1wkDb+6ISDPWurq81zPb6eOnjjHED23t7zbPncli28cEdBGOvarvtWCrsAD4lyJEoJMATXV1UtKPc8XaAAqsQyuRucyJAycCh/hQu1rwS4wVgiKu1SefMea6urnfJiLDsXrd9A4tN+GeUtgtEuCZPl8w+9NDZtYgeSfN1Jb1murqcu1HSzWmA8j7Nx85yYxGKRVzcvqu94LlUDknnif511dXOGp+j7IEQjBdgU35DFe0iDVDvs23htu0ZjOT1zXV1EzwaTYICOSSWOOIGfY0G/te/p1lhs+ZREMJic9a6urWHYlZmsrq7o843eAuDiWUAetWuxtKFMIctvYkYkRNdXVuF9LI9m4gDBsAwevM1cI5IaWAWV2Su1s8nFdXUT2wXvLdtszggoFMqxMcwDAEVTxJRlZ0eUYsL1suAqrJAUED611dVCGZQyKQ7llUdFiY6A/wB6pgFLilgvymcniTiYrq6t4qU3LSPuIUF+RI4xMZxS+61bhiWlNu8ZgeJ8u39a6urrHbEwqxtXWuAWwSkMRJyh5InFcPEAWxEliCcwDbgwoiDIjma6uqCb1vT6rybBIwQZEkgwCR16zWfd+EuHmywEAEBiAQxIU5Arq6mJmOIctXDHsiW3F7RVC4uANcdZMZyNpGaFqEa0zot5jbV/D8ygEFwTGDxXV1dYfPzwicZkqUUgAeUQdu0kT0g1S5bvKCHIIWAjKciegFdXV0xym6eCO0OASd0NCBiQCr7T0xihE2y20AwIYSY9eldXV3gZREBspc7lBkbgSr7JHsBUWla6fDUywBfzdpA5NdXV2x5c545f/9k=')";
        
    } 
   
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}