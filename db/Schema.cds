namespace db;

entity Product {
    key product_id: String;
    image: String;
    product_name: String;
    artist_name: String;
    rating: Decimal;
    price: Integer;
    height: Integer;
    depth: Integer;
    width: Integer;
    available: Boolean;
    state: String;
    description: String;
}
