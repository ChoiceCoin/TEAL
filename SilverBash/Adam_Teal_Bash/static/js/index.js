const connectBtn = document.getElementById("connect_btn");
const randomBtn = document.getElementById("random_btn");
const blue_address =
  "EABDJ2MHJOHTHKCLZMRL35UNAPTJALDNPCG2BV2PIHZ3RLQJ6CINGP6YEA";
const red_address =
  "WCPQRWTRH7BGDMBMU2FFAJLBP34WHNKF23LCWOWKQFIAZN6USVCHUOZYCA";
let account = undefined;

const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const token = {
  "X-API-key": "SlQ9xWRmKN1Le5tB0F1ft8ZY7wZ7sO5539ZLzfH5",
};
const algod_port = "";

const algodClient = new algosdk.Algodv2(token, baseServer, algod_port);

function connectWallet() {
  const fetchOptions = {};
  AlgoSigner.connect()
    .then(() =>
      AlgoSigner.accounts({
        ledger: "TestNet",
      })
    )
    .then((accountData) => {
      account = accountData;
      connectBtn.innerText = "Connected";
      connectBtn.setAttribute("disabled", "true");
      connectBtn.style.background =
        "linear-gradient(180deg, #5d1b2d, #270517);";
      randomBtn.style.display = "none";
    })
    .catch((error) => {
      createToast(error.message);
      console.error(error);
    });
}

function getSecretKey() {
  const myModal = new bootstrap.Modal(document.getElementById("mnemonic_key"), {
    keyboard: false,
  });
  myModal.show();
}

function hideModal() {
  const myModal = bootstrap.Modal.getInstance(
    document.getElementById("mnemonic_key")
  );
  myModal.hide();
}

function generateAccount() {
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("/random_account", fetchOptions)
    .then((res) => res.json())
    .then((data) => {
      account = data;
      connectBtn.style.display = "none";
      randomBtn.innerText = "Account Generated";
      randomBtn.setAttribute("disabled", "true");
      randomBtn.style.background = "linear-gradient(180deg, #5d1b2d, #270517);";
    })
    .catch((error) => {
      console.error({ error: `An error occured: ${error}` });
    });
}

const createToast = (message) => {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast", "align-items-center");
  toast.setAttribute("aria-live", "assertive");
  toast.setAttribute("aria-atomic", "true");
  toast.setAttribute("id", "toastNotice");
  toast.setAttribute("role", "alert");
  const dFlex = document.createElement("div");
  dFlex.classList.add("d-flex");
  const toastBody = document.createElement("div");
  toastBody.innerText = message;
  toastBody.classList.add("toast-body");
  dFlex.appendChild(toastBody);
  const button = document.createElement("button");
  button.classList.add("btn-close", "me-2", "m-auto");
  button.setAttribute("aria-label", "Close");
  button.setAttribute("data-bs-dismiss", "toast");
  button.setAttribute("type", "button");
  dFlex.appendChild(button);
  toast.appendChild(dFlex);
  toastContainer.appendChild(toast);
  toast.addEventListener("hidden.bs.toast", () => {
    toastContainer.removeChild(toast);
  });
  var bsAlert = new bootstrap.Toast(toast);
  bsAlert.show(); //show it
};

const sendContract = async (contractData) => {
  const fetchOptions = {
    method: "POST",
    heades: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contractData),
  };
  fetch("/create", fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data === "private-key needed") {
        getSecretKey();
      } else {
        console.log(data);
        createToast("Contract created successfully");
      }
    })
    .catch((error) => {
      console.error(`An error occured: ${error}`);
    });
};
