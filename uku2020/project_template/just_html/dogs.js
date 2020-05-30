// Змінила css-селектори для нової структури сторінки

const breeds = [
  'Beagle', 'Borzoi', 'Cane Corso', 'Chinese Crested Dog', 
  'Chow Chow', 'Welsh Corgi', 'Dachshund', 'Chihuahua',
  'French Bulldog', 'German Shepherd', 'Husky',
  'Jack Russell Terrier', 'Labrador Retriever',
  'Maltese', 'Pomeranian', 'Poodle', 'Pug', 'Shiba Inu',
  'Spaniel', 'St  Bernard', 'Staffordshire Bull Terrier',
  'West Highland White Terrier', 'Yorkshire Terrier', 'Pit bull', 'Boxer',
]

d3.xml('img/breeds_grey.svg').then(function(xml, error) {
  $('figure#dogs')
    .append(xml.documentElement);
    
  $('figure#dogs #g_breeds polyline').attr('style', null)
    
  breeds.map(function(d) {
    $('section#interactive h4 select')
      .append(`<option data-breed='${d}'>${d}</option>`); 
      // тут теж для селектора додала data-breed
  })
  
  $('figure#dogs #g_breeds polyline').attr('data-breed', function(i) {
    return breeds[i];
  })
  
  $('section#interactive h4 select').change(function() {
    // почали вибирати і розуміємо, що попередні вибори самі не прибираються.
    // Треба прибирати класи 'active' перед тим, як призначати новий
    $('figure#dogs #g_breeds [data-breed]').removeClass('active')
    
    // на зміні селектора будемо змінювати клас вибраної лінії
    var selBreed = $(this).val();
    // на лекції помилка була в неправильному ід елемента
    $(`figure#dogs #g_breeds [data-breed='${selBreed}']`)
      .addClass('active');
  })
  
  // Щоб змінювати значення породи в селекторі і підсвічувати лінію за кліком:
  // 1. Подія (js event) клік викликає свою функцію
  $('figure#dogs #g_breeds [data-breed]').click(function() {
    var selBreed = $(this).attr('data-breed'); // щоб знати, на лінію якої собаки клікнули
    // далі багато копіпасту з функції на зміну селектора.
    // Для спрощення коду краще ці повторювані дії винести в окрему функцію.
    // Зараз цього робити е будемо щоб не змінювати лекційну чатсину коду
    $('figure#dogs #g_breeds [data-breed]')    // очистимо стан, щоб не було візуально 2 вибраних
      .removeClass('active')
    $('section#interactive h4 select').val(selBreed);  // Змінимо вибір у селекторі
    $(this).addClass('active');    // І підсвітимо лінію, на яку клікнули
  })
})