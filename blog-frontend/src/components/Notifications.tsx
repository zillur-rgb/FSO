export interface NotificationsType {
  type: String;
  label?: String;
  desc: String;
}

const Notifications = ({ type, desc, label }: NotificationsType) => {
  return (
    <div
      style={{
        backgroundColor:
          type === "success" ? "green" : type === "error" ? "red" : "yellow",
        color: "black",
        padding: "1px 10px",
        margin: "20px 0",
      }}
    >
      <h1>{label}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Notifications;
