const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';//click

//Step1 Get Thumbnails Array
function getThumbnailsArray() {
  'use strict';
 var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
 var thumbnailArray = [].slice.call(thumbnails);
 return thumbnailArray;
}

//Step2 Function of chaning detailed pic and its text
function setDetails(imageUrl, titleText) {
 'use strict';
 var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
 detailImage.setAttribute('src', imageUrl);
 var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
 detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
 return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
 return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
 'use strict';
 setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

//Step3 Adding handler for click on thumb pic to change
function addThumbClickHandler(thumb) {
 'use strict';
 thumb.addEventListener('click', function (event) {
 event.preventDefault();
 setDetailsFromThumb(thumb)
 });
}

//Step4 Add initialization function with iterations
function initializeEvents() {
 'use strict';
 var thumbnails = getThumbnailsArray();
 thumbnails.forEach(addThumbClickHandler)
}

//Step5 Call Function
initializeEvents()
