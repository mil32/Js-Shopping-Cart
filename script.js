const prs= ['1','2','3','4','5'];

fillProds()

function fillProds(){
    const card = '<article class="card"><div class="cardImage"></div><div class="cardData"><h3>Product Title</h3><p>Here goes the product description</p><div class="cardFooter"><div class="price">$ 99.00</div><button type="button" class="btn btn-outline-success" onclick="hello(event)">Add</button></div></div></article>'
    
    prs.forEach(pr => {
        let doc = document.getElementById('PrGrid');
        doc.insertAdjacentHTML('beforeend', card);
    })
}



function hello(event) {
    const myElement= '<div class="prList"><div class="cartProd"><button type="button" class="btn btn-outline-danger btn-sm">X</button><span class="cartProdTitle">Product Here</span></div></div>'


    prs.push('hello')
    console.log('arr > ', event);
    document.getElementById('ShopItems').insertAdjacentHTML('beforeend', myElement);
}