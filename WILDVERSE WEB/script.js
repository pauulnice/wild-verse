const toggle=document.getElementById('toggle');
const menu=document.getElementById('menu');
toggle.onclick=()=>menu.classList.toggle('show');

document.querySelectorAll('.faq-q').forEach(btn=>{
 btn.onclick=()=>{
 const ans=btn.nextElementSibling;
 const isActive = ans.classList.contains('active');
 
 document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('active'));
 document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('active'));
 
 if (!isActive) {
   ans.classList.add('active');
   btn.classList.add('active');
 }
 }
});

const counters=document.querySelectorAll('[data-count]');
const run=()=>counters.forEach(c=>{
 let target=+c.dataset.count, n=0;
 const i=setInterval(()=>{n+=Math.ceil(target/40); if(n>=target){n=target;clearInterval(i)} c.textContent=n;},40);
});
run();

/* ============================================================
   SPECIES DATA WITH IMAGES - EASY EDIT FORMAT
   To change species images, simply update the URLs below
   Keep them in the format shown in the comments
   ============================================================ */

// LION SPECIES IMAGES
// <img src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=500&q=60">
// <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=60">

const speciesData = {
  Lion: [
    { name: "African Lion", desc: "Largest living cat species, found in African savannas.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_JEqIKt4REQCy-bGiHNXxH2nlYhddxGXKQFjgcxHc-dT4LqoQqCD7hROeOQGHlF5sVFzgF2Dd8nkdAOf5bGEz1YDjNY7oUz0hQUAvkVh&s=10" },
    { name: "Asiatic Lion", desc: "Smaller subspecies found in India's Gir Forest.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4C99bmtR21S0zkxnp6kjbzEe9XcMGw5u4ZbtmAD72L-_O5XD36of2fLZk_uGS70WJSC_08h06nNcma0Ex52s03CCOJYnaJui-KxMrSpBiQg&s=10" },
  ],
  
  // ELEPHANT SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=500&q=60">
  Elephant: [
    { name: "African Bush Elephant", desc: "Largest land animal, found across African plains.", img: "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesAfri.2e16d0ba.fill-1920x768.format-webp.webp" },
    { name: "African Forest Elephant", desc: "Smaller subspecies inhabiting African rainforests.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Loxodontacyclotis.jpg/500px-Loxodontacyclotis.jpg" },
    { name: "Asian Elephant", desc: "Smaller than African species, found in Asian forests.", img: "https://a-z-animals.com/media/asian-elephant-1-600x400.jpg" },
  ],
  
  // TIGER SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1539373865372-e00ac7dab3e1?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=80">
  // <img src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1517999572609-f6e0ad6bc6c0?auto=format&fit=crop&w=500&q=60">
  Tiger: [
    { name: "Bengal Tiger", desc: "Most common subspecies found in India and Bangladesh.", img: "https://images.unsplash.com/photo-1539373865372-e00ac7dab3e1?auto=format&fit=crop&w=500&q=60" },
    { name: "Siberian Tiger", desc: "Largest tiger subspecies, lives in eastern Russia.", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=80" },
    { name: "South China Tiger", desc: "Critically endangered subspecies, potentially extinct in wild.", img: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&w=500&q=60" },
    { name: "Sumatran Tiger", desc: "Smallest subspecies, found only in Sumatra.", img: "https://images.unsplash.com/photo-1517999572609-f6e0ad6bc6c0?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // EAGLE SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1549738045-43b991e11b96?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1542401886-65d27afda266?auto=format&fit=crop&w=500&q=60">
  Eagle: [
    { name: "Bald Eagle", desc: "National bird of USA, powerful hunter of fish.", img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=500&q=60" },
    { name: "Golden Eagle", desc: "Found in Northern Hemisphere, hunts mammals.", img: "https://images.unsplash.com/photo-1549738045-43b991e11b96?auto=format&fit=crop&w=500&q=60" },
    { name: "Philippine Eagle", desc: "Critically endangered, hunts flying lemurs.", img: "https://images.unsplash.com/photo-1542401886-65d27afda266?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // DOLPHIN SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1520763185298-1b434c919eba?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?auto=format&fit=crop&w=500&q=60">
  Dolphin: [
    { name: "Bottlenose Dolphin", desc: "Most widely studied, highly intelligent marine mammal.", img: "https://images.unsplash.com/photo-1520763185298-1b434c919eba?auto=format&fit=crop&w=500&q=60" },
    { name: "Sp inner Dolphin", desc: "Known for acrobatic spinning behavior.", img: "https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60" },
    { name: "Dusky Dolphin", desc: "Fast swimmers found in Southern Hemisphere.", img: "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // PANDA SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1525382455947-f319bc05fb35?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1611003228941-98852ba62227?auto=format&fit=crop&w=500&q=60">
  Panda: [
    { name: "Giant Panda", desc: "Beloved endangered species from China, eats bamboo.", img: "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?auto=format&fit=crop&w=500&q=60" },
    { name: "Red Panda", desc: "Smaller species from Himalayas, also called firefox.", img: "https://images.unsplash.com/photo-1611003228941-98852ba62227?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // BEAR SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1589971776917-3f5e39a44bb4?auto=format&fit=crop&w=500&q=60">
  Bear: [
    { name: "Grizzly Bear", desc: "Large powerful bear from North American forests.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=60" },
    { name: "Black Bear", desc: "Common in North America, excellent tree climbers.", img: "https://images.unsplash.com/photo-1589971776917-3f5e39a44bb4?auto=format&fit=crop&w=500&q=60" },
    { name: "Polar Bear", desc: "Arctic dweller adapted to extreme cold environments.", img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // GIRAFFE SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60">
  Giraffe: [
    { name: "Northern Giraffe", desc: "Found in Central Africa, tallest giraffe subspecies.", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500&q=60" },
    { name: "Southern Giraffe", desc: "Most common subspecies, found in southern Africa.", img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=500&q=60" },
    { name: "Reticulated Giraffe", desc: "Distinctive intricate coat pattern, rarest subspecies.", img: "https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // WOLF SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1549906736-e3b63fe50585?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1518098268026-4e89f1a2c945?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1601758228600-f5f9b3671a3a?auto=format&fit=crop&w=500&q=60">
  Wolf: [
    { name: "Gray Wolf", desc: "Largest wild canid, found in northern regions.", img: "https://images.unsplash.com/photo-1549906736-e3b63fe50585?auto=format&fit=crop&w=500&q=60" },
    { name: "Arctic Wolf", desc: "White-furred wolf adapted to Arctic environments.", img: "https://images.unsplash.com/photo-1518098268026-4e89f1a2c945?auto=format&fit=crop&w=500&q=60" },
    { name: "Red Wolf", desc: "Critically endangered, native to southeastern USA.", img: "https://images.unsplash.com/photo-1601758228600-f5f9b3671a3a?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // GORILLA SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1540573133985-87b6da94de54?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1567527373383-bbb887a9da7d?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60">
  Gorilla: [
    { name: "Western Lowland Gorilla", desc: "Most numerous, found in central African forests.", img: "https://images.unsplash.com/photo-1540573133985-87b6da94de54?auto=format&fit=crop&w=500&q=60" },
    { name: "Mountain Gorilla", desc: "Critically endangered, live in high altitude forests.", img: "https://images.unsplash.com/photo-1567527373383-bbb887a9da7d?auto=format&fit=crop&w=500&q=60" },
    { name: "Eastern Lowland Gorilla", desc: "Largest subspecies, found in Democratic Republic of Congo.", img: "https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // ZEBRA SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=60">
  Zebra: [
    { name: "Plains Zebra", desc: "Most common, found in East and Southern Africa.", img: "https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60" },
    { name: "Mountain Zebra", desc: "Smaller subspecies, adapted to rocky terrain.", img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=500&q=60" },
    { name: "Grey's Zebra", desc: "Endangered species, found in northern Kenya.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // SNOW LEOPARD SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1539373865372-e00ac7dab3e1?auto=format&fit=crop&w=500&q=60">
  SnowLeopard: [
    { name: "Central Asian Snow Leopard", desc: "Adapted to high altitude terrain of the Himalayas.", img: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&w=500&q=60" },
    { name: "Endangered Snow Leopard", desc: "Critically threatened, fewer than 4000 remain.", img: "https://images.unsplash.com/photo-1539373865372-e00ac7dab3e1?auto=format&fit=crop&w=500&q=60" },
  ],
  
  // SNAKE SPECIES IMAGES
  // <img src="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=60">
  // <img src="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&w=500&q=60">
  Snake: [
    { name: "King Cobra", desc: "World's longest venomous snake, found in Southeast Asia.", img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=500&q=60" },
    { name: "Green Anaconda", desc: "Heaviest snake species, found in South American rainforests.", img: "https://images.unsplash.com/photo-1564349482533-c2e28f28c8a0?auto=format&fit=crop&w=500&q=60" },
    { name: "Python", desc: "Non-venomous constrictor snake found in Africa, Asia, and Australia.", img: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&w=500&q=60" },
    { name: "Black Mamba", desc: "Africa's most feared snake, extremely fast and venomous.", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=60" },
    { name: "Coral Snake", desc: "Venomous snake with distinctive red, yellow, and black stripes.", img: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&w=500&q=60" },
  ]
};

// Animal Pages Navigation
const animals = ['Lion', 'Elephant', 'Tiger', 'Eagle', 'Dolphin', 'Panda', 'Bear', 'Giraffe', 'Wolf', 'Gorilla', 'Zebra', 'SnowLeopard', 'Snake'];
let currentPage = 0;

function initPageIndicators() {
  const indicators = document.getElementById('pageIndicators');
  animals.forEach((animal, i) => {
    const dot = document.createElement('div');
    dot.className = 'page-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToPage(i);
    indicators.appendChild(dot);
  });
}

function goToPage(index) {
  document.querySelectorAll('.animal-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.page-dot').forEach(d => d.classList.remove('active'));
  
  currentPage = index;
  document.querySelectorAll('.animal-page')[currentPage].classList.add('active');
  document.querySelectorAll('.page-dot')[currentPage].classList.add('active');
}

function nextAnimal() {
  goToPage((currentPage + 1) % animals.length);
}

function prevAnimal() {
  goToPage((currentPage - 1 + animals.length) % animals.length);
}

// Modal functionality
const modal = document.createElement('div');
modal.id = 'speciesModal';
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="modalTitle"></h2>
    <div id="speciesContainer"></div>
  </div>
`;
document.body.appendChild(modal);

const closeBtn = modal.querySelector('.close');
const speciesContainer = modal.querySelector('#speciesContainer');

document.querySelectorAll('.btn-species').forEach(btn=>{
  btn.onclick=(e)=>{
    e.preventDefault();
    const animal = animals[currentPage];
    const species = speciesData[animal];
    
    modal.querySelector('#modalTitle').textContent = animal + ' Subspecies';
    speciesContainer.innerHTML = '';
    
    species.forEach(s=>{
      const div = document.createElement('div');
      div.className = 'species-item';
      div.innerHTML = `<img src="${s.img}" alt="${s.name}" class="species-img"><h4>${s.name}</h4><p>${s.desc}</p>`;
      speciesContainer.appendChild(div);
    });
    
    modal.style.display = 'block';
  }
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// Initialize on page load
initPageIndicators();
document.querySelectorAll('.animal-page')[0].classList.add('active');