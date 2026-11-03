(function () {
  var box = document.getElementById('search-box'), out = document.getElementById('search-results'), data = null;
  if (!box) return;
  function load(cb) { if (data) return cb(); fetch(box.parentNode.getAttribute('data-index') || '/index.json').then(function (r) { return r.json(); }).then(function (j) { data = j; cb(); }); }
  box.addEventListener('input', function () {
    var q = box.value.trim().toLowerCase(); out.innerHTML = ''; if (!q) return;
    load(function () {
      data.filter(function (p) { return (p.title + ' ' + (p.tags || []).join(' ') + ' ' + p.summary).toLowerCase().indexOf(q) > -1; })
        .forEach(function (p) {
          var li = document.createElement('li'), a = document.createElement('a');
          a.href = p.url; a.textContent = p.title; li.appendChild(a);
          li.appendChild(document.createTextNode(' - ' + p.date)); out.appendChild(li);
        });
    });
  });
})();
