export default function Alert(props) {
  const capitalize = (text) => {
    let lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height:"50px",marginTop:"2px",marginBottom:"2rem"}} className="p-2">
    {
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong className="lead h4">
          {capitalize(props.alert.type)}
        </strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.alert.msg}
      </div>
    )}
    </div>
  );
}
