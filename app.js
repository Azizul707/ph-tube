const getData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    
    const categoriesContainer = document.getElementById('category-container')
    data.data.forEach(category => {
        // console.log(category);
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick=displayCard('${category.category_id}')  class="bg-gray-200  py-2 px-4 rounded-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>          
        `
        categoriesContainer.appendChild(div);
    });
}




const displayCard = async (id) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await response.json();
    console.log(data.data);
    const categoryContainer = document.getElementById('card-container');
    categoryContainer.innerHTML = '';
     if(data.data.length <= 0){
        console.log('empty');
      }else{
          console.log('not empty');
      };
    data.data.forEach((video) => {
       console.log(video); 
     

      const div = document.createElement('div');

        const hrs = Math.floor(video.others?.posted_date /3600);
        const mins = Math.floor(video.others?.posted_date /60);
      
        div.innerHTML = `

        <div>
    
        <div class="sm:w-96 md:w-96 md:h-72 md:72 lg:w-auto lg:h-52 relative">
          <img src="${video.thumbnail}" class="h-full sm:w-full rounded-xl" />
          <div id="time" class="absolute bottom-2 right-2 py-2 px-4 rounded-xl text-white"><p>${video.others?.posted_date ? `<span class="bg-black p-2 rounded-l-md">${hrs} hrs</span><span class="bg-black p-2 rounded-r-md">${mins}min ago</span>` : '' }</p></div>
      
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
        <div class="">
        <div class="flex flex-row items-center">
              <div class=""><p class="ml-14">${video.authors[0]?.profile_name}</p></div>
              <div class=""><span>
                                      ${video.authors[0]?.verified ? '<img src="./image/verified-check-svgrepo-com.svg" alt="" class="w-4">' : ''}
                                    </span>
            </div>
        </div>

  </div>
              
            </div>
              
      
        </div>
        <div><p class="text-gray-500 ml-14">${video.others?.views} Views</p></div>
        
      </div>
            `;
           
    categoryContainer.appendChild(div); 
    });
}




getData();
displayCard(1000);