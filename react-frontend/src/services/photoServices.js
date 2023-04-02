export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: require("../assets/media/banner-company.jpg"),
                alt: "Description for Image 1",
                title: "Company Banner",
            },
            {
                itemImageSrc: require("../assets/media/banner1.jpg"),
                alt: "Description for Image 2",
                title: "Title 2",
            },
            {
                itemImageSrc: require("../assets/media/banner2.jpg"),
                alt: "Description for Image 3",
                title: "Title 3",
            },
            {
                itemImageSrc: require("../assets/media/banner3.jpg"),
                alt: "Description for Image 4",
                title: "Title 4",
            },
            {
                itemImageSrc: require("../assets/media/banner4.jpg"),
                alt: "Description for Image 5",
                title: "Title 5",
            },
            // {
            //     itemImageSrc: require("../assets/media/banner5.jpg"),
            //     alt: "Description for Image 6",
            //     title: "Title 6",
            // },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    },
};
