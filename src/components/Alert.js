export default function Alert(props) {
  const capitalize = (text) => {
    let lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`my-1 alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong className="lead h4">
          {capitalize(props.alert.type)}
        </strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.alert.msg}
      </div>
    )
  );
}
