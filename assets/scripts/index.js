const directors =  
[ 
  { 
    name: 'Стивен Спилберг', 
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр', 
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0', 
    top_rated_film: 'Список Шиндлера' 
  }, 
  { 
    name: 'Кристофер Нолан', 
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор', 
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu', 
    top_rated_film: 'Начало' 
  }, 
  { 
    name: 'Мартин МакДона', 
    career: 'Сценарист, Режиссёр, Продюсер', 
    films: 'https://www.film.ru/person/martin-makdonah', 
    top_rated_film: 'Три билборда на границе Эббинга, Миссури' 
  }, 
  { 
    name: 'Алексей Балабанов', 
    career: 'Режиссёр, Сценарист, Актёр, Продюсер', 
    films: 'https://www.film.ru/person/aleksey-balabanov', 
    top_rated_film: 'Брат' 
  }, 
  { 
    name: 'Питер Фаррелли', 
    career: 'Продюсер, Режиссёр, Сценарист, Актёр', 
    films: 'https://www.film.ru/person/piter-farrelli', 
    top_rated_film: 'Зелёная книга' 
  }, 
  { 
    name: 'Юрий Быков', 
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер', 
    films: 'https://www.film.ru/person/yuriy-bykov', 
    top_rated_film: 'Дурак' 
  }, 
  { 
    name: 'Жан-Марк Валле', 
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист', 
    films: 'https://www.film.ru/person/zhan-mark-valle', 
    top_rated_film: 'Далласский клуб покупателей' 
  }, 
]; 
 
const nameDirector = directors.map (item => item.name) 
const career = directors.map (item => item.career) 
const top_rated_film = directors.map (item => item.top_rated_film) 
const films = directors.map (item => item.films) 
 
const title = document.querySelector('.title'); 
const newElement1 = document.createElement('div') 

const title_film = document.querySelector('.title_film'); 
const newElement2 = document.createElement('div') 

title.after (newElement1); 
title_film.after (newElement2); 

newElement1.innerHTML = `
    <h4> ${"1. " + nameDirector[0] } </h4>
    <p> ${career[0] } </p>
    <a href = ${films[0] }>Фильмография</a>

    <h4> ${"2. " + nameDirector[1] } </h4>
    <p> ${career[1] } </p>
    <a href = ${films[1] }>Фильмография</a>

    <h4> ${"3. " + nameDirector[2] } </h4>
    <p> ${career[2] } </p>
    <a href = ${films[2] }>Фильмография</a>

    <h4> ${"4. " + nameDirector[3] } </h4>
    <p> ${career[3] } </p>
    <a href = ${films[3] }>Фильмография</a>

    <h4> ${"5. " + nameDirector[4] } </h4>
    <p> ${career[4] } </p>
    <a href = ${films[4] }>Фильмография</a>

    <h4> ${"6. " + nameDirector[5] } </h4>
    <p> ${career[5] } </p>
    <a href = ${films[5] }>Фильмография</a>

    <h4> ${"7. " + nameDirector[6] } </h4>
    <p> ${career[6] } </p>
    <a href = ${films[6] }>Фильмография</a>
    `;

newElement2.innerHTML = `
  <p> ${top_rated_film } </p>
  `;