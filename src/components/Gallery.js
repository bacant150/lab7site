import React from "react";
import GoodsCard from "./GoodsCard";

const Gallery = () => {
    const goods = [
        {
            id: 1,
            image: "https://content1.rozetka.com.ua/goods/images/big/398086081.jpg",
            name: "Samsung Galaxy S24 Ultra 12/512GB Titanium Violet",
            price: 52999,
        },
        {
            id: 2,
            image: "https://content1.rozetka.com.ua/goods/images/big/364621631.jpg",
            name: "Apple iPhone 15 Plus 256GB Green",
            price: 39999,
        },
        {
            id: 3,
            image: "https://content2.rozetka.com.ua/goods/images/big/37357013.jpg",
            name: "Apple iPhone 11 64GB Black",
            price: 15499,
        },
        {
            id: 4,
            image: "https://content.rozetka.com.ua/goods/images/big/417139066.jpg",
            name: "Samsung Galaxy A35 5G 6/128GB Navy",
            price: 17999,
        },
        {
            id: 5,
            image: "https://content1.rozetka.com.ua/goods/images/big/498995616.jpg",
            name: "Xiaomi Redmi Note 13 8/256GB Midnight Black",
            price: 7999,
        },
        {
            id: 6,
            image: "https://content2.rozetka.com.ua/goods/images/big/468888039.jpg",
            name: "Apple iPhone 16 Pro Max 1TB Black Titanium",
            price: 88499,
        },
    ];

    return (
        <div style={styles.gallery}>
            {goods.map((item) => (
                <GoodsCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    );
};

const styles = {
    gallery: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
};

export default Gallery;
