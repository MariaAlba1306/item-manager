import React from "react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { expect, jest, test } from "@jest/globals";
import Home from "./page";

const getTitlesfromCards = (items) => {
  const resultTitleMap = [];

  items.forEach((item) => {
    resultTitleMap.push(item.querySelector("h1")?.textContent || "");
  });

  return resultTitleMap;
};

const findItems = async () => screen.findAllByTestId(/item-element/i);

beforeEach(async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => ({
        items: [
          {
            title: "iPhone 6S Oro",
            description:
              "Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.",
            price: "740",
            email: "iphonemail@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png",
          },
          {
            title: "Polaroid 635",
            description:
              "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
            price: "50",
            email: "cameramail@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png",
          },
          {
            title: "Bolso piel marca Hoss",
            description:
              "Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.",
            price: "250",
            email: "bagmail@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/bag.png",
          },
          {
            title: "Reloj de Daniel Wellington",
            description:
              "Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ",
            price: "100",
            email: "watchmail@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/watch.png",
          },
          {
            title: "Coche antiguo americano",
            description:
              "Coche antiguo americano de color marrón. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas",
            price: "210000",
            email: "carmail@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/car.png",
          },
          {
            title: "Barbacoa",
            description:
              "Barbacoa en buen estado. La he usado pocas veces y está casi nueva. Ideal para fiestas y celebraciones",
            price: "120",
            email: "barbecue@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png",
          },
          {
            title: "Sofa de piel auténtica",
            description:
              "Vendo sofá de piel negro. Tiene signos evidentes de uso, de ahí el precio. Es muy cómodo y bonito",
            price: "75",
            email: "sofa@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/sofa.png",
          },
          {
            title: "Vespa restaurada",
            description:
              "Está restaurada y muy cuidada, con piezas originales y repintada una vez de color rojo carmín. Solo acepto ofertas serias",
            price: "1990",
            email: "vespa@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/vespa.png",
          },
          {
            title: "Batidora",
            description:
              "Está completamente nueva (no la he sacado de la caja). Me la regalaron pero no la quiero",
            price: "90",
            email: "mixer@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mixer.png",
          },
          {
            title: "Mudanzas",
            description:
              "Está completamente nueva (no la he sacado de la caja). Me la regalaron pero no la quiero",
            price: "90",
            email: "moves@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/moves.png",
          },
          {
            title: "Lavadora",
            description:
              "Vendo lavadora comprada hace 1 año. Me cambio de piso y me urge venderla",
            price: "250",
            email: "washer@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/washer.png",
          },
          {
            title: "TV de 43 pulgadas",
            description:
              "Televisor de 43 pulgadas. Funciona perfectamente. No tengo la base. Precio negociable",
            price: "400",
            email: "tv@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/tv.png",
          },
          {
            title: "Piso en Clot",
            description:
              "60m2, en pleno mercado del Clot. Piso muy acogedor, reformado. Ideal para parejas",
            price: "288000",
            email: "flat@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/flat.png",
          },
          {
            title: "Tocadiscos vintage",
            description:
              "Muy bien cuidado Regalo los discos de LP que se ve en las fotos",
            price: "325",
            email: "turntable@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/turntable.png",
          },
          {
            title: "Nevera verde",
            description: "Pequeñita, con un verde Chevrolet, muy de los 60!",
            price: "125",
            email: "fridge@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/fridge.png",
          },
          {
            title: "Cámara réflex",
            description:
              "La vendo porque no la uso. No tengo ningún accesorio como la bolsa ni objetivos.",
            price: "240",
            email: "analogue@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/analogue.jpg",
          },
          {
            title: "Clases de piano",
            description:
              "Doy clases de piano a particulares. Todas las edades. Llevo más de 20 años tocando el piano.",
            price: "5",
            email: "piano@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/piano.jpg",
          },
          {
            title: "Material de oficina",
            description:
              "Vendo mucho material de oficina, como bolígrafos, lápices, post-its, etc. Preguntad para más info",
            price: "12",
            email: "pen@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/pen.jpg",
          },
          {
            title: "Macbook 13 pulgadas",
            description:
              "Vendo Macbook porque me han regalado el nuevo. Este está usado pero en buen estado",
            price: "600",
            email: "mac@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mac.jpg",
          },
          {
            title: "Cascos",
            description:
              "Cascos usados. No son muy buenos, pero son bastante bonitos. Precio negociable",
            price: "20",
            email: "headphones@wallapop.com",
            image:
              "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/headphones.jpg",
          },
        ],
        errors: [],
      }),
      status: 200,
    })
  );

  await act(async () => {
    await render(<Home />);
  });
});

afterEach(() => {
  cleanup();
});

describe("Favorites modal", () => {
  test("when user enters in the app, the modal is hidden", () => {
    const favoritesModal = screen.queryByTestId("favorites-modal");

    expect(favoritesModal).toBeNull();
  });
  test("should open the modal when clicking on the 'Favorites' button", async () => {
    const favoritesButton = screen.getByTestId("favorites-button-modal");

    fireEvent.click(favoritesButton);

    const favoritesModal = await screen.queryByTestId("favorites-modal");

    expect(favoritesModal).not.toBeNull();
  });
  test("should close the modal when clicking in X", async () => {
    const favoritesButton = screen.getByTestId("favorites-button-modal");

    fireEvent.click(favoritesButton);

    const favoritesModal = await screen.queryByTestId("favorites-modal");

    expect(favoritesModal).not.toBeNull();

    const closeButton = await screen.queryByTestId("modal-close");

    fireEvent.click(closeButton);

    const modalAfterClose = screen.queryByTestId("favorites-modal");

    expect(modalAfterClose).toBeNull();

  });
});

describe("Search & list ", () => {
  test("Inserting one word having results", async () => {
    const input = await screen.getByTestId(/search-home/i);

    fireEvent.change(input, { target: { value: "vespa" } });

    const items = await findItems();
    const expectedTitleOrder = ["Vespa restaurada"];
    const result = getTitlesfromCards(items);

    expect(result).toEqual(expectedTitleOrder);

    expect(result).toEqual(expectedTitleOrder);
  });

  test("Inserting a word with no results", async () => {
    const input = await screen.getByTestId(/search-home/i);

    fireEvent.change(input, { target: { value: "asdfghjklñ" } });

    const noResults = screen.queryAllByText("No results. Try another search.");

    expect(noResults).not.toBeNull();
  });
});
describe("Sort", () => {
  test("clicking in sort by title and changing the values to desc", async () => {
    const selectOne = screen.getByTestId("select");
    fireEvent.change(selectOne, {
      target: { value: "price" },
    });

    const order = await screen.findByTestId("icon-sort");

    let items = await findItems();
    let expectedTitles = [
      "Clases de piano",
      "Material de oficina",
      "Cascos",
      "Polaroid 635",
      "Sofa de piel auténtica",
    ];
    let resultTitleMap = getTitlesfromCards(items);
    expect(resultTitleMap).toEqual(expectedTitles);
  });
});

describe("Favorites", () => {
  test("Favorite 1 item", async () => {
    const items = await findItems();
    const item = items[0];
    const favButton = item.querySelector(".ItemCard__image__favorite__space");

    fireEvent.click(favButton);

    const favoritesButton = screen.getByTestId("favorites-button-modal");

    fireEvent.click(favoritesButton);
    const modal = await screen.findByTestId(/favorites-modal/i);
    const itemsInModal = modal.querySelectorAll(
      "[data-testid^='item-element']"
    );

    expect(itemsInModal.length).toBeGreaterThan(0);

    const itemTitle = itemsInModal[0].querySelector("h1")?.textContent;
    const expectedFirstItemFavTitle = "iPhone 6S Oro";

    expect(itemTitle).toBe(expectedFirstItemFavTitle);
  });

  test("Favorite 2 items", async () => {
    const items = await findItems();
    const item1 = items[0];
    const item2 = items[1];

    const favButtonItem1 = item1.querySelector(
      ".ItemCard__image__favorite__space"
    );

    const favButtonItem2 = item2.querySelector(
      ".ItemCard__image__favorite__space"
    );
    fireEvent.click(favButtonItem1);

    fireEvent.click(favButtonItem2);

    const favoritesButton = screen.getByTestId("favorites-button-modal");

    fireEvent.click(favoritesButton);
    const modal = await screen.findByTestId(/favorites-modal/i);

    const itemsInModal = modal.querySelectorAll(
      "[data-testid^='item-element']"
    );

    expect(itemsInModal.length).toBeGreaterThan(1);

    const itemTitle1 = itemsInModal[0].querySelector("h1")?.textContent;
    const itemTitle2 = itemsInModal[1].querySelector("h1")?.textContent;

    const expectedFirstItemFavTitle1 = "iPhone 6S Oro";
    const expectedFirstItemFavTitle2 = "Polaroid 635";

    expect(itemTitle1).toBe(expectedFirstItemFavTitle1);
    expect(itemTitle2).toBe(expectedFirstItemFavTitle2);
  });
  test("Favorite 1 item and unfavorite it", async () => {
    const itemsBeforeFavorite = await findItems();

    const item = itemsBeforeFavorite[0];

    const favButton = item.querySelector(".ItemCard__image__favorite__space");
    fireEvent.click(favButton);

    const favoritesButton = screen.getByTestId("favorites-button-modal");
    fireEvent.click(favoritesButton);

    const modal = await screen.findByTestId(/favorites-modal/i);
    const itemsInModal = modal.querySelectorAll(
      "[data-testid^='item-element']"
    );

    expect(itemsInModal.length).toBeGreaterThan(0);

    const itemTitle = itemsInModal[0].querySelector("h1")?.textContent;
    const expectedFirstItemFavTitle = "iPhone 6S Oro";

    expect(itemTitle).toBe(expectedFirstItemFavTitle);

    fireEvent.click(favButton);

    const itemsInModalAfterUnfav = modal.querySelectorAll(
      "[data-testid^='item-element']"
    );
    const noResults = modal.querySelectorAll("[data-testid^='no-results']");

    expect(itemsInModalAfterUnfav.length).toBe(0);
    expect(noResults).not.toBeNull();
  });

  test("Favorite 2 items and unfavorite 1", async () => {
    const itemsBeforeFavorite = await findItems();

    const item1 = itemsBeforeFavorite[0];
    const item2 = itemsBeforeFavorite[1];

    const favButton1 = item1.querySelector(".ItemCard__image__favorite__space");
    const favButton2 = item2.querySelector(".ItemCard__image__favorite__space");

    fireEvent.click(favButton1);
    fireEvent.click(favButton2);

    const favoritesButton = screen.getByTestId("favorites-button-modal");
    fireEvent.click(favoritesButton);

    const modal = await screen.findByTestId(/favorites-modal/i);
    const itemsInModal = modal.querySelectorAll(
      "[data-testid^='item-element']"
    );

    expect(itemsInModal.length).toBe(2);

    fireEvent.click(favButton1);

    const itemsInModalAfterUnfav = modal.querySelectorAll(
      "[data-testid^='item-element']"
    );

    expect(itemsInModalAfterUnfav.length).toBe(1);
  });
});
describe("Pagination", () => {
  test("clicking in pagination and watching the next 5 items", async () => {
    let items = await findItems();
    let expectedTitles = [
      "iPhone 6S Oro",
      "Polaroid 635",
      "Bolso piel marca Hoss",
      "Reloj de Daniel Wellington",
      "Coche antiguo americano",
    ];
    let resultTitleMap = getTitlesfromCards(items);
    expect(resultTitleMap).toEqual(expectedTitles);

    const pagination = await screen.findByTestId("pagination-nex");
    fireEvent.click(pagination);
    let expectedTitlesAfterClicking = [
      "Barbacoa",
      "Sofa de piel auténtica",
      "Vespa restaurada",
      "Batidora",
      "Mudanzas",
    ];
    let resultTitleMapAfterClicking = getTitlesfromCards(items);
    expect(resultTitleMapAfterClicking).toEqual(expectedTitlesAfterClicking);
  });
  test("clicking in pagination,watching the next 5 and going back to initialresult", async () => {
    let items = await findItems();
    let expectedTitles = [
      "iPhone 6S Oro",
      "Polaroid 635",
      "Bolso piel marca Hoss",
      "Reloj de Daniel Wellington",
      "Coche antiguo americano",
    ];
    let resultTitleMap = getTitlesfromCards(items);
    expect(resultTitleMap).toEqual(expectedTitles);

    const paginationNext = await screen.findByTestId("pagination-nex");

    fireEvent.click(paginationNext);
    let expectedTitlesAfterClicking = [
      "Barbacoa",
      "Sofa de piel auténtica",
      "Vespa restaurada",
      "Batidora",
      "Mudanzas",
    ];
    let resultTitleMapAfterClicking = getTitlesfromCards(items);

    expect(resultTitleMapAfterClicking).toEqual(expectedTitlesAfterClicking);

    const paginationPrev = await screen.findByTestId("pagination-prev");

    fireEvent.click(paginationPrev);

    let expectedTitlesPrev = [
      "iPhone 6S Oro",
      "Polaroid 635",
      "Bolso piel marca Hoss",
      "Reloj de Daniel Wellington",
      "Coche antiguo americano",
    ];
    let resultTitleMapPrev = getTitlesfromCards(items);
    expect(resultTitleMapPrev).toEqual(expectedTitlesPrev);
  });
});
