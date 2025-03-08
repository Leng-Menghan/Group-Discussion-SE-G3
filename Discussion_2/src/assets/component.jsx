export default function Card(props) {
    return (
        <div class="col-md-3">
              <div class="product-card">
                <div class="product-card-img">
                  <label class="stock bg-success">{props.status}</label>
                  <img src={props.imageSrc} alt={props.imageAlt} />
                </div>
                <div class="product-card-body">
                  <p class="product-brand">{props.brand}</p>
                  <h5 class="product-name">
                    <a href="">
                      {props.product}
                    </a>
                  </h5>
                  <div>
                    <span class="selling-price">{props.afterDiscount}</span>
                    <span class="original-price">{props.originalPrice}</span>
                  </div>
                  <div class="mt-2">
                    <a href="" class="btn btn1">Add To Cart</a>
                    <a href="" class="btn btn1"> <i class="fa fa-heart"></i> </a>
                    <a href="" class="btn btn1"> View </a>
                  </div>
                </div>
              </div>
            </div>
    );
}