const locators = {
   email : "input[type='email']",
   password : "input[type='password']",
   login : "button[id='save-btn']"

}

const dashBoard = {
   dashboard : "//div[@id='dashboard']",
   startAsset : "//button[@id='start']",
   assetId : "//input[@id='assets-inp-id']",
   designation : "//input[@id='asset-type']",
   selectmudlist : "//div[@class='mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple mud-selected-item mud-primary-text mud-primary-hover']",
   manufacturer  : "//input[@id='manufacturer']",
   city : "//input[@id='level-1']",
   inspection : "//input[@id='inspection']",
   nextbutton : "//button[@id='next-btn']",
   save : "//button[@id='save-btn']",
   menuoptions  : "//div[@class='mud-nav-item']"
}

const helpSupport = {
   help : "//div[@id='helpandsupport']",
   releasenote : "(//div[@class='mud-list']/a)[1]"
}

const practicePage = {
   radio : "[value*='radio1']",
   Allradio : "input.radioButton",
   dropdown : "select#dropdown-class-example",
   checkbox1 : "//input[@id='checkBoxOption1']",
   link : "a.blinkingText",
   newTab : "a#opentab",
   newPagecontent : "//div[@class='support float-left']",
   newWindow : "button#openwindow",
   visibleHidden : "//input[@name='show-hide']",
   hideElement : "[onclick='hideElement()']",
   alert : "input#confirmbtn",
   newalert : "input#alertbtn",
   mouseHover : "button#mousehover",
   mouseHoverContext : "//div[@class='mouse-hover-content']",
   iframe : "#courses-iframe",
   joinButton : "//div[@class='flex items-center space-x-2']"

}

const ecommerce = {
    email : "input#userEmail",
    password : "input#userPassword",
    login : "input#login",
    cartbody : "div.card-body",
    addtocart : "//*[@class='btn w-10 rounded']",
    cart : "//button[@routerlink='/dashboard/cart']",
    checkout : "//button[@class='btn btn-primary']",
    country : "[placeholder*=Country]",
    countrydropdown : "//section[@class='ta-results list-group ng-star-inserted']"
}

const calendar = {
   calendarfiled : ".react-date-picker__calendar-button",
   yearmonthNavigation : ".react-calendar__navigation__label",
   nextMonth : "//*[@class='react-calendar__navigation__arrow react-calendar__navigation__next-button']",
   previousmonth : "//*[@class='react-calendar__navigation__arrow react-calendar__navigation__prev-button']",
   day : (day)=> `//abbr[text()='${day}']`,
   datePicker : ".react-date-picker__inputGroup__input"
}

module.exports = { locators, dashBoard, helpSupport,practicePage,ecommerce,calendar };