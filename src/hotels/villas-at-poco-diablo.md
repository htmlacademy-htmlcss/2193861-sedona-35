---
title: "Villas at Poco Diablo"
type: "Hotel"
text: "An oasis in the desert welcomes you to lush green landscapes serenaded by the sounds of nearby Oak Creek. We offer deluxe junior suites & 1 bedroom suites. Play a round on the willow-shaded golf courses, BBQ on our scenic outdoor patio or unwind in your villa with private whirlpool & fireplace."
image: /images/catalog/hotel-diablo.jpeg
fullImage: /images/catalog/villas-of-poco-diablo-full.jpg
imageAlt: "Villas at Poco Diablo"
price: "5000"
rating: "9.2"
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
