// NAVIGATION LIST FOR LARGE SCREENS
const openProductPanel = document.getElementById("open-product-panel");
const closeProductPanel = document.getElementById("close-product-panel");
const openCompanyPanel = document.getElementById("open-company-panel");
const closeCompanyPanel = document.getElementById("close-company-panel");
const openConnectPanel = document.getElementById("open-connect-panel");
const closeConnectPanel = document.getElementById("close-connect-panel");

const openProductPanelIcon = document.getElementById("open-product-panel-icon");
const closeProductPanelIcon = document.getElementById("close-product-panel-icon");
const openCompanyPanelIcon = document.getElementById("open-company-panel-icon");
const closeCompanyPanelIcon = document.getElementById("close-company-panel-icon");
const openConnectPanelIcon = document.getElementById("open-connect-panel-icon");
const closeConnectPanelIcon = document.getElementById("close-connect-panel-icon");

const productPanel = document.getElementById("product-panel");
const companyPanel = document.getElementById("company-panel");
const connectPanel = document.getElementById("connect-panel");

const productPanelList = document.getElementById("product-panel-list");
const companyPanelList = document.getElementById("company-panel-list");
const connectPanelList = document.getElementById("connect-panel-list");


// NAVIGATION MENU OPEN AND CLOSE
const open = document.getElementById("open");
const close = document.getElementById("close");
const panel = document.getElementById("panel");
const mobilePanelContainer = document.getElementById("mobile-panel-container")
const mobilePanelButtons = document.getElementById("mobile-panel-buttons")

// NAVIGATION LIST FOR MOBILE SCREENS
const openProductMobilePanel = document.getElementById("open-product-mobile-panel");
const closeProductMobilePanel = document.getElementById("close-product-mobile-panel");
const openCompanyMobilePanel = document.getElementById("open-company-mobile-panel");
const closeCompanyMobilePanel = document.getElementById("close-company-mobile-panel");
const openConnectMobilePanel = document.getElementById("open-connect-mobile-panel");
const closeConnectMobilePanel = document.getElementById("close-connect-mobile-panel");

const openProductMobilePanelIcon = document.getElementById("open-product-mobile-panel-icon");
const closeProductMobilePanelIcon = document.getElementById("close-product-mobile-panel-icon");
const openCompanyMobilePanelIcon = document.getElementById("open-company-mobile-panel-icon");
const closeCompanyMobilePanelIcon = document.getElementById("close-company-mobile-panel-icon");
const openConnectMobilePanelIcon = document.getElementById("open-connect-mobile-panel-icon");
const closeConnectMobilePanelIcon = document.getElementById("close-connect-mobile-panel-icon");

const productMobilePanelList = document.getElementById("product-mobile-panel-list");
const companyMobilePanelList = document.getElementById("company-mobile-panel-list");
const connectMobilePanelList = document.getElementById("connect-mobile-panel-list");




closeProductPanel.style.display = "none"
closeCompanyPanel.style.display = "none"
closeConnectPanel.style.display = "none"

closeProductPanelIcon.style.display = "none"
closeCompanyPanelIcon.style.display = "none"
closeConnectPanelIcon.style.display = "none"

productPanelList.style.display = "none"
companyPanelList.style.display = "none"
connectPanelList.style.display = "none";

close.style.display = "none"
mobilePanelContainer.style.display = "none"
mobilePanelButtons.style.display = "none"


// NAVIGATION LIST FOR MOBILE SCREENS
closeProductMobilePanel.style.display = "none"
closeCompanyMobilePanel.style.display = "none"
closeConnectMobilePanel.style.display = "none";

closeProductMobilePanelIcon.style.display = "none"
closeCompanyMobilePanelIcon.style.display = "none"
closeConnectMobilePanelIcon.style.display = "none";

productMobilePanelList.style.display = "none"
companyMobilePanelList.style.display = "none"
connectMobilePanelList.style.display = "none";


openProductPanel.addEventListener("click", function () {
  productPanel.style.height = "192px"
  productPanel.style.padding = "30px 25px"
  productPanelList.style.display = "flex"
  closeProductPanel.style.display = "block"
  closeProductPanel.style.color = "#ffffff"
  openProductPanel.style.display = "none"
  companyPanel.style.height = "0";
  companyPanel.style.padding = "0";
  companyPanelList.style.display = "none";
  connectPanel.style.height = "0";
  connectPanel.style.padding = "0";
  connectPanelList.style.display = "none";
  closeCompanyPanel.style.display = "none";
  openCompanyPanel.style.display = "block";
  closeConnectPanel.style.display = "none";
  openConnectPanel.style.display = "block";
  openProductPanelIcon.style.display = "none";
  closeProductPanelIcon.style.display = "block";
  openCompanyPanelIcon.style.display = "block";
  closeCompanyPanelIcon.style.display = "none";
  openConnectPanelIcon.style.display = "block";
  closeConnectPanelIcon.style.display = "none";
});

closeProductPanel.addEventListener("click", function () {
  productPanel.style.height = "0";
  productPanel.style.padding = "0";
  productPanelList.style.display = "none";
  closeProductPanel.style.display = "none";
  openProductPanel.style.display = "block";
  openProductPanelIcon.style.display = "block";
  closeProductPanelIcon.style.display = "none";
});

openCompanyPanel.addEventListener("click", function () {
  companyPanel.style.height = "192px";
  companyPanel.style.padding = "30px 25px";
  companyPanelList.style.display = "flex";
  closeCompanyPanel.style.display = "block";
  closeCompanyPanel.style.color = "#ffffff"
  openCompanyPanel.style.display = "none";
  productPanel.style.height = "0";
  productPanel.style.padding = "0";
  productPanelList.style.display = "none";
  connectPanel.style.height = "0";
  connectPanel.style.padding = "0";
  connectPanelList.style.display = "none";
  closeProductPanel.style.display = "none";
  openProductPanel.style.display = "block";
  closeConnectPanel.style.display = "none";
  openConnectPanel.style.display = "block";
  openCompanyPanelIcon.style.display = "none";
  closeCompanyPanelIcon.style.display = "block";
  openProductPanelIcon.style.display = "block";
  closeProductPanelIcon.style.display = "none";
  openConnectPanelIcon.style.display = "block";
  closeConnectPanelIcon.style.display = "none";
});

closeCompanyPanel.addEventListener("click", function () {
  companyPanel.style.height = "0";
  companyPanel.style.padding = "0";
  companyPanelList.style.display = "none";
  closeCompanyPanel.style.display = "none";
  openCompanyPanel.style.display = "block";
  openCompanyPanelIcon.style.display = "block";
  closeCompanyPanelIcon.style.display = "none";
});

openConnectPanel.addEventListener("click", function () {
  connectPanel.style.height = "154px"
  connectPanel.style.padding = "30px 25px"
  connectPanelList.style.display = "flex"
  closeConnectPanel.style.display = "block"
  closeConnectPanel.style.color = "#ffffff"
  openConnectPanel.style.display = "none"
  companyPanel.style.height = "0";
  companyPanel.style.padding = "0";
  companyPanelList.style.display = "none";
  productPanel.style.height = "0";
  productPanel.style.padding = "0";
  productPanelList.style.display = "none";
  closeProductPanel.style.display = "none";
  openProductPanel.style.display = "block";
  closeCompanyPanel.style.display = "none";
  openCompanyPanel.style.display = "block";
  openConnectPanelIcon.style.display = "none";
  closeConnectPanelIcon.style.display = "block";
  openProductPanelIcon.style.display = "block";
  closeProductPanelIcon.style.display = "none";
  openCompanyPanelIcon.style.display = "block";
  closeCompanyPanelIcon.style.display = "none";
});

closeConnectPanel.addEventListener("click", function () {
  connectPanel.style.height = "0";
  connectPanel.style.padding = "0";
  connectPanelList.style.display = "none";
  closeConnectPanel.style.display = "none";
  openConnectPanel.style.display = "block";
  openConnectPanelIcon.style.display = "block";
  closeConnectPanelIcon.style.display = "none";
});


// NAVIGATION PANEL
openProductMobilePanel.addEventListener("click", function () {
  productMobilePanelList.style.display = "flex"
  closeProductMobilePanel.style.display = "block"
  closeProductMobilePanel.style.color = "hsl(209, 12%, 48%)"
  openProductMobilePanel.style.display = "none"
  closeProductMobilePanelIcon.style.display = "block"
  openProductMobilePanelIcon.style.display = "none"
  companyMobilePanelList.style.display = "none"
  connectMobilePanelList.style.display = "none";
  openCompanyMobilePanelIcon.style.display = "block"
  closeCompanyMobilePanelIcon.style.display = "none"
  openConnectMobilePanelIcon.style.display = "block"
  closeConnectMobilePanelIcon.style.display = "none"
  openCompanyMobilePanel.style.display = "block"
  closeCompanyMobilePanel.style.display = "none"
  openConnectMobilePanel.style.display = "block"
  closeConnectMobilePanel.style.display = "none"
  panel.style.height = "550px"
});

closeProductMobilePanel.addEventListener("click", function () {
  productMobilePanelList.style.display = "none"
  closeProductMobilePanel.style.display = "none"
  openProductMobilePanel.style.display = "block"
  closeProductMobilePanelIcon.style.display = "none"
  openProductMobilePanelIcon.style.display = "block"
  panel.style.height = "327px"
});



openCompanyMobilePanel.addEventListener("click", function () {
  companyMobilePanelList.style.display = "flex"
  closeCompanyMobilePanel.style.display = "block"
  closeCompanyMobilePanel.style.color = "hsl(209, 12%, 48%)"
  openCompanyMobilePanel.style.display = "none"
  closeCompanyMobilePanelIcon.style.display = "block"
  openCompanyMobilePanelIcon.style.display = "none"
  productMobilePanelList.style.display = "none"
  connectMobilePanelList.style.display = "none";
  openProductMobilePanelIcon.style.display = "block"
  closeProductMobilePanelIcon.style.display = "none"
  openConnectMobilePanelIcon.style.display = "block"
  closeConnectMobilePanelIcon.style.display = "none"
  openProductMobilePanel.style.display = "block"
  closeProductMobilePanel.style.display = "none"
  openConnectMobilePanel.style.display = "block"
  closeConnectMobilePanel.style.display = "none"
  panel.style.height = "550px"
});

closeCompanyMobilePanel.addEventListener("click", function () {
  companyMobilePanelList.style.display = "none"
  closeCompanyMobilePanel.style.display = "none"
  openCompanyMobilePanel.style.display = "block"
  closeCompanyMobilePanelIcon.style.display = "none"
  openCompanyMobilePanelIcon.style.display = "block"
  panel.style.height = "327px"
});



openConnectMobilePanel.addEventListener("click", function () {
  connectMobilePanelList.style.display = "flex"
  closeConnectMobilePanel.style.display = "block"
  closeConnectMobilePanel.style.color = "hsl(209, 12%, 48%)"
  openConnectMobilePanel.style.display = "none"
  closeConnectMobilePanelIcon.style.display = "block"
  openConnectMobilePanelIcon.style.display = "none"
  companyMobilePanelList.style.display = "none"
  productMobilePanelList.style.display = "none";
  openCompanyMobilePanelIcon.style.display = "block"
  closeCompanyMobilePanelIcon.style.display = "none"
  openProductMobilePanelIcon.style.display = "block"
  closeProductMobilePanelIcon.style.display = "none"
  openCompanyMobilePanel.style.display = "block"
  closeCompanyMobilePanel.style.display = "none"
  openProductMobilePanel.style.display = "block"
  closeProductMobilePanel.style.display = "none"
  panel.style.height = "510px"
});

closeConnectMobilePanel.addEventListener("click", function () {
  connectMobilePanelList.style.display = "none"
  closeConnectMobilePanel.style.display = "none"
  openConnectMobilePanel.style.display = "block"
  closeConnectMobilePanelIcon.style.display = "none"
  openConnectMobilePanelIcon.style.display = "block"
  panel.style.height = "327px"
});

// NAVIGATION MENU BEHAVIOUR
open.addEventListener("click", function () {
  panel.style.height = "327px"
  open.style.display = "none"
  close.style.display = "block"
  mobilePanelContainer.style.display = "flex"
  mobilePanelButtons.style.display = "flex"
});


close.addEventListener("click", function () {
  panel.style.height = "0"
  open.style.display = "block"
  close.style.display = "none"
  mobilePanelContainer.style.display = "none"
  mobilePanelButtons.style.display = "none"
});


