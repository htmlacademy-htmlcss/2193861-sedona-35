---
title: "Desert Quail Inn"
text: "If you’re looking to blend nature’s fiery artistry with a relaxed social vibe, Amara Resort and Spa is whispering your name. Tucked along the banks of Oak Creek Canyon like a secret sanctuary, also just steps from buzzing Uptown Sedona, and close to endless outdoor adventures in the red rock country. Join us for morning yoga, cocktails by the pool, courtyard lawn games and the most glorious sunsets you’ve ever seen. As the perfect four-season destination, Sedona is the ideal getaway for visitors looking to explore the famed red rocks, see the fabled vortexes and enjoy stunning views right from your courtyard Adirondack chair."
type: "Hotel"
image: /images/catalog/hotel-desert.jpeg
fullImage: /images/catalog/diablo-hotel-full.jpg
imageAlt: "Desert Quail Inn"
price: "2500"
rating: "6.9"
layout: "base.njk"
---

<section class="hotel-preview">
  <a class="hotel-preview-button-back" href="/catalog">Back</a>
  <img class="hotel-preview-image" src="{{fullImage}}" alt="{{imageAlt}}" width="1200" height="540">
  <h2 class="hotel-preview-title">{{title}}</h2>
  <div class="hotels-preview-features">
    <p class="hotel-preview-type">Hotel</p>
    <p class="hotel-preview-price">From {{price}} ₽</p>
    <p class="hotel-preview-rating-numbers">Rating: {{rating}}</p>
  </div>
  <p class="hotel-preview-text">{{text}}</p>
  <button class="hotel-preview-button">Order now</button>
</section>
