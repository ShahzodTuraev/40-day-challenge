// 1652. Defuse the Bomb
// Masala shartiga ko'ra elementlari sonlardan iborat bo'lgan Array va kalit son (k) berilgan.
// Agar kalit son noldan katta bo'lsa, array elementi o'zidan keyingi k ta elementlarning yig'indisiga
// teng bo'ladi. Agar elementdan keyin k ta element bo'lmasa yana 0-indeksdan boshlab hisoblanadi.
// Masalan arr = [2, 3, 5, 3, 7] va k = 3 shunda javob: [ 3+5+3, 5+3+7, 3+7+2, 7+2+3, 2+3+5 ]
// Agar kalit son nolga teng bo'lsa, javob array elementlari hammasi noldan iborat bo'ladi.
// Agar kalit son noldan kichik bo'lsa birinchi shartning teskarisi bo'ladi. Yani:
// arr = [2, 3, 5, 3, 7] va k = -3 bo'lsa javob: [5+3+7, 3+7+2, 7+2+3, 2+3+5, 3+5+3]
// Masala shartlarini tushunib oldik. Endi shartlar bo'yicha mantiq yozishni boshlaymiz:

function decrypt(code: number[], k: number): number[] {
  // default berilgan masala sharti
  const doubleCode: number[] = code.concat(code); // array elementlari yana ishlatilgani uchun ularni bir biriga qo'shib yozib oldim;
  // [1,2,3,4]=>[1,2,3,4,1,2,3,4] endi 3-indeksli oxirgi elementdan keyin ham element bor va uni hisoblasa bo'ladi.
  if (k == 0) {
    //kalit k=0 bo'lganda arrayni shunchaki 0 bilan to'ldiramiz.
    return code.fill(0);
  }
  if (k > 0) {
    // kalit k noldan katta bo'lgandagi holatda:
    return code.map((ele, index) => {
      return doubleCode
        .slice(index + 1, k + index + 1) // elementdan bitta keyingi va k ta keyingi element orasidagi
        .reduce((a: any, b: any) => a + b, 0); // elementlarni slice orqali kesib olib yig'indisini qo'shamiz
    }); // har bir element uchun map orqali takrorlab chiqamiz
  }
  if (k < 0) {
    return code.map((ele, index) => {
      return doubleCode
        .slice(code.length + k + index, code.length + index)
        .reduce((a: any, b: any) => a + b, 0);
    }); // k noldan kichik bo'lganda yuqoridagi holatning teskarisini ya'ni elementdan oldingi bitta element
    // va k ta uzoqlikdagi elementni yig'indisini olib takrorlaymiz.
  }
  return []; //k ning boshqa holatlari uchun bo'sh array qaytaramiz.
}
