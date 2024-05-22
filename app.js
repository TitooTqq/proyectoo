const menu = [
    // Array de objetos que representan elementos del menú
    {
        id: 1,
        title: "Hotcakes con crema batida",
        category: "breakfast",
        price: 199.99,
        img: "item-1.jpeg",
        desc: `Es una orden de 7 hotcakes con caramelo de su preferemcia y con crema batida `,
    },
    {
        id: 2,
        title: "Hamburguesa doble ",
        category: "lunch",
        price: 139.99,
        img: "item-2.jpeg",
        desc: `Es una hamburguesa con carne doble, verduras, aderezos y papas a la francesa`,
        },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "item-3.jpeg",
        desc: ``,
    },
    {
        id: 4,
        title: "Huevos al gusto",
        category: "breakfast",
        price: 99.99,
        img: "item-4.jpg",
        desc: `Son huevos revueltos al gusto ya sea con (jamon, salchicha, chorizo o a la mexicana) lleva incluido dos rebanada de pan`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "item-5.jpeg",
        desc: ` `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "item-6.jpeg",
        desc: ``,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "item-7.jpeg",
        desc: ` `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "item-8.jpeg",
        desc: ` `,
    },
    {
        id: 9,
        title: "Malteada de fresa",
        category: "shakes",
        price: 99.99,
        img: "item-9.jpg",
        desc: `Es un batido de leche, fresa y endulzante de tu preferencia, con decoaracion de unas fresas frezcas`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "item-10.jpeg",
        desc: ``,
    },
    ];
// Seleccionar elementos del DOM
    const sectionCenter = document.querySelector(".section-center");
    const btnContainer = document.querySelector(".btn-container");
// Mostrar todos los elementos del menú cuando la página carga
    window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
    });
// Función para mostrar los elementos del menú en el DOM
    function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
                <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                ${item.desc}
                </p>
            </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
    }
// Función para mostrar los botones de filtro
    function displayMenuButtons() {
         // Obtener todas las categorías únicas del menú
    const categories = menu.reduce(
        function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
        },
        ["all"]
    );
                
// Crear botones de filtro para cada categoría
    const categoryBtns = categories
        .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
            </button>`;
        })
        .join("");
// Mostrar los botones de filtro en el contenedor
    btnContainer.innerHTML = categoryBtns;
        // Agregar event listeners a los botones de filtro
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
             // Obtener la categoría seleccionada
        const category = e.currentTarget.dataset.id;
            // Filtrar los elementos del menú por categoría y mostrarlos
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "all") {
            diplayMenuItems(menu);
        } else {
            diplayMenuItems(menuCategory);
        }
        });
    });
    }