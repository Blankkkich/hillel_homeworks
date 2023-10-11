

let km = Number(prompt("Введіть відстань в кілометрах"));
let ft = (Number(prompt("Введіть відстань в футах")));
let ftConverted = (ft * 0.305)/1000

if (km < ftConverted) {
    console.log(km + " " + "km is smaller");
} else {
    console.log(ft  + " " + "ft is smaller");
}
