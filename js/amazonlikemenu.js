/* 
 * AMAZON like menu
 * by Olzhas Kurenov
 * 
 */

// Shorthand for getElementById(id)
function gebi(id) {
  return document.getElementById(id);
}

//toggles departments menu
function toggleDepartments() {
  var departmentsBox = gebi("departments-box");
  if (departmentsBox.style.display != 'none') {
    departmentsBox.style.display = 'none';
  }
  else {
    departmentsBox.style.display = 'block';
  }
}

//shows departments menu
function showDepartments() {
  var departmentsBox = gebi("departments-box");
  if (typeof (departmentsBox) != 'undefined' && departmentsBox.style.display != 'block') {
    departmentsBox.style.display = 'block';
  }
}

//hides departments menu
function hideDepartments() {
  var departmentsBox = gebi("departments-box");
  if (typeof (departmentsBox) != 'undefined') {
    departmentsBox.style.display = 'none';
  }
}

var prevCategoryContent = null;

//show content of selected category/department
function showCategoryContent(object) {
  //makes backround dark
  showVeil();

  var id = object.getAttribute('data-boxid');

  dBox = gebi('departments-right-box');
  if (dBox.style.display != 'block') {
    dBox.style.display = 'block';
  }

  if (prevCategoryContent != null) {
    var elementToHide = gebi(prevCategoryContent);
    elementToHide.style.display = 'none';
  }

  var element = gebi(id);
  element.style.display = 'block';

  prevCategoryContent = id;
}

function hideCategoryContent(object) {
  var id = object.getAttribute('data-boxid');

  dBox = gebi('departments-right-box');
  if (dBox.style.display != 'none') {
    dBox.style.display = 'none';
  }

  var element = gebi(id);
  element.style.display = 'none';
}

function hideRightCategoryBox() {
  if (prevCategoryContent != null) {
    var elementToHide = gebi(prevCategoryContent);
    elementToHide.style.display = 'none';
  }

  dBoxRight = gebi('departments-right-box');
  dBoxRight.style.display = 'none';

  hideVeil();
}

function showVeil() {
  var veil = gebi('veil');
  veil.style.display = 'block';
}

function hideVeil() {
  var veil = gebi('veil');
  veil.style.display = 'none';
}