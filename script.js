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


closeProductPanel.style.display = "none"
closeCompanyPanel.style.display = "none"
closeConnectPanel.style.display = "none"
closeProductPanelIcon.style.display = "none"
closeCompanyPanelIcon.style.display = "none"
closeConnectPanelIcon.style.display = "none"
productPanelList.style.display = "none"
companyPanelList.style.display = "none"
connectPanelList.style.display = "none";


openProductPanel.addEventListener("click", function () {
  productPanel.style.height = "192px"
  productPanel.style.padding = "30px 25px"
  productPanelList.style.display = "flex"
  closeProductPanel.style.display = "block"
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