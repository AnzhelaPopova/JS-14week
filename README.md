1. Что называется массивом? 
объект с упорядоченным списком элементов 
 
2. С какого порядкового номера начинаются массивы? 
0 
 
3. Сколько значений может иметь массив? 
множество 
 
4. Как можно получить значение текстового поля из данной формы? (Форма одна) 
     
    
    <form action="start.php" method="post" name="fld"> 
     <input type="text" name="field" value="Text field"> 
     <input type="submit" value="Старт" name="btn"> 
    </form> 
     
   const messages = array( document.getElementsByName(field)); 
   console.log (messages[0]) 
     
5. Какой результат работы данного скрипта? 
     
     
    let mas = new Array(2); 
    mas[3] = 5; 
    console.log(mas[3]); 
 
    5 
     
     
6. Какой результат работы данного скрипта? 
     
     
    let mas = new Array(2); 
    mas[3] = 5; 
    console.log(mas3); 
 
    ошибка, mas3 не задано 
     
     
7. Что делает строка let mas = new Array()? 
создаёт новый пустой массив 
 
8. Может ли массив состоять из элементов разных типов? 
может 
 
9. Укажите длину массива после исполнения следующего кода: 
     
    jsx 
    let a = new Array(2); 
    a[1] = null; 
     
    2 
     
10. Что выведет консоль? 
     
    jsx 
    const students = [“Lena", “Olya", "Ylia", "Roma" ,  "Vova" ]; 
    console.log(students[3]); 
     
    "Roma"  
 
11. Что выведет третья строка? 
1. const fruits = [ "Груша", "Яблоко", "Лимон", "Ананас",]; 
 
2. console.log(fruits.shift());  
 
3. console.log(fruits); 
 
"Яблоко", "Лимон", "Ананас"