import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      {/* md => For med. screen size we want 2 cols
    xs => For extra small size we want 1 col
    lg => for large size we want 3 cols
    */}
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
