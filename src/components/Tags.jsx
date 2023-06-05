import Badge from "react-bootstrap/Badge";

export const Tags = ({ color, raza }) => {
    return (
    <>
    <Badge bg={color}>{raza}</Badge>
    </>
  );
};
