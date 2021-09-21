const menuPopup = document.querySelector('.menu-popup');
const openPopup = document.querySelector('.header__menu-open-popup');
const menuCross = document.querySelector('.menu-popup__cross');
const menuTravel = document.querySelector('.menu-popup__travel');
const menuPrice = document.querySelector('.menu-popup__price');

const purchasePopup = document.querySelector('.purchase-travel');
const purchaseCross = document.querySelector('.purchase-travel__cross');
const sendingData = document.querySelector('.button-link');
const successPopup = document.querySelector('.success-popup');
const successCross = document.querySelector('.success-popup__cross');
const priceLinkFull = document.querySelector('.price__link');
const priceLinkEconom = document.querySelector('.price__link-econom');
const questionsLink = document.querySelector('.questions-bottom');

const greece = document.querySelector('.countries__item--greece');
const greeceCard = document.querySelector('.country__item--greece')
const albania = document.querySelector('.countries__item--albania');
const albaniaCard = document.querySelector('.country__item--albania');
const macedonia = document.querySelector('.countries__item--macedonia');
const macedoniaCard = document.querySelector('.country__item--macedonia');
const montenegro = document.querySelector('.countries__item--montenegro');
const montenegroCard = document.querySelector('.country__item--montenegro');
const croatia = document.querySelector('.countries__item--croatia');
const croatiaCard = document.querySelector('.country__item--croatia');

const country = document.querySelector('.country');
let activeCard = document.querySelector('.countries__item--active');
let currentCard = document.querySelector('.country__item--active');

const greeceImg = document.querySelector('.travel-way__item--greece');
const albaniaImg = document.querySelector('.travel-way__item--albania');
const macedoniaImg = document.querySelector('.travel-way__item--macedonia');
const montenegroImg = document.querySelector('.travel-way__item--montenegro');
const croatiaImg = document.querySelector('.travel-way__item--croatia');

const linkGreece = document.querySelector('.country__link--greece');
const linkAlbania = document.querySelector('.country__link--albania');
const linkMacedonia = document.querySelector('.country__link--macedonia');
const linkMontenegro = document.querySelector('.country__link--montenegro');
const linkCroatia = document.querySelector('.country__link--croatia');

openPopup.addEventListener('click', () => {
  menuPopup.classList.remove('visually-hidden');
  menuCross.addEventListener('click', () => {
    menuPopup.classList.add('visually-hidden');
  });
  menuTravel.addEventListener('click', () => {
    menuPopup.classList.add('visually-hidden');
  });
  menuPrice.addEventListener('click', () => {
    menuPopup.classList.add('visually-hidden');
  });
});

priceLinkFull.addEventListener('click', () => {
  purchasePopup.classList.remove('visually-hidden');
  purchaseCross.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
  });
  sendingData.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
    successPopup.classList.remove('visually-hidden');
    successCross.addEventListener('click', () => {
      successPopup.classList.add('visually-hidden');
    });
  });
});

priceLinkEconom.addEventListener('click', () => {
  purchasePopup.classList.remove('visually-hidden');
  purchaseCross.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
  });
  sendingData.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
    successPopup.classList.remove('visually-hidden');
    successCross.addEventListener('click', () => {
      successPopup.classList.add('visually-hidden');
    });
  });
});

questionsLink.addEventListener('click', () => {
  successPopup.classList.remove('visually-hidden');
  successCross.addEventListener('click', () => {
    successPopup.classList.add('visually-hidden');
  });
});

greeceImg.addEventListener('click', () => {
  greece.click();
});

albaniaImg.addEventListener('click', () => {
  albania.click();
});

macedoniaImg.addEventListener('click', () => {
  macedonia.click();
});

montenegroImg.addEventListener('click', () => {
  montenegro.click();
});

croatiaImg.addEventListener('click', () => {
  croatia.click();
});

greece.addEventListener('click', () => {
  activeCard.classList.remove('countries__item--active');
  currentCard.classList.add('visually-hidden');
  currentCard.classList.remove('country__item--active');
  greeceCard.classList.remove('visually-hidden');
  greeceCard.classList.add('country__item--active');
  greece.classList.add('countries__item--active');
  activeCard = greece;
  currentCard = greeceCard;

});

albania.addEventListener('click', () => {
  activeCard.classList.remove('countries__item--active');
  currentCard.classList.add('visually-hidden');
  currentCard.classList.remove('country__item--active');
  albaniaCard.classList.remove('visually-hidden');
  albaniaCard.classList.add('country__item--active');
  albania.classList.add('countries__item--active');
  activeCard = albania;
  currentCard = albaniaCard;
  purchaseLink.classList.remove('country__link--active');
  linkAlbania.classList.add('country__link--active');
  purchaseLink = linkAlbania;
});

macedonia.addEventListener('click', () => {
  activeCard.classList.remove('countries__item--active');
  currentCard.classList.add('visually-hidden');
  currentCard.classList.remove('country__item--active');
  macedoniaCard.classList.remove('visually-hidden');
  macedoniaCard.classList.add('country__item--active');
  macedonia.classList.add('countries__item--active');
  activeCard = macedonia;
  currentCard = macedoniaCard;
});

montenegro.addEventListener('click', () => {
  activeCard.classList.remove('countries__item--active');
  currentCard.classList.add('visually-hidden');
  currentCard.classList.remove('country__item--active');
  montenegroCard.classList.remove('visually-hidden');
  montenegroCard.classList.add('country__item--active');
  montenegro.classList.add('countries__item--active');
  activeCard = montenegro;
  currentCard = montenegroCard;
});

croatia.addEventListener('click', () => {
  activeCard.classList.remove('countries__item--active');
  currentCard.classList.add('visually-hidden');
  currentCard.classList.remove('country__item--active');
  croatiaCard.classList.remove('visually-hidden');
  croatiaCard.classList.add('country__item--active');
  croatia.classList.add('countries__item--active');
  activeCard = croatia;
  currentCard = croatiaCard;
});

linkGreece.addEventListener('click', () => {
  purchasePopup.classList.remove('visually-hidden');
  purchaseCross.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
  });
  sendingData.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
    successPopup.classList.remove('visually-hidden');
    successCross.addEventListener('click', () => {
      successPopup.classList.add('visually-hidden');
    });
  });
});

linkAlbania.addEventListener('click', () => {
  purchasePopup.classList.remove('visually-hidden');
  purchaseCross.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
  });
  sendingData.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
    successPopup.classList.remove('visually-hidden');
    successCross.addEventListener('click', () => {
      successPopup.classList.add('visually-hidden');
    });
  });
});

linkMacedonia.addEventListener('click', () => {
  purchasePopup.classList.remove('visually-hidden');
  purchaseCross.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
  });
  sendingData.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
    successPopup.classList.remove('visually-hidden');
    successCross.addEventListener('click', () => {
      successPopup.classList.add('visually-hidden');
    });
  });
});

linkMontenegro.addEventListener('click', () => {
  purchasePopup.classList.remove('visually-hidden');
  purchaseCross.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
  });
  sendingData.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
    successPopup.classList.remove('visually-hidden');
    successCross.addEventListener('click', () => {
      successPopup.classList.add('visually-hidden');
    });
  });
});

linkCroatia.addEventListener('click', () => {
  purchasePopup.classList.remove('visually-hidden');
  purchaseCross.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
  });
  sendingData.addEventListener('click', () => {
    purchasePopup.classList.add('visually-hidden');
    successPopup.classList.remove('visually-hidden');
    successCross.addEventListener('click', () => {
      successPopup.classList.add('visually-hidden');
    });
  });
});
