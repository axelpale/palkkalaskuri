
// Säädöksen alkuaika -> TyEL prosenttiosuus bruttopalkasta.
// Tämä osuus sisältää sekä työnantajan
// että työntekijän prosenttiosuuden.
const tyelProsentti = {
  '2020-01-01': 25.3,
  '2020-05-01': 22.7,
  '2021-01-01': 24.8
}

// Säädöksen alkuaika -> työntekijän TyEL prosenttiosuus.
// Tämä osuus vähennetään bruttopalkasta.
const tyelTyontekijanProsentti = {
  '2020-01-01': 7.15
}

// Säädöksen alkuaika -> lakisääteisen henkivakuutuksen prosenttiosuus.
// Lakisääteisen tapaturmavakuutuksen ja ryhmähenkivakuutuksen prosenttiosuus
// bruttopalkasta.
const tapaturmavakuutusProsentti = {
  '2020-01-01': 0.07
}

// Säädöksen alkuaika -> Työntekijän prosenttiosuus työttömyysvakuutuksesta.
// Työntekijän bruttopalkasta vähennettävä prosenttiosuus
// lakisääteiseen työttömyysvakuutukseen.
const tyvaTyontekijanProsentti = {
  '2020-01-01': 1.25
}

// Säädöksen alkuaika -> Työnantajan prosenttiosuus työttömyysvakuutuksesta.
// Työnantajan maksama, bruttopalkasta määräytyvä prosenttiosuus
// lakisääteistä työttömyysvakuutusta varten.
const tyvaTyonantajanProsentti = {
  '2020-01-01': 0.45
}

// Säädöksen alkuaika -> Lakisääteisen sairausvakuutuksen prosenttiosuus.
// Työnantajan lakisääteisen sairausvakuutuksen (alias sosiaaliturvamaksun)
// prosenttiosuus bruttopalkasta.
const savaProsentti = {
  '2020-01-01': 1.34
}

// Apufunktio
const haeAjanmukainenArvo = (saados, pvm) => {
  // Hakee annetusta säädöksestä annetun päivämäärän mukaisen arvon.
  //
  // Parametrit:
  //   saados
  //     Kuvaus säädöksen alkupäivästä tuolloin voimassa olevaan arvoon.
  //   pvm
  //     Päivämäärä merkkijonona muodossa VVVV-KK-PP (YYYY-MM-DD)
  //
  // Palauttaa:
  //   arvon säädöksestä
  //
  // Heittää virheen, jos:
  //   pvm on vanhempi kuin säädöksen aikaisin hetki
  //
  const valittuArvo = null
  const pieninEroMs = Infinity
  const pvmMs = Date.parse(pvm)

  Object.keys(saados).forEach(key => {
    const alkuMs = Date.parse(key)
    if (alkuMs < pvmMs) {
      if (pvmMs - alkuMs < pieninEroMs) {
        pieninEroMs = pvmMs - alkuMs
        valittuArvo = saados[key]
      }
    }
  })

  if (valittuArvo === null) {
    throw new Error('Annetulle päivämäärälle ei löytynyt säädöstä.')
  }

  return valittuArvo
}

module.exports = (param) => {
  // Parametrit:
  //   param
  //     bruttopalkka
  //       numero. Euromääräinen palkka ennen ennakonpidätystä ja muita
  //       palkasta poistettavia osuuksia.
  //     pvm
  //       Päivämäärä merkkijonona muodossa 'YYYY-MM-DD'.
  //     veroprosentti
  //       Numero. Työntekijän veroprosentti, jonka perusteella
  //       bruttopalkasta tehdään ennakonpidätys.
  //     tuloraja (vapaaehtoinen parametri)
  //       Numero. Euromääräinen raja, jonka ylimenevien ansioiden
  //       ennakonpidätykseen käytetään lisäveroprosenttia.
  //       Mikäli tulorajaa ei anneta, käytetään vain annettua veroprosenttia.
  //     lisaveroprosentti (vapaaehtoinen parametri)
  //       Numero. Työntekijän lisäveroprosentti, jolla ennakonpidätys
  //       lasketaan palkasta tulorajan ylittävältä osuudelta.
  //       Mikäli lisäveroprosenttia ei anneta, käytetään vain annettua
  //       veroprosenttia.
  //     ansiotEnnenPalkkaa (vapaaehtoinen parametri)
  //       Numero. Euromääräiset ansiot ennen palkkaa, jotta tuloraja
  //       ja lisäveroprosentti osataan kytkeä päälle.
  //       Mikäli ansioita ei anneta, käytetään vain annettua veroprosenttia.
  //
  // Palauttaa:
  //   nettopalkka
  //
  const tyel =

  return {
    ennakonpidatys
    tyontekijanTyEL
    tyontekijanTyottomyysvakuutusmaksu
    nettopalkka
    tyonantajanTyEL
    tyonantajanTyottomyysvakuutusmaksu
    tyonantajanSosiaaliturvamaksu
    tapaturmaRyhmahenkivakuutus
    tyonantajanSivukulut
    tyonantajanPalkkakulu
  }
}
