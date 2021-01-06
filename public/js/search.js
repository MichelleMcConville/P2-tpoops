let $ = window.$;

$(document).ready(function () {
  $.noConflict()
  $('#myTable').DataTable({
    responsive: true,
    scrollY: '200px',
    scrollCollapse: true,
    paging: false
  });
});
