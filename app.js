// let a = prompt('a tomani kiriting')
// let b = prompt ('b tomoni kiriting')
//  let s = a*b;
//  let p = 2 *(a + b) 
//  console.log(`yuza S ${s}`)
//  console.log(`perimetir ${p}`)
//  alert(`yuzasi ${s} perimetir ${p}` )

// let d = prompt('aylanani diametrini D kiriting')
// const pi = 3.14
// let r = d / 2
// let l = pi * d 
// let s = pi * r **2
// console.log(`aylanni uzunligi ${l}`)
// console.log(`aylanni yuzasi ${s}`)
// alert(`aylanni uzunligi ${l} aylanni yuzasi ${s}`)


// let a = +prompt('Kubning yon tomoni a kiriting')
// let v = a**3
// let s = 6* a**2
// alert(`kubni hajmi ${v} kubni to'la sirti ${s}`)

//4  Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti Sni aniqlansin.
// let a = +prompt('ani kiriting')
// let b = +prompt('bni kiriting')
// let c = +prompt('cni kiriting')
// let v = a * b * c
// let s = 2* (a*b+b*c+a*c)
// alert(`kubni hajmi ${v} kubni tola sirti ${s}`)

// 5. Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.
//  let a = prompt('a sonni kiriting')
//  let b = prompt('b sonnini kiriting')
//  let m = (a+b) / 2
//  alert(`o'rta arifmetigi ${m}`)

// 6. To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.
//  let a = prompt('a sonni kiriting')
//  let b = prompt('b sonnini kiriting') 

//  let c = Math.sqrt(a**2 + b**2)
//  let p = a+b+c 
// alert(`gipatenuzasi ${c} perimetri ${p}`)

// 7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
// let r1 = +prompt('r1ni kiriting')
// let r2 = +prompt(' r2 ni kiriting. r2 r1 dan kichik blsin')
// const pi = 3.14

// let s1 = pi * r1
// let s2 = pi * r2
// let s = pi * (r1**2-r2**2)
// alert(`birinchi aylanani yuzasi ${s1}`)
// alert(`ikkinchi aylanani yuzasi ${s2}`)
// alert(`ikkita aylanai yuzasini ayirmasi ${s}`)

// 8 Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.

// let l = +prompt('aylanani uzunligini kiriting')
// const pi = 3.14
// let r = l / (2*pi)
// let s = pi * r**2
// alert(`yuzasi ${s} aylanani radisi ${r}`)

// let a =  prompt('a sonni kiriting')
// let a3 = a**2
// let a6 = a**6
// let a9 = a**9
// let a15 = a**15
// alert(`ani kvadrati ${a3} oltinchi darajasi ${a6} to'qizinchi darajasi ${a9} o'nbeshinchi darajasi ${a15}`)

// let son = 325
// let birinchiSon = son % 10
// let ikkinchiSon = ((son %100) - birinchiSon) / 10
// let s = (son - (son %100)) /100
// console.log(birinchiSon, ikkinchiSon ,s)

// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// let a = prompt('soni kiriting')
// if ( a % 2 ===0){
//     console.log('juft')
// } else{
//     console.log("toq")
// }
    
    
// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:
// "A >= 0 yoki B <-2"
// let a = 8
// let b = -6
// if ( a >= 0 || b < -2){
//     console.log('true')
// } else {
//     console.log('false')
// }

// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = 7
// let b= 3
// if ( a % 2 !==0  && b % 2 !==0){
//     console.log('true')
// } else {
//     console.log('false')
// }
// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// let  a = 7
// let b = 6
// if (a % 2 !==0 || b % 2 ===0){
//     console.log('bitasi toq ')
// } else{
//     console.log('hammasi toq')
// }

// Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin. 
// Input: 123
// Output: 213
// let son = +prompt('uch xonali soni kiriting')
// let birinchisi = Math.floor(son /100)
// let ikkinchisi = son % 10
// let uchunchi = son %100
// let s = Math.floor(uchunchi/10)
// alert(`${s}${birinchisi }${ikkinchisi}`)

// Integer7. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin.
// let sukun = +prompt('sekundni kiriting')
// let sek = `${sukun / 60 }`
// alert(`kun boshidan ber  ${sek} sekund o'tdi`)

// Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.
// let sukun = +prompt('sekundni kiriting')
// let sek = `${sukun / 60 /60}`
// alert(`kun boshidan ber  ${sek} saot o'tdi`)

// Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.
// let sukun = +prompt('sekundni kiriting')
// let sek = `${sukun / 60 }`
// alert(` kun boshidan beri ${sek} imut o'tdi ${sukun} sekund o'tdi` )

// Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin

// let sukun = +prompt('sekundni kiriting')
// let sek = `${sukun / 60 }`
// let soat = Math.floor((sukun / 60)/60)
// alert(`kun boshidan ber  ${sek} sekund o'tdi. Kun boshidan beri ${soat} soat o'tdi`)

// Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin. 
// Input: 123
// Output: 213



// let son = +prompt('uch xonali soni kiriting')
// let birinchisi = Math.floor(son /100)
// let ikkinchisi = son % 10
// let uchunchi = son %100
// let s = Math.floor(uchunchi/10)
// alert(`${s} ${birinchisi} ${ikkinchisi}`)


// Integer5. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// Input: 123
// Output: 132

let son = +prompt('uch xonali soni kiriting')
let birinchisi = Math.floor(son /100)
let ikkinchisi = son % 10
let uchunchi = son %100
let s = Math.floor(uchunchi/10)
alert(` ${birinchisi} ${ikkinchisi} ${s}`)






