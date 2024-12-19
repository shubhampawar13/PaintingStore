using {db as db} from '../db/Schema';

service paintingStore {
    entity Product as projection on db.Product;
}