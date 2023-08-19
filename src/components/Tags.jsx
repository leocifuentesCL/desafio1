import Badge from "react-bootstrap/Badge";

export const Tags = ({ color, texto }) => {
    return (
    <>
    <Badge bg={color}>{texto}</Badge>
    </>
  );
};
