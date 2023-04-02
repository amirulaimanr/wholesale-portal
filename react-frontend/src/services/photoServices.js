export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: "../assets/media/banner1.jpg",
                thumbnailImageSrc: "../assets/media/banner1.jpg",
                alt: "Description for Image 1",
                title: "Title 1",
            },
            {
                itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",
                thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg",
                alt: "Description for Image 2",
                title: "Title 2",
            },
            {
                itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg",
                thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg",
                alt: "Description for Image 3",
                title: "Title 3",
            },
            {
                itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg",
                thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg",
                alt: "Description for Image 4",
                title: "Title 4",
            },
            {
                itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg",
                thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg",
                alt: "Description for Image 5",
                title: "Title 5",
            },
            {
                itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg",
                thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg",
                alt: "Description for Image 6",
                title: "Title 6",
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    },
};
