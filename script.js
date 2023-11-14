var cssString = `
  html, body {
    margin: 0;
    padding: 0;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    2% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    4% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    6% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    8% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    10% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    12% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    14% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    16% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    18% {
      transform: translate(0px, 0px) rotate(0deg);
    }
  }
  #whatsapp-widget-app {
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
  }
  #whatsapp-widget-overlay {
    position: absolute;
    position: fixed;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  #whatsapp-widget-button {
    animation: shake 5s infinite;
    animation-delay: 3s;
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    border-radius: 5px;
    transition: 0.3s;
    background: transparent
      url(https://d335luupugsy2.cloudfront.net/cms/files/1446/1588875979/$5u0ndp8vgxo)
      center center no-repeat;
  }
  #whatsapp-widget-button:hover,
  #whatsapp-widget-button[data-open="true"] {
    animation: none;
  }

  #whatsapp-widget {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    position: fixed;
    bottom: 80px;
    right: 25px;
    width: 400px;
    z-index: 99999;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  #whatsapp-header {
    background: #1c6156;
    color: #fff;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    justify-content: space-between;
  }

  #whatsapp-header-close-button {
    border: none;
    cursor: pointer;
    background: transparent;
  }

  #whatsapp-header-close-button {
    height: 25px;
    width: 25px;
    fill: #fff;
  }

  #whatsapp-header-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 60x;
  }
  #whatsapp-header-content h3,
  p {
    margin-block-start: 0px !important;
    margin-block-end: 0px !important;
  }

  #whatsapp-header img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  #whatsapp-body {
    background: url(https://d335luupugsy2.cloudfront.net/cms/files/18740/1595939276/$ubt4h4q1mvh),
      linear-gradient(
        to bottom,
        rgba(233, 224, 215, 1) 0%,
        rgba(233, 224, 215, 1) 100%
      );
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
  }

  #whatsapp-system-message {
    padding: 12px;
    background: #f5f5f5;
    border-radius: 5px;
    font-size: 15px;
    max-width: 280px;
  }

  #whatsapp-form {
    margin-left: auto;
    box-sizing: border-box;
    width: fit-content;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }

  #whatsapp-form input,
  #whatsapp-form button {
    border: none;
    /* width: 200px; */
    width: 100%;
    border-radius: 4px;
    padding: 10px;
  }
  #whatsapp-form button {
    font-size: 16px;
    cursor: pointer;
    margin-top: 8px;
    background: #1c6156;
    color: #fff;
    font-weight: bold;
    width: 70%;
    transition: 0.3s;
  }

  #whatsapp-form button:hover {
    background: #113d36;
  }

  @media (max-width: 600px) {
    #whatsapp-widget {
      width: 100%;
      bottom: 80px;
      left: 0;
      right: 0;
      border-radius: 0;
    }
  }`;

var htmlString = settings => `<div id="whatsapp-widget-app">
  <div id="whatsapp-widget-overlay" style="display: none"></div>
  <button id="whatsapp-widget-button" data-open="false"></button>
  <div id="whatsapp-widget" style="display: none">
    <div id="whatsapp-header">
      <div id="whatsapp-header-content">
        <img src="${settings.logoUrl}" alt="${settings.companyName}" />
        <div id="whatsapp-header-column">
          <h3>${settings.companyName}</h3>
          <p>online</p>
        </div>
      </div>
      <button id="whatsapp-header-close-button">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 348.333 348.334"
        >
          <title>Fechar</title>
          <path
            d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
            c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
            c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
            l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
            L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
          ></path>
        </svg>
      </button>
    </div>
    <div id="whatsapp-body">
      <div id="whatsapp-system-message">
        <p>${settings.text}</p>
      </div>
      <form id="whatsapp-form">
        <input
          type="text"
          id="name"
          placeholder="Nome *"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email *"
          required
        />
        <input
          type="tel"
          id="phone"
          minlength="11"
          placeholder="11999999999"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</div>`;

function injectStyles(css) {
  var style = document.createElement("style");
  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);
}

// Função para injetar o HTML na página
function injectHtml(html) {
  var div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild(div.firstChild);
}

function setup() {
  injectStyles(cssString);

  injectHtml(htmlString(settings));

  document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.getElementById("whatsapp-widget-overlay");
    var widgetButton = document.getElementById("whatsapp-widget-button");
    var closeButton = document.getElementById("whatsapp-header-close-button");
    var form = document.getElementById("whatsapp-form");
    var popup = document.getElementById("whatsapp-widget");

    // Função para alternar a exibição do popup
    function togglePopup() {
      var isDisplayed = popup.style.display !== "none";
      overlay.style.display = isDisplayed ? "none" : "block";
      popup.style.display = isDisplayed ? "none" : "block";
      widgetButton.setAttribute("data-open", !isDisplayed);
    }

    // Eventos de clique para o botão de abertura e fechamento do popup
    widgetButton.addEventListener("click", togglePopup);
    closeButton.addEventListener("click", togglePopup);

    // Evento de envio do formulário
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var formValues = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
      };

      settings.onSubmit(formValues); // Chamada da função personalizada no envio do formulário

      var message = encodeURIComponent(settings.message);
      window.open(
        `https://wa.me/${settings.phoneNumber}?text=${message}`,
        "_blank"
      );
      togglePopup();
    });
  });
}

if (settings) {
  setup();
}
