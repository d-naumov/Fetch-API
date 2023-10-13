// Задание 1
// По аналогии с классным заданием:

// Создайте новый репозиторий на гитхаб, разместите в нем файл ИМЯ_ФАЙЛА.json на ваш выбор (например, можно про страну или автомобиль и т.д.). Опубликуйте на git pages. Получите ссылку, куда кидать fetch.

// После этого создайте страницу с подключенным js файлом. Получите информацию из вашего json при помощи fetch, отразите ее на странице.

const carImg = document.getElementById("carImg");
const carInfo = document.getElementById("carInfo");
const cars = document.getElementById("cars");


async function getCar() {
  const response = await fetch(
    "https://d-naumov.github.io/homework-api/car.json"
  );
  const car = await response.json();
    console.log(car);
  carImg.src = car.img; // Установка атрибута src для изображения
  const { name, year, thebest } = car;
  console.log(carImg);
  carImg.srс = car.img;
  
  carInfo.textContent = `${name} Bj. ${year} ${
    thebest ? "The Best car" : "Mercedes"
  } `;
}

getCar();
