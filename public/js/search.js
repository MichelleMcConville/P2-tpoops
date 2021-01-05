const $ = window.$;

$(document).ready( function() {
  $('#myTable').DataTable({
    responsive: true,
    scrollY: '200px',
    scrollCollapse: true,
    paging: false
  });
});
