// გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
var x = 87;
var y = 65;
console.log(x + y);

//გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks და დაბეჭდეთ
var student = {
    firstName: "Zura",
    lastName: "Natroshvili",
    age: 30,
    email: "zuranatroshvili1@gmail.com",
    marks: "asd"
};
console.log(student.firstName);

//გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.
var m = 45;
var n = 23;
if (m > n) {
    console.log(n + m)
} else {
    console.log(n)
};

//გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )

var studentName = "Zura";
console.log("Rise and Shine,", studentName);

//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)

var bonus = 2500;
var salary = 4500;
if (salary >= 2000) {
    bonus = 0;
} else {
    bonus = salary*0.1;
}
console.log (bonus)

//გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.

var a = 23;
var b = a/2;
var c = a+b;
console.log(c);

//გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.

var phones = [
    "Iphone",
    "Samsung",
    "Pixel",
    "Huawei",
    "Xiaomi"
];
console.log(phones);