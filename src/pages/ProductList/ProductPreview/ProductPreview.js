import React from 'react';
import './ProductPreview.scss';

class ProductPreview extends React.Component {
  render() {
    const { mainImage, category, name, cookingTime, serving, like } =
      this.props;
    return (
      <div className="productPreviewContainer">
        <img className="productPreviewImage" src={mainImage} alt="food" />
        <h3 className="productType">{category}</h3>
        <p className="productName">{name}</p>
        <div className="productInfo">
          <i className="far fa-clock"></i>
          <span>{cookingTime}</span>
          <i className="far fa-user"></i>
          <span>{serving}</span>
          <i className="far fa-heart greenHeart"></i>
          <span>{like}</span>
        </div>
      </div>
    );
  }
}

export default ProductPreview;
