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
    // console.log(data.data);
    
    const categoryContainer = document.getElementById('category-container');
    data.data.forEach((video) => {
        
    })
}


getData();