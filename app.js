const getData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    
    const categoriesContainer = document.getElementById('category-container')
    data.data.forEach(category => {
        
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick=displayCard('${category.category_id}')  class="bg-gray-200  py-2 px-4 rounded-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>          
        `
        categoriesContainer.appendChild(div);
        console.log(category.category_id);
    });
}

const displayCard = async (id) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await response.json();
    // console.log(data.data);
    
    const categoryContainer = document.getElementById('card-container');
    categoryContainer.innerHTML = '';
    data.data.forEach((video) => {
        const div = document.createElement('div');

        console.log(video.title);

        div.innerHTML = `
        <div>
    
        <div class="sm:w-96 md:w-96 md:h-72 md:72 lg:w-auto lg:h-52">
          <img src="${video.thumbnail}" class="h-full sm:w-full rounded-xl" />
        </div>
        <div class="flex items-center">
          <div>
            <div class="avatar mt-4">
              <div
                class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                <img src="${video.authors[0].profile_picture}" />
              </div>
            </div>
          </div>
          <div class="ml-5 text-[#171717] font-semibold"><p class>${video.title}</p></div>
        </div>
      
        
      </div>
            `;
    categoryContainer.appendChild(div); 
    });
}


getData();
displayCard(1000);