(document).ready(function () {
  $('#myTable').DataTable({
    // responsive: true,
    scrollY: '200px',
    scrollCollapse: true,
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']],
    paging: true
  });
});
