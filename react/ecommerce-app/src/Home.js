import { useState } from "react";
function Home(){
    const products=[
        {
            id:1,
            name:'REDMI 12 (Moonstone Silver, 128 GB)',
            price:8999,
            imgsrc:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70',
            rating:4.6,
            specifications:[
                '4 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
                '17.25 cm (6.79 inch) Full HD+ Display',
                '50MP + 8MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Helio G88 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories',
            ]
        },
        {
            id:2,
            name:'REDMI 12 (Moonstone Silver, 128 GB)',
            price:9999,
            imgsrc:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/v/0/c51-mzb0dxkin-poco-original-imagzdpycgrcdc8z.jpeg?q=70',
            rating:4.1,
            specifications:[
                '4 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
                '17.25 cm (6.79 inch) Full HD+ Display',
                '50MP + 8MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Helio G88 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories',
            ]
        },
        {
            id:3,
            name:'POCO C50 (Royal Blue, 32 GB)',
            price:6999,
            imgsrc:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70',
            rating:4.1,
            specifications:[
                '4 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
                '17.25 cm (6.79 inch) Full HD+ Display',
                '50MP + 8MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Helio G88 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories',
            ]
        },
        {
            id:4,
            name:'REDMI 12 (Pastel Blue, 128 GB)',
            price:4999,
            imgsrc:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70',
            rating:4.4,
            specifications:[
                '4 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
                '17.25 cm (6.79 inch) Full HD+ Display',
                '50MP + 8MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Helio G88 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories',
            ]
        },
        {
            id:5,
            name:'Infinix HOT 20 Play (Luna Blue, 64 GB)',
            price:8000,
            imgsrc:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/o/e/-original-imagkgrxzahq3egj.jpeg?q=70',
            rating:5,
            specifications:[
                '4 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
                '17.25 cm (6.79 inch) Full HD+ Display',
                '50MP + 8MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Helio G88 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories',
            ]
        },
        {
            id:6,
            name:'POCO C55 (Power Black, 128 GB)',
            price:7000,
            imgsrc:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/y/g/-original-imagnfzybft7wzmp.jpeg?q=70',
            rating:3.9,
            specifications:[
                '4 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
                '17.25 cm (6.79 inch) Full HD+ Display',
                '50MP + 8MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Helio G88 Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories',
            ]
        },
    ];
    const [searchQuery,setSearchquery]=useState('');
    const [filteredProducts,setFilteredProducts]=useState(products);
    const searchProducts=(value)=>{
        setSearchquery(value) ;
        console.log(searchQuery);
        setFilteredProducts(products.filter(product=>product.name.toLowerCase().includes(searchQuery.toLowerCase())));
    };
    
    return(
        <div className="container">
            <div className="row my-4">
                <div className="col-sm-6 mx-auto">
                    <div>
                        <input type="text" value={searchQuery} onChange={(event)=>searchProducts(event.target.value)}  className="form-control" id="exampleFormControlInput1" placeholder="Search product here"/>
                    </div>
                </div>
            </div>
            {
                filteredProducts.map(product=>(
                    <div className="row my-3 py-2 border-bottom" key={product.id}>
                        <div className="col-sm-3 text-center">
                            <img className="img-fluid" width="190px" src={product.imgsrc} alt="product image"></img>
                        </div>
                        <div className="col-sm-6">
                            <h3>{product.name}</h3>
                            <p>{product.rating}</p>
                            <ul>
                                {product.specifications.map(specification=>(
                                    <li key={specification}>{specification}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>{product.price}</h3>
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>  
                ))
            }
        </div>
    );
}
export default Home;