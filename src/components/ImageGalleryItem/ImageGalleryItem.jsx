import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ picture: { webformatURL, largeImageURL }, onSelectedPicture }) => {
    return (
        <img src={webformatURL} className={css.picture} alt='' onClick={() => { onSelectedPicture(largeImageURL) }} />
    );
}